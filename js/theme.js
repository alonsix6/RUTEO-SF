/* ============================================
   💻 JAVASCRIPT: GESTIÓN DE TEMAS
   ============================================ */

/* --- Cargar Tema Guardado --- */
function loadTheme(){
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  updateActiveTheme(savedTheme);
}

/* --- Toggle Theme Menu --- */
function toggleThemeMenu(){
  const menu = document.getElementById('themeMenu');
  menu.classList.toggle('hidden');
}

/* --- Cambiar Tema --- */
function changeTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
  updateActiveTheme(theme);

  const themeNames = {
    dark: '🌙 Modo oscuro',
    light: '☀️ Modo claro',
    ocean: '🌊 Ocean Blue',
    forest: '🌿 Forest Green',
    pink: '💖 Pink'
  };

  toast(themeNames[theme] + ' activado');
  document.getElementById('themeMenu').classList.add('hidden');
}

/* --- Actualizar Icono del Botón --- */
function updateThemeIcon(theme){
  const icons = {
    dark: '🌙',
    light: '☀️',
    ocean: '🌊',
    forest: '🌿',
    pink: '💖'
  };
  document.getElementById('themeToggle').textContent = icons[theme] || '🎨';
}

/* --- Marcar Tema Activo --- */
function updateActiveTheme(theme){
  document.querySelectorAll('.theme-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.theme === theme);
  });
}

/* --- Cerrar Menú al Hacer Click Fuera --- */
document.addEventListener('click', (e) => {
  const menu = document.getElementById('themeMenu');
  const toggle = document.getElementById('themeToggle');
  if(!menu.contains(e.target) && !toggle.contains(e.target)){
    menu.classList.add('hidden');
  }
});
