/* ============================================
   💻 JAVASCRIPT: HISTORIAL (Render y CRUD)
   ============================================ */

/* --- Renderizar Historial --- */
function renderHistory(){
  const c = document.getElementById('utmList');
  c.innerHTML = '';

  utmHistory.forEach((u, index) => {
    const d = document.createElement('div');
    d.className = 'utm-item';

    // Agregar clase según estado de verificación
    if(u.urlStatus){
      if(u.urlStatus.status === 'ok') d.classList.add('url-ok');
      else if(u.urlStatus.status === 'warning') d.classList.add('url-warning');
      else if(u.urlStatus.status === 'error') d.classList.add('url-error');
      else if(u.urlStatus.status === 'checking') d.classList.add('url-checking');
    }

    // Badge de estado
    let statusBadge = '';
    if(u.urlStatus){
      const st = u.urlStatus;
      if(st.status === 'checking'){
        statusBadge = '<span class="url-status-badge checking">🔄 Verificando...</span>';
      } else if(st.status === 'ok'){
        statusBadge = `<span class="url-status-badge ok">✅ OK (${st.code})</span>`;
      } else if(st.status === 'warning'){
        statusBadge = `<span class="url-status-badge warning">⚠️ Redirect (${st.code})</span>`;
      } else if(st.status === 'error'){
        statusBadge = `<span class="url-status-badge error">❌ Error (${st.code || 'N/A'})</span>`;
      }
    }

    d.innerHTML = `
      <div class="utm-header">
        <div class="utm-campaign">${u.utm_campaign}${statusBadge}</div>
        <div class="utm-actions">
          <button class="utm-action-btn" onclick="copyFromHistory(${index})" title="Copiar UTM">📋 Copiar</button>
          <button class="utm-action-btn delete" onclick="deleteFromHistory(${index})" title="Eliminar UTM">🗑️</button>
        </div>
      </div>
      <div class="utm-date" style="font-size:0.75rem;color:var(--muted);margin-bottom:8px;">${new Date(u.createdAt).toLocaleString()}</div>
      <div class="utm-url">${u.urlCompleta}</div>
    `;

    c.appendChild(d);
  });
}

/* --- Actualizar Estadísticas --- */
function updateStats(){
  document.getElementById('totalCount').textContent = utmHistory.length;
  document.getElementById('brandCount').textContent = utmHistory.filter(x => x.division === 'brand').length;
  document.getElementById('ecomCount').textContent = utmHistory.filter(x => x.division === 'ecommerce').length;
}

/* --- Copiar UTM desde Historial --- */
function copyFromHistory(index){
  const url = utmHistory[index].urlCompleta;
  navigator.clipboard.writeText(url);
  toast('✅ UTM copiada');
}

/* --- Eliminar UTM del Historial --- */
function deleteFromHistory(index){
  if(confirm('¿Eliminar esta UTM del historial?')){
    utmHistory.splice(index, 1);
    localStorage.setItem('utmHistory', JSON.stringify(utmHistory));
    renderHistory();
    updateStats();
    toast('🗑️ UTM eliminada');
  }
}

/* --- Limpiar Todo el Historial --- */
function clearHistory(){
  if(confirm('¿Borrar todo el historial?')){
    utmHistory = [];
    localStorage.removeItem('utmHistory');
    renderHistory();
    updateStats();
    toast('🗑️ Historial borrado');
  }
}
