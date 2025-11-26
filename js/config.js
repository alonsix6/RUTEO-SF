/* ============================================
   💻 JAVASCRIPT: CONFIGURATION SYSTEM
   ============================================ */

/* --- Default Configuration --- */
function getDefaultConfig(){
  return {
    urls: [
      {
        id: 'url_1',
        label: 'Delivery — Home',
        url: 'https://delivery.sanfernando.pe/',
        isDefault: true,
        category: 'delivery'
      },
      {
        id: 'url_2',
        label: 'Delivery — Pollo',
        url: 'https://delivery.sanfernando.pe/categorias/pollo',
        isDefault: false,
        category: 'delivery'
      },
      {
        id: 'url_3',
        label: 'Delivery — Embutidos',
        url: 'https://delivery.sanfernando.pe/categorias/embutidos',
        isDefault: false,
        category: 'delivery'
      },
      {
        id: 'url_4',
        label: 'Delivery — Huevos',
        url: 'https://delivery.sanfernando.pe/categorias/huevo',
        isDefault: false,
        category: 'delivery'
      },
      {
        id: 'url_5',
        label: 'Delivery — Vales',
        url: 'https://delivery.sanfernando.pe/vales',
        isDefault: false,
        category: 'delivery'
      }
    ],

    campanias: [
      {
        id: 'camp_1',
        nombre: 'AON',
        descripcion: 'Always On',
        isCore: true,
        division: 'both'
      },
      {
        id: 'camp_2',
        nombre: 'Cyber',
        descripcion: 'Cyber Week',
        isCore: true,
        division: 'both'
      },
      {
        id: 'camp_3',
        nombre: 'HUEVOS',
        descripcion: 'Campaña Huevos',
        isCore: true,
        division: 'both'
      },
      {
        id: 'camp_4',
        nombre: 'NAVIDADB2B',
        descripcion: 'Navidad B2B',
        isCore: true,
        division: 'both'
      },
      {
        id: 'camp_5',
        nombre: 'Elaborados',
        descripcion: 'Productos Elaborados',
        isCore: true,
        division: 'both'
      }
    ],

    motivos: [
      {
        id: 'mot_1',
        nombre: 'VALES',
        categoria: 'promocion',
        division: 'both'
      },
      {
        id: 'mot_2',
        nombre: 'chorizo',
        categoria: 'producto',
        division: 'both'
      },
      {
        id: 'mot_3',
        nombre: 'hamburguesa',
        categoria: 'producto',
        division: 'both'
      },
      {
        id: 'mot_4',
        nombre: 'pollo',
        categoria: 'producto',
        division: 'both'
      },
      {
        id: 'mot_5',
        nombre: 'embutidos',
        categoria: 'producto',
        division: 'both'
      },
      {
        id: 'mot_6',
        nombre: 'huevos',
        categoria: 'producto',
        division: 'both'
      },
      {
        id: 'mot_7',
        nombre: 'DesayunoSangrecita',
        categoria: 'producto',
        division: 'both'
      },
      {
        id: 'mot_8',
        nombre: 'DescuentoWeb',
        categoria: 'promocion',
        division: 'both'
      }
    ],

    codigosBrand: [
      {
        id: 'cod_1',
        codigo: 'AON',
        descripcion: 'Always On',
        isCore: true
      },
      {
        id: 'cod_2',
        codigo: 'NAB2B',
        descripcion: 'Navidad B2B',
        isCore: true
      },
      {
        id: 'cod_3',
        codigo: 'HUE',
        descripcion: 'Huevos',
        isCore: true
      },
      {
        id: 'cod_4',
        codigo: 'Elaborados',
        descripcion: 'Elaborados',
        isCore: true
      }
    ]
  };
}

/* --- Load Configuration --- */
function loadConfig(){
  const saved = localStorage.getItem('utmGeneratorConfig');
  return saved ? JSON.parse(saved) : getDefaultConfig();
}

/* --- Save Configuration --- */
function saveConfig(config){
  localStorage.setItem('utmGeneratorConfig', JSON.stringify(config));
  syncFormOptions();
}

/* --- Initialize Config on Page Load --- */
function initConfig(){
  const config = loadConfig();
  if(!localStorage.getItem('utmGeneratorConfig')){
    saveConfig(config);
  }
  syncFormOptions();
  setupConfigInputListeners();
}

/* --- Setup Clean Input Listeners for Config Forms --- */
function setupConfigInputListeners(){
  const urlLabel = document.getElementById('urlLabel');
  if(urlLabel) urlLabel.addEventListener('input', cleanInput);

  const urlCategory = document.getElementById('urlCategory');
  if(urlCategory) urlCategory.addEventListener('input', cleanInput);

  const campanaName = document.getElementById('campanaName');
  if(campanaName) campanaName.addEventListener('input', cleanInput);

  const campanaDesc = document.getElementById('campanaDesc');
  if(campanaDesc) campanaDesc.addEventListener('input', cleanInput);

  const motivoName = document.getElementById('motivoName');
  if(motivoName) motivoName.addEventListener('input', cleanInput);

  const motivoCategoria = document.getElementById('motivoCategoria');
  if(motivoCategoria) motivoCategoria.addEventListener('input', cleanInput);

  const codigoName = document.getElementById('codigoName');
  if(codigoName) codigoName.addEventListener('input', cleanInput);

  const codigoDesc = document.getElementById('codigoDesc');
  if(codigoDesc) codigoDesc.addEventListener('input', cleanInput);
}

/* --- Sync Form Options with Config --- */
function syncFormOptions(){
  const config = loadConfig();

  // Sync URLs
  const urlSelect = document.getElementById('urlDestino');
  urlSelect.innerHTML = '<option value="">Seleccionar URL...</option>';
  config.urls.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u.url;
    opt.textContent = u.label;
    urlSelect.appendChild(opt);
  });
  const customUrlOpt = document.createElement('option');
  customUrlOpt.value = 'custom';
  customUrlOpt.textContent = '➕ URL Personalizada';
  urlSelect.appendChild(customUrlOpt);

  // Sync Campañas
  const campSelect = document.getElementById('tipoCampana');
  const accountLinkOpt = campSelect.querySelector('#accountLinkOption');
  campSelect.innerHTML = '<option value="">Seleccionar...</option>';
  config.campanias.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.nombre;
    opt.textContent = c.descripcion ? `${c.nombre} (${c.descripcion})` : c.nombre;
    campSelect.appendChild(opt);
  });
  if(accountLinkOpt) campSelect.appendChild(accountLinkOpt);
  const customCampOpt = document.createElement('option');
  customCampOpt.value = 'custom';
  customCampOpt.textContent = '➕ Personalizada';
  campSelect.appendChild(customCampOpt);

  // Sync Motivos
  const motivoSelect = document.getElementById('motivo');
  motivoSelect.innerHTML = '<option value="">Seleccionar...</option>';
  config.motivos.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.nombre;
    opt.textContent = m.nombre;
    motivoSelect.appendChild(opt);
  });
  const customMotOpt = document.createElement('option');
  customMotOpt.value = 'custom';
  customMotOpt.textContent = '➕ Personalizado';
  motivoSelect.appendChild(customMotOpt);

  // Sync Códigos Brand
  const codigoSelect = document.getElementById('codigoPieza');
  codigoSelect.innerHTML = '<option value="">Seleccionar...</option>';
  config.codigosBrand.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.codigo;
    opt.textContent = c.codigo;
    codigoSelect.appendChild(opt);
  });
  const customCodOpt = document.createElement('option');
  customCodOpt.value = 'custom';
  customCodOpt.textContent = '➕ Otro código';
  codigoSelect.appendChild(customCodOpt);
}

/* --- Open/Close Config Modal --- */
function openConfigModal(){
  document.getElementById('configModal').classList.remove('hidden');
  renderConfigTab('urls');
}

function closeConfigModal(e){
  if(!e || e.target.id === 'configModal' || e.target.classList.contains('config-modal-close')){
    document.getElementById('configModal').classList.add('hidden');
  }
}

/* --- Switch Config Tabs --- */
function switchConfigTab(tab){
  document.querySelectorAll('.config-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });

  document.querySelectorAll('.config-tab-content').forEach(content => {
    content.classList.add('hidden');
  });
  document.getElementById(`configTab${capitalize(tab)}`).classList.remove('hidden');

  renderConfigTab(tab);
}

function capitalize(str){
  const map = {
    'urls': 'Urls',
    'campanias': 'Campanias',
    'motivos': 'Motivos',
    'codigos': 'Codigos'
  };
  return map[str] || str;
}

/* --- Render Config Tabs --- */
function renderConfigTab(tab){
  const config = loadConfig();

  switch(tab){
    case 'urls':
      renderUrlsList(config.urls);
      break;
    case 'campanias':
      renderCampaniasList(config.campanias);
      break;
    case 'motivos':
      renderMotivosList(config.motivos);
      break;
    case 'codigos':
      renderCodigosList(config.codigosBrand);
      break;
  }
}

/* --- URLS MANAGEMENT --- */
function renderUrlsList(urls){
  const container = document.getElementById('urlsList');
  container.innerHTML = '';

  urls.forEach(url => {
    const card = document.createElement('div');
    card.className = 'config-item-card';

    card.innerHTML = `
      <div class="config-item-info">
        <div class="config-item-name">${url.label}</div>
        <div class="config-item-desc">${url.url}</div>
        <div class="config-item-meta">
          ${url.category ? `<span class="config-badge custom">${url.category}</span>` : ''}
        </div>
      </div>
      <div class="config-item-actions">
        <button class="config-action-btn delete" onclick="deleteUrl('${url.id}')">🗑️ Eliminar</button>
      </div>
    `;

    container.appendChild(card);
  });
}

function showAddUrlForm(){
  document.getElementById('addUrlForm').classList.remove('hidden');
}

function cancelAddUrl(){
  document.getElementById('addUrlForm').classList.add('hidden');
  document.getElementById('urlLabel').value = '';
  document.getElementById('urlValue').value = '';
  document.getElementById('urlCategory').value = '';
}

function saveNewUrl(){
  const label = document.getElementById('urlLabel').value.trim();
  const url = document.getElementById('urlValue').value.trim();
  const category = document.getElementById('urlCategory').value.trim();

  if(!label || !url){
    return toast('⚠️ Completa los campos obligatorios');
  }

  if(!validateText(label)){
    return toast('⚠️ La etiqueta contiene caracteres no permitidos');
  }

  if(category && !validateText(category)){
    return toast('⚠️ La categoría contiene caracteres no permitidos');
  }

  if(!url.startsWith('http://') && !url.startsWith('https://')){
    return toast('⚠️ La URL debe comenzar con http:// o https://');
  }

  const config = loadConfig();

  if(config.urls.some(u => u.url === url)){
    return toast('⚠️ Ya existe una URL con esa dirección');
  }

  config.urls.push({
    id: 'url_' + Date.now(),
    label,
    url,
    isDefault: false,
    category: category || 'custom'
  });

  saveConfig(config);
  cancelAddUrl();
  renderUrlsList(config.urls);
  toast('✅ URL agregada correctamente');
}

function deleteUrl(id){
  if(!confirm('¿Eliminar esta URL?')) return;

  const config = loadConfig();
  config.urls = config.urls.filter(u => u.id !== id);
  saveConfig(config);
  renderUrlsList(config.urls);
  toast('🗑️ URL eliminada');
}

/* --- CAMPAÑAS MANAGEMENT --- */
function renderCampaniasList(campanias){
  const container = document.getElementById('campanasList');
  container.innerHTML = '';

  campanias.forEach(camp => {
    const card = document.createElement('div');
    card.className = 'config-item-card';

    const badge = camp.isCore ?
      '<span class="config-badge core">🔒 Core</span>' :
      '<span class="config-badge custom">Custom</span>';

    const divBadge = camp.division === 'both' ?
      '<span class="config-badge both">Ambas</span>' :
      camp.division === 'brand' ?
      '<span class="config-badge brand">Brand</span>' :
      '<span class="config-badge ecommerce">Ecommerce</span>';

    const actions = camp.isCore ?
      '<button class="config-action-btn locked">🔒 Protegido</button>' :
      '<button class="config-action-btn delete" onclick="deleteCampana(\'' + camp.id + '\')">🗑️ Eliminar</button>';

    card.innerHTML = `
      <div class="config-item-info">
        <div class="config-item-name">${camp.nombre}</div>
        <div class="config-item-desc">${camp.descripcion || 'Sin descripción'}</div>
        <div class="config-item-meta">
          ${badge}
          ${divBadge}
        </div>
      </div>
      <div class="config-item-actions">
        ${actions}
      </div>
    `;

    container.appendChild(card);
  });

  updateCampanaPreview();
}

function showAddCampanaForm(){
  document.getElementById('addCampanaForm').classList.remove('hidden');
}

function cancelAddCampana(){
  document.getElementById('addCampanaForm').classList.add('hidden');
  document.getElementById('campanaName').value = '';
  document.getElementById('campanaDesc').value = '';
  document.getElementById('campanaDivision').value = 'both';
}

function saveNewCampana(){
  const nombre = document.getElementById('campanaName').value.trim();
  const descripcion = document.getElementById('campanaDesc').value.trim();
  const division = document.getElementById('campanaDivision').value;

  if(!nombre){
    return toast('⚠️ El nombre es obligatorio');
  }

  if(!validateText(nombre)){
    return toast('⚠️ El nombre contiene caracteres no permitidos (usa solo letras, números, _ y -)');
  }

  if(descripcion && !validateText(descripcion)){
    return toast('⚠️ La descripción contiene caracteres no permitidos (usa solo letras, números, _ y -)');
  }

  const config = loadConfig();

  if(config.campanias.some(c => c.nombre.toLowerCase() === nombre.toLowerCase())){
    return toast('⚠️ Ya existe una campaña con ese nombre');
  }

  config.campanias.push({
    id: 'camp_' + Date.now(),
    nombre,
    descripcion,
    isCore: false,
    division
  });

  saveConfig(config);
  cancelAddCampana();
  renderCampaniasList(config.campanias);
  toast('✅ Campaña agregada correctamente');
}

function deleteCampana(id){
  if(!confirm('¿Eliminar esta campaña?')) return;

  const config = loadConfig();
  config.campanias = config.campanias.filter(c => c.id !== id);
  saveConfig(config);
  renderCampaniasList(config.campanias);
  toast('🗑️ Campaña eliminada');
}

function updateCampanaPreview(){
  const nombre = document.getElementById('campanaName').value.trim() || '[TuCampaña]';
  document.getElementById('previewCampana').textContent =
    `brand_conv_${nombre}_OCTUBRE_2025`;
}

/* --- MOTIVOS MANAGEMENT --- */
function renderMotivosList(motivos){
  const container = document.getElementById('motivosList');
  container.innerHTML = '';

  motivos.forEach(mot => {
    const card = document.createElement('div');
    card.className = 'config-item-card';

    const divBadge = mot.division === 'both' ?
      '<span class="config-badge both">Ambas</span>' :
      mot.division === 'brand' ?
      '<span class="config-badge brand">Brand</span>' :
      '<span class="config-badge ecommerce">Ecommerce</span>';

    card.innerHTML = `
      <div class="config-item-info">
        <div class="config-item-name">${mot.nombre}</div>
        <div class="config-item-desc">${mot.categoria || 'Sin categoría'}</div>
        <div class="config-item-meta">
          ${divBadge}
        </div>
      </div>
      <div class="config-item-actions">
        <button class="config-action-btn delete" onclick="deleteMotivo('${mot.id}')">🗑️ Eliminar</button>
      </div>
    `;

    container.appendChild(card);
  });

  updateMotivoPreview();
}

function showAddMotivoForm(){
  document.getElementById('addMotivoForm').classList.remove('hidden');
}

function cancelAddMotivo(){
  document.getElementById('addMotivoForm').classList.add('hidden');
  document.getElementById('motivoName').value = '';
  document.getElementById('motivoCategoria').value = '';
  document.getElementById('motivoDivision').value = 'both';
}

function saveNewMotivo(){
  const nombre = document.getElementById('motivoName').value.trim();
  const categoria = document.getElementById('motivoCategoria').value.trim();
  const division = document.getElementById('motivoDivision').value;

  if(!nombre){
    return toast('⚠️ El nombre es obligatorio');
  }

  if(!validateText(nombre)){
    return toast('⚠️ El nombre contiene caracteres no permitidos (usa solo letras, números, _ y -)');
  }

  if(categoria && !validateText(categoria)){
    return toast('⚠️ La categoría contiene caracteres no permitidos (usa solo letras, números, _ y -)');
  }

  const config = loadConfig();

  if(config.motivos.some(m => m.nombre.toLowerCase() === nombre.toLowerCase())){
    return toast('⚠️ Ya existe un motivo con ese nombre');
  }

  config.motivos.push({
    id: 'mot_' + Date.now(),
    nombre,
    categoria: categoria || 'general',
    division
  });

  saveConfig(config);
  cancelAddMotivo();
  renderMotivosList(config.motivos);
  toast('✅ Motivo agregado correctamente');
}

function deleteMotivo(id){
  if(!confirm('¿Eliminar este motivo?')) return;

  const config = loadConfig();
  config.motivos = config.motivos.filter(m => m.id !== id);
  saveConfig(config);
  renderMotivosList(config.motivos);
  toast('🗑️ Motivo eliminado');
}

function updateMotivoPreview(){
  const nombre = document.getElementById('motivoName').value.trim() || '[TuMotivo]';
  document.getElementById('previewMotivo').textContent =
    `brand_AON_01_META_${nombre}`;
}

/* --- CÓDIGOS BRAND MANAGEMENT --- */
function renderCodigosList(codigos){
  const container = document.getElementById('codigosList');
  container.innerHTML = '';

  codigos.forEach(cod => {
    const card = document.createElement('div');
    card.className = 'config-item-card';

    const badge = cod.isCore ?
      '<span class="config-badge core">🔒 Core</span>' :
      '<span class="config-badge custom">Custom</span>';

    const actions = cod.isCore ?
      '<button class="config-action-btn locked">🔒 Protegido</button>' :
      '<button class="config-action-btn delete" onclick="deleteCodigo(\'' + cod.id + '\')">🗑️ Eliminar</button>';

    card.innerHTML = `
      <div class="config-item-info">
        <div class="config-item-name">${cod.codigo}</div>
        <div class="config-item-desc">${cod.descripcion || 'Sin descripción'}</div>
        <div class="config-item-meta">
          ${badge}
        </div>
      </div>
      <div class="config-item-actions">
        ${actions}
      </div>
    `;

    container.appendChild(card);
  });

  updateCodigoPreview();
}

function showAddCodigoForm(){
  document.getElementById('addCodigoForm').classList.remove('hidden');
}

function cancelAddCodigo(){
  document.getElementById('addCodigoForm').classList.add('hidden');
  document.getElementById('codigoName').value = '';
  document.getElementById('codigoDesc').value = '';
}

function saveNewCodigo(){
  const codigo = document.getElementById('codigoName').value.trim().toUpperCase();
  const descripcion = document.getElementById('codigoDesc').value.trim();

  if(!codigo){
    return toast('⚠️ El código es obligatorio');
  }

  if(!validateText(codigo)){
    return toast('⚠️ El código contiene caracteres no permitidos (usa solo letras, números, _ y -)');
  }

  if(descripcion && !validateText(descripcion)){
    return toast('⚠️ La descripción contiene caracteres no permitidos (usa solo letras, números, _ y -)');
  }

  const config = loadConfig();

  if(config.codigosBrand.some(c => c.codigo === codigo)){
    return toast('⚠️ Ya existe un código con ese nombre');
  }

  config.codigosBrand.push({
    id: 'cod_' + Date.now(),
    codigo,
    descripcion,
    isCore: false
  });

  saveConfig(config);
  cancelAddCodigo();
  renderCodigosList(config.codigosBrand);
  toast('✅ Código agregado correctamente');
}

function deleteCodigo(id){
  if(!confirm('¿Eliminar este código?')) return;

  const config = loadConfig();
  config.codigosBrand = config.codigosBrand.filter(c => c.id !== id);
  saveConfig(config);
  renderCodigosList(config.codigosBrand);
  toast('🗑️ Código eliminado');
}

function updateCodigoPreview(){
  const codigo = document.getElementById('codigoName').value.trim().toUpperCase() || '[TuCodigo]';
  document.getElementById('previewCodigo').textContent =
    `brand_${codigo}_01_META_pollo`;
}

/* --- RESTORE DEFAULTS --- */
function restoreDefaults(){
  if(!confirm('¿Restaurar todos los valores por defecto? Se perderán los cambios personalizados.')){
    return;
  }

  const defaults = getDefaultConfig();
  saveConfig(defaults);

  const activeTab = document.querySelector('.config-tab-btn.active');
  if(activeTab){
    const tab = activeTab.dataset.tab;
    renderConfigTab(tab);
  }

  toast('🔄 Configuración restaurada a valores por defecto');
}
