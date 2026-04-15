// ============================================================
//  Elephant Bookstore – Shared Cart Logic
//  Place this file at: css/../cart.js  (root of project)
//  or adjust the <script src=""> path accordingly.
// ============================================================

const CART_KEY = 'elephantCart';

/* ── Read / Write ── */
function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/* ── Mutations ── */
function addToCart(book) {
  const cart = getCart();
  const existing = cart.find(i => i.id === book.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...book, qty: 1 });
  }
  saveCart(cart);
  updateCartBadge();
  showToast(`"${book.title}" added to cart!`);
}

function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
  updateCartBadge();
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
}

/* ── Badge ── */
function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const total = getCart().reduce((s, i) => s + i.qty, 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}

/* ── Toast notification ── */
function showToast(msg) {
  let toast = document.getElementById('cart-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cart-toast';
    toast.style.cssText = `
      position:fixed;bottom:30px;right:30px;z-index:9999;
      background:#0d1228;color:#ffd97d;
      padding:12px 20px;border-radius:8px;
      font-family:'Times New Roman',serif;font-size:15px;
      box-shadow:0 4px 20px rgba(0,0,0,.4);
      opacity:0;transition:opacity .3s;pointer-events:none;
      border:1px solid #be852c;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

/* ── Auto-run on page load ── */
document.addEventListener('DOMContentLoaded', updateCartBadge);
