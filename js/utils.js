/* ============================================
   💻 JAVASCRIPT: UTILIDADES
   ============================================ */

/* --- Toast Notification --- */
function toast(m){
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = m;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.opacity = 0;
    setTimeout(() => t.remove(), 300);
  }, 2500);
}
