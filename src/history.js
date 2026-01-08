/* ============================================
   Linky - Historial (Render y CRUD)
   ES Module Version
   ============================================ */

import { utmHistory, setUtmHistory } from './constants.js';
import { toast } from './utils.js';

/* --- Renderizar Historial --- */
export function renderHistory() {
  const c = document.getElementById('utmList');
  if (!c) return;
  c.innerHTML = '';

  utmHistory.forEach((u, index) => {
    const d = document.createElement('div');
    d.className = 'utm-item';

    // Agregar clase según estado de verificación
    if (u.urlStatus) {
      if (u.urlStatus.status === 'ok') d.classList.add('url-ok');
      else if (u.urlStatus.status === 'warning') d.classList.add('url-warning');
      else if (u.urlStatus.status === 'error') d.classList.add('url-error');
      else if (u.urlStatus.status === 'checking') d.classList.add('url-checking');
    }

    // Badge de estado
    let statusBadge = '';
    if (u.urlStatus) {
      const st = u.urlStatus;
      if (st.status === 'checking') {
        statusBadge = '<span class="url-status-badge checking">Verificando...</span>';
      } else if (st.status === 'ok') {
        statusBadge = `<span class="url-status-badge ok">OK (${st.code})</span>`;
      } else if (st.status === 'warning') {
        statusBadge = `<span class="url-status-badge warning">Redirect (${st.code})</span>`;
      } else if (st.status === 'error') {
        statusBadge = `<span class="url-status-badge error">Error (${st.code || 'N/A'})</span>`;
      }
    }

    d.innerHTML = `
      <div class="utm-header">
        <div class="utm-campaign">${u.utm_campaign}${statusBadge}</div>
        <div class="utm-actions">
          <button class="utm-action-btn" onclick="copyFromHistory(${index})" title="Copiar UTM"><i data-lucide="clipboard-copy" class="icon"></i> Copiar</button>
          <button class="utm-action-btn delete" onclick="deleteFromHistory(${index})" title="Eliminar UTM"><i data-lucide="trash-2" class="icon"></i></button>
        </div>
      </div>
      <div class="utm-date" style="font-size:0.75rem;color:var(--muted);margin-bottom:8px;">${new Date(u.createdAt).toLocaleString()}</div>
      <div class="utm-url">${u.urlCompleta}</div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();

    c.appendChild(d);
  });
}

/* --- Actualizar Estadísticas --- */
export function updateStats() {
  const totalEl = document.getElementById('totalCount');
  const brandEl = document.getElementById('brandCount');
  const ecomEl = document.getElementById('ecomCount');

  if (totalEl) totalEl.textContent = utmHistory.length;
  if (brandEl) brandEl.textContent = utmHistory.filter(x => x.division === 'brand').length;
  if (ecomEl) ecomEl.textContent = utmHistory.filter(x => x.division === 'ecommerce').length;
}

/* --- Copiar UTM desde Historial --- */
export function copyFromHistory(index) {
  const url = utmHistory[index]?.urlCompleta;
  if (url) {
    navigator.clipboard.writeText(url);
    toast('UTM copiada');
  }
}

/* --- Eliminar UTM del Historial --- */
export function deleteFromHistory(index) {
  if (confirm('¿Eliminar esta UTM del historial?')) {
    utmHistory.splice(index, 1);
    localStorage.setItem('utmHistory', JSON.stringify(utmHistory));
    renderHistory();
    updateStats();
    toast('UTM eliminada');
  }
}

/* --- Limpiar Todo el Historial --- */
export function clearHistory() {
  if (confirm('¿Borrar todo el historial?')) {
    setUtmHistory([]);
    utmHistory.length = 0; // Clear the array in place
    localStorage.removeItem('utmHistory');
    renderHistory();
    updateStats();
    toast('Historial borrado');
  }
}
