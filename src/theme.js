/* ============================================
   RUTEO - Gestión de Temas
   ES Module Version
   ============================================ */

import { toast } from './utils.js';

/* --- Cargar Tema Guardado --- */
export function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  updateActiveTheme(savedTheme);
}

/* --- Toggle Theme Menu --- */
export function toggleThemeMenu() {
  const menu = document.getElementById('themeMenu');
  menu.classList.toggle('hidden');
}

/* --- Cambiar Tema --- */
export function changeTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
  updateActiveTheme(theme);

  const themeNames = {
    dark: 'Modo oscuro',
    light: 'Modo claro',
    ocean: 'Ocean Blue',
    forest: 'Forest Green',
    pink: 'Pink'
  };

  toast(themeNames[theme] + ' activado');
  document.getElementById('themeMenu').classList.add('hidden');
}

/* --- Actualizar Icono del Botón --- */
function updateThemeIcon(theme) {
  const icons = {
    dark: '🌙',
    light: '☀️',
    ocean: '🌊',
    forest: '🌿',
    pink: '💖'
  };
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = icons[theme] || '🎨';
}

/* --- Marcar Tema Activo --- */
function updateActiveTheme(theme) {
  document.querySelectorAll('.theme-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.theme === theme);
  });
}

/* --- Setup: Cerrar Menú al Hacer Click Fuera --- */
export function setupThemeListeners() {
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('themeMenu');
    const toggle = document.getElementById('themeToggle');
    if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.add('hidden');
    }
  });
}
