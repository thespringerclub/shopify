// theme.js — small, framework-free behaviors for the Springer Club theme.
// Brief §15: motion is restrained. No fade-ins, no parallax, no spring/bounce.

(function () {
  'use strict';

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ----- Header scroll state -----
   * Adds .scrolled to the header section group when scrolled past 80px.
   * Drives both the opaque-on-scroll behavior and the transparent-over-hero treatment.
   */
  function initHeaderScroll() {
    const group = $('.shopify-section-group-header-group');
    const header = $('.site-header');
    if (!header) return;

    const onScroll = () => {
      const scrolled = window.scrollY > 80;
      header.classList.toggle('scrolled', scrolled);
      if (group) group.classList.toggle('scrolled', scrolled);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ----- Drawer + overlay machinery ----- */
  const drawerState = {
    cart: false,
    search: false,
    menu: false,
  };

  function setDrawer(name, open) {
    drawerState[name] = open;
    const map = {
      cart:   ['.cart-drawer', '.drawer-scrim'],
      search: ['.search-overlay'],
      menu:   ['.mobile-menu'],
    };
    (map[name] || []).forEach(sel => {
      const el = $(sel);
      if (el) el.dataset.open = open ? 'true' : 'false';
    });
    document.body.style.overflow = (drawerState.cart || drawerState.search || drawerState.menu) ? 'hidden' : '';
    if (open && name === 'search') {
      const input = $('.search-overlay input[type="search"], .search-overlay .search-input');
      if (input) setTimeout(() => input.focus(), 50);
    }
  }

  function initDrawerTriggers() {
    document.addEventListener('click', (e) => {
      const openTarget = e.target.closest('[data-open-drawer]');
      if (openTarget) {
        e.preventDefault();
        setDrawer(openTarget.dataset.openDrawer, true);
        return;
      }
      const closeTarget = e.target.closest('[data-close-drawer]');
      if (closeTarget) {
        e.preventDefault();
        setDrawer(closeTarget.dataset.closeDrawer, false);
        return;
      }
      if (e.target.matches('.drawer-scrim')) {
        setDrawer('cart', false);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        Object.keys(drawerState).forEach(k => { if (drawerState[k]) setDrawer(k, false); });
      }
    });
  }

  /* ----- Accordions (PDP specs / shipping) ----- */
  function initAccordions() {
    document.addEventListener('click', (e) => {
      const head = e.target.closest('.acc-head');
      if (!head) return;
      const acc = head.closest('.acc');
      if (!acc) return;
      acc.classList.toggle('is-open');
      const open = acc.classList.contains('is-open');
      head.setAttribute('aria-expanded', String(open));
      const plus  = head.querySelector('.acc-plus');
      const minus = head.querySelector('.acc-minus');
      if (plus)  plus.style.display  = open ? 'none' : '';
      if (minus) minus.style.display = open ? '' : 'none';
    });
  }

  /* ----- Toast ----- */
  let toastTimer = null;
  function showToast(message) {
    const t = $('.toast');
    if (!t) return;
    t.textContent = message;
    t.dataset.show = 'true';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.dataset.show = 'false'; }, 2400);
  }

  /* ----- Cart: AJAX add + drawer refresh -----
   * Uses Shopify Section Rendering API to refresh the cart drawer.
   * Drawer is rendered by the `cart-drawer` snippet inside layout/theme.liquid;
   * to refresh, we re-render the dedicated `cart-drawer` section if it exists,
   * otherwise we fall back to /?sections= against the cart drawer snippet's wrapping section.
   */
  async function refreshCart() {
    try {
      const res = await fetch('/cart.js', { headers: { 'Accept': 'application/json' } });
      const cart = await res.json();
      // Update bag count
      $$('.bag-count').forEach(el => {
        el.textContent = cart.item_count > 0 ? String(cart.item_count) : '';
        el.toggleAttribute('hidden', cart.item_count === 0);
      });
      // Re-render the drawer using sections API
      const sectionRes = await fetch('/?sections=cart-drawer');
      if (sectionRes.ok) {
        const json = await sectionRes.json();
        const html = json['cart-drawer'];
        if (html) {
          const drawer = $('.cart-drawer');
          const wrap = document.createElement('div');
          wrap.innerHTML = html;
          const fresh = wrap.querySelector('.cart-drawer');
          if (drawer && fresh) {
            const wasOpen = drawer.dataset.open === 'true';
            drawer.replaceWith(fresh);
            if (wasOpen) fresh.dataset.open = 'true';
          }
        }
      }
    } catch (err) {
      // No-op. Cart still functions via full page nav.
    }
  }

  function initAddToCart() {
    document.addEventListener('submit', async (e) => {
      const form = e.target.closest('form[action*="/cart/add"]');
      if (!form) return;
      e.preventDefault();
      const button = form.querySelector('[type="submit"]');
      if (button) button.setAttribute('disabled', 'true');
      try {
        const fd = new FormData(form);
        fd.set('sections', 'cart-drawer');
        const res = await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Accept': 'application/javascript' },
          body: fd,
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.description || 'Add failed.');
        const name = data.product_title || data.title || 'Item';
        showToast(name + ' — added to the bag.');
        await refreshCart();
        setTimeout(() => setDrawer('cart', true), 200);
      } catch (err) {
        showToast(err.message || 'Could not add to bag.');
      } finally {
        if (button) button.removeAttribute('disabled');
      }
    });
  }

  function initCartLineMutations() {
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('[data-line-change]');
      if (!btn) return;
      e.preventDefault();
      const line = parseInt(btn.dataset.line, 10);
      const delta = parseInt(btn.dataset.lineChange, 10);
      const row = btn.closest('[data-cart-row]');
      const currentQty = row ? parseInt(row.dataset.qty, 10) : 0;
      const nextQty = Math.max(0, currentQty + delta);
      try {
        await fetch('/cart/change.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ line, quantity: nextQty }),
        });
        await refreshCart();
      } catch (err) {
        // No-op.
      }
    });
  }

  /* ----- PDP: variant selection drives Add to bag -----
   * Variant resolution via product.variants array shipped as JSON in the section.
   */
  function initVariantSelector() {
    const root = $('[data-product-root]');
    if (!root) return;

    const dataEl = $('[data-product-json]', root);
    if (!dataEl) return;

    let product;
    try { product = JSON.parse(dataEl.textContent); } catch { return; }

    const optionsState = product.options.map(() => null);

    // Pre-select first available variant
    const firstAvailable = product.variants.find(v => v.available) || product.variants[0];
    if (firstAvailable) {
      product.options.forEach((_, i) => {
        optionsState[i] = firstAvailable['option' + (i + 1)];
      });
    }

    const variantInput = $('[name="id"]', root);
    const priceEl      = $('[data-price]', root);
    const colorLabel   = $('[data-selected-color]', root);
    const addButton    = $('[data-add-to-bag]', root);
    const oosNote      = $('[data-oos-note]', root);

    function findVariant() {
      return product.variants.find(v =>
        product.options.every((_, i) => v['option' + (i + 1)] === optionsState[i])
      );
    }

    function updateUI() {
      const v = findVariant();

      // Update swatches
      $$('[data-option-index]', root).forEach(el => {
        const i = parseInt(el.dataset.optionIndex, 10);
        el.classList.toggle('selected', el.dataset.value === optionsState[i]);
      });

      if (v) {
        if (variantInput) variantInput.value = v.id;
        if (priceEl) priceEl.textContent = formatMoney(v.price);
        if (addButton) {
          addButton.disabled = !v.available;
          addButton.textContent = v.available
            ? (addButton.dataset.labelAvailable || 'Add to bag.')
            : (addButton.dataset.labelOos || 'Currently between runs.');
        }
        if (oosNote) oosNote.hidden = v.available;
      }

      if (colorLabel) {
        const colorIndex = product.options.findIndex(o => /color|colour/i.test(o));
        if (colorIndex !== -1) colorLabel.textContent = optionsState[colorIndex] || '';
      }
    }

    function formatMoney(cents) {
      const v = (cents / 100);
      const formatted = window.Shopify && window.Shopify.currency
        ? v.toLocaleString('en-US', { style: 'currency', currency: window.Shopify.currency.active || 'USD' })
        : '$' + v.toFixed(2);
      return formatted;
    }

    root.addEventListener('click', (e) => {
      const opt = e.target.closest('[data-option-index]');
      if (!opt) return;
      if (opt.classList.contains('oos') || opt.disabled) return;
      const i = parseInt(opt.dataset.optionIndex, 10);
      optionsState[i] = opt.dataset.value;
      updateUI();
    });

    updateUI();
  }

  /* ----- Mobile menu toggle ----- */
  function initMobileMenu() {
    const toggle = $('.menu-toggle');
    if (toggle) toggle.addEventListener('click', () => setDrawer('menu', !drawerState.menu));
  }

  /* ----- Page progress hairline (brief §12) ----- */
  function initPageProgress() {
    const bar = $('.page-progress');
    if (!bar) return;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.width = pct + '%';
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  /* ----- Boot ----- */
  document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initDrawerTriggers();
    initAccordions();
    initAddToCart();
    initCartLineMutations();
    initVariantSelector();
    initMobileMenu();
    initPageProgress();
  });
})();
