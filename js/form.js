/* ============================================
   💻 JAVASCRIPT: FORMULARIO (Listeners y Validación)
   ============================================ */

/* --- Setup Event Listeners --- */
function setupListeners(){
  const $ = id => document.getElementById(id);

  // URL Destino
  $('urlDestino').addEventListener('change', e => {
    $('urlCustom').classList.toggle('hidden', e.target.value !== 'custom');
  });

  // División
  $('division').addEventListener('change', e => {
    const brand = $('brandFields');
    brand.classList.toggle('hidden', e.target.value !== 'brand');
  });

  // Plataforma
  $('plataforma').addEventListener('change', e => {
    const v = e.target.value;
    $('placementGroup').classList.toggle('hidden', v !== 'facebook');
    $('mediumGoogleGroup').classList.toggle('hidden', v !== 'google');
    const accountLinkOpt = document.getElementById('accountLinkOption');
    accountLinkOpt.style.display = v === 'google' ? 'block' : 'none';
    $('medium').value = v === 'google' ? 'paid-search' : 'paid-social';
  });

  // Medium Google
  $('mediumGoogle').addEventListener('change', e => {
    $('medium').value = e.target.value;
  });

  // Tipo Campaña
  $('tipoCampana').addEventListener('change', e =>
    $('campanaCustom').classList.toggle('hidden', e.target.value !== 'custom')
  );

  // Motivo
  $('motivo').addEventListener('change', e =>
    $('motivoCustom').classList.toggle('hidden', e.target.value !== 'custom')
  );

  // Código Pieza
  $('codigoPieza').addEventListener('change', e =>
    $('codigoCustom').classList.toggle('hidden', e.target.value !== 'custom')
  );

  // Validación solo para campos UTM (NO para URL)
  $('campanaCustom').addEventListener('input', cleanInput);
  $('motivoCustom').addEventListener('input', cleanInput);
  $('codigoCustom').addEventListener('input', cleanInput);

  // Submit
  $('utmForm').addEventListener('submit', generateUTM);
}

/* --- Sanitización de Texto --- */
function sanitize(s){
  return (s || '').trim();
}

/* --- Validación de Texto (Caracteres Prohibidos) --- */
function validateText(str){
  const invalidChars = /[\sáéíóúÁÉÍÓÚñÑàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ¿¡´`!@#$%^&*()+=\[\]{};:'",.<>?\/\\|~]/;
  return !invalidChars.test(str);
}

/* --- Limpieza Automática de Input --- */
function cleanInput(e){
  const input = e.target;
  const val = input.value;
  const cleaned = val
    .replace(/\s+/g, '_')
    .replace(/[áàäâ]/gi, 'a')
    .replace(/[éèëê]/gi, 'e')
    .replace(/[íìïî]/gi, 'i')
    .replace(/[óòöô]/gi, 'o')
    .replace(/[úùüû]/gi, 'u')
    .replace(/ñ/gi, 'n')
    .replace(/[¿¡´`]/g, '')
    .replace(/[!@#$%^&*()+=\[\]{};:'",.<>?\/\\|`~×]/g, '');

  if(val !== cleaned){
    input.value = cleaned;
    toast('⚠️ Caracteres no permitidos reemplazados automáticamente');
  }
}

/* --- Reset Formulario --- */
function resetForm(){
  document.getElementById('utmForm').reset();
  document.getElementById('resultContainer').classList.add('hidden');
  toast('🔄 Formulario limpiado');
}

/* --- Poblar Número de Pieza (01-30) --- */
function populateNumeroPieza(){
  const s = document.getElementById('numeroPieza');
  for(let i = 1; i <= 30; i++){
    const v = i < 10 ? '0' + i : i;
    const o = document.createElement('option');
    o.value = v;
    o.textContent = v;
    s.appendChild(o);
  }
}

/* --- Poblar Años (Año actual -1 hasta +2) --- */
function populateYears(){
  const s = document.getElementById('ano');
  const cy = new Date().getFullYear();
  for(let i = -1; i <= 2; i++){
    const y = cy + i;
    const o = document.createElement('option');
    o.value = y;
    o.textContent = y;
    if(i === 0) o.selected = true;
    s.appendChild(o);
  }
}

/* --- Seleccionar Mes Actual --- */
function setCurrentMonth(){
  const m = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SETIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
  document.getElementById('mes').value = m[new Date().getMonth()];
}
