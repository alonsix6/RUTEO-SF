/* ============================================
   RUTEO - Punto de Entrada Principal
   ES Module Version

   Este archivo:
   1. Importa todos los módulos
   2. Expone funciones necesarias al objeto window (para onclick en HTML)
   3. Inicializa la aplicación
   ============================================ */

// --- Importar módulos ---
import { initConfig, openConfigModal, closeConfigModal, switchConfigTab,
         showAddUrlForm, cancelAddUrl, saveNewUrl, deleteUrl,
         showAddCampanaForm, cancelAddCampana, saveNewCampana, deleteCampana, updateCampanaPreview,
         showAddMotivoForm, cancelAddMotivo, saveNewMotivo, deleteMotivo, updateMotivoPreview,
         showAddCodigoForm, cancelAddCodigo, saveNewCodigo, deleteCodigo, updateCodigoPreview,
         restoreDefaults } from './config.js';

import { loadTheme, toggleThemeMenu, changeTheme, setupThemeListeners } from './theme.js';

import { setupListeners, resetForm, populateNumeroPieza, populateYears,
         setCurrentMonth, setGenerateUTMHandler } from './form.js';

import { generateUTM, copyResult } from './utm.js';

import { renderHistory, updateStats, copyFromHistory, deleteFromHistory, clearHistory } from './history.js';

import { exportCSV, exportExcel } from './export.js';

import { openHelp, closeHelp } from './modals.js';

// --- Exponer funciones al objeto window para onclick handlers en HTML ---
// Config Modal
window.openConfigModal = openConfigModal;
window.closeConfigModal = closeConfigModal;
window.switchConfigTab = switchConfigTab;
window.restoreDefaults = restoreDefaults;

// URLs Config
window.showAddUrlForm = showAddUrlForm;
window.cancelAddUrl = cancelAddUrl;
window.saveNewUrl = saveNewUrl;
window.deleteUrl = deleteUrl;

// Campañas Config
window.showAddCampanaForm = showAddCampanaForm;
window.cancelAddCampana = cancelAddCampana;
window.saveNewCampana = saveNewCampana;
window.deleteCampana = deleteCampana;

// Motivos Config
window.showAddMotivoForm = showAddMotivoForm;
window.cancelAddMotivo = cancelAddMotivo;
window.saveNewMotivo = saveNewMotivo;
window.deleteMotivo = deleteMotivo;

// Códigos Config
window.showAddCodigoForm = showAddCodigoForm;
window.cancelAddCodigo = cancelAddCodigo;
window.saveNewCodigo = saveNewCodigo;
window.deleteCodigo = deleteCodigo;

// Theme
window.toggleThemeMenu = toggleThemeMenu;
window.changeTheme = changeTheme;

// Form
window.resetForm = resetForm;
window.copyResult = copyResult;

// History
window.copyFromHistory = copyFromHistory;
window.deleteFromHistory = deleteFromHistory;
window.clearHistory = clearHistory;

// Export
window.exportCSV = exportCSV;
window.exportExcel = exportExcel;

// Help Modal
window.openHelp = openHelp;
window.closeHelp = closeHelp;

// --- Setup Preview Listeners for Config ---
function setupPreviewListeners() {
  const campanaInput = document.getElementById('campanaName');
  if (campanaInput) {
    campanaInput.addEventListener('input', updateCampanaPreview);
  }

  const motivoInput = document.getElementById('motivoName');
  if (motivoInput) {
    motivoInput.addEventListener('input', updateMotivoPreview);
  }

  const codigoInput = document.getElementById('codigoName');
  if (codigoInput) {
    codigoInput.addEventListener('input', updateCodigoPreview);
  }
}

// --- Inicialización ---
document.addEventListener('DOMContentLoaded', () => {
  // Establecer el handler de generateUTM en form.js
  setGenerateUTMHandler(generateUTM);

  // Inicializar configuración
  initConfig();

  // Poblar selectores
  populateNumeroPieza();
  populateYears();
  setCurrentMonth();

  // Setup listeners
  setupListeners();
  setupThemeListeners();
  setupPreviewListeners();

  // Renderizar datos
  renderHistory();
  updateStats();

  // Cargar tema
  loadTheme();

  console.log('🚀 RUTEO inicializado correctamente');
});
