/* ============================================
   💻 JAVASCRIPT: INICIALIZACIÓN
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initConfig();
  populateNumeroPieza();
  populateYears();
  setCurrentMonth();
  setupListeners();
  renderHistory();
  updateStats();
  loadTheme();
  setupPreviewListeners();
});

/* --- Setup Preview Listeners for Config --- */
function setupPreviewListeners(){
  const campanaInput = document.getElementById('campanaName');
  if(campanaInput){
    campanaInput.addEventListener('input', updateCampanaPreview);
  }

  const motivoInput = document.getElementById('motivoName');
  if(motivoInput){
    motivoInput.addEventListener('input', updateMotivoPreview);
  }

  const codigoInput = document.getElementById('codigoName');
  if(codigoInput){
    codigoInput.addEventListener('input', updateCodigoPreview);
  }
}
