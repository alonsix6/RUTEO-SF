/* ============================================
   RUTEO - Modales
   ES Module Version
   ============================================ */

/* --- Abrir Modal de Ayuda --- */
export function openHelp() {
  document.getElementById('helpModal').classList.remove('hidden');
}

/* --- Cerrar Modal de Ayuda --- */
export function closeHelp(e) {
  if (!e || e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
    document.getElementById('helpModal').classList.add('hidden');
  }
}
