/* ============================================
   RUTEO - Utilidades
   ES Module Version
   ============================================ */

/* --- Toast Notification --- */
export function toast(message) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = message;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.opacity = 0;
    setTimeout(() => t.remove(), 300);
  }, 2500);
}
