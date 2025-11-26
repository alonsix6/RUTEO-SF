# 🚀 Generador UTM — RESET 2025 San Fernando

Herramienta web para la generación automatizada de parámetros UTM para campañas digitales de San Fernando. Diseñado para los equipos de Brand y Ecommerce.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Deploy en Netlify](#deploy-en-netlify)
- [Uso](#uso)
- [Configuración](#configuración)
- [Desarrollo](#desarrollo)
- [Tecnologías](#tecnologías)

## ✨ Características

### Funcionalidades Principales

- ✅ **Generación de UTMs Personalizada**: Crea URLs de rastreo con parámetros UTM siguiendo las convenciones de San Fernando
- 🎨 **5 Temas Visuales**: Dark, Light, Ocean Blue, Forest Green y Pink
- 📊 **Historial de UTMs**: Guarda y gestiona todas las UTMs generadas con localStorage
- 📥 **Exportación**: Descarga el historial en formato CSV o Excel
- ⚙️ **Sistema de Configuración**: Gestiona URLs, campañas, motivos y códigos personalizados
- ✅ **Validación de URLs**: Verifica automáticamente que las URLs de destino sean accesibles
- 🔄 **Sincronización Automática**: Los cambios en configuración se reflejan inmediatamente en los formularios
- 📱 **Responsive**: Diseño adaptable para desktop, tablet y móvil
- 💾 **Persistencia Local**: Todo se guarda en localStorage (sin necesidad de backend)

### División Brand vs Ecommerce

- **Brand**: Incluye códigos de pieza, números de pieza y estructura detallada
- **Ecommerce**: Enfoque simplificado en producto y conversión directa

### Plataformas Soportadas

- Meta (Facebook/Instagram)
- Google Ads (SEM, PMAX, Display, Video)
- TikTok
- LinkedIn
- X (Twitter)
- Programática

## 📁 Estructura del Proyecto

```
RUTEO-SF/
├── index.html                 # HTML principal
├── netlify.toml              # Configuración de Netlify
├── README.md                 # Documentación
│
├── css/                      # Estilos organizados por módulos
│   ├── variables.css         # Variables CSS y reset
│   ├── themes.css            # 5 temas de color
│   ├── layout.css            # Layout base y containers
│   ├── navigation.css        # Botones de navegación y menús
│   ├── forms.css             # Formularios y campos
│   ├── cards.css             # Cards y contenedores
│   ├── history.css           # Historial de UTMs
│   ├── modals.css            # Modales de ayuda
│   ├── config.css            # Modal de configuración
│   ├── utilities.css         # Utilidades (toast, hidden, etc.)
│   └── responsive.css        # Media queries
│
└── js/                       # JavaScript modular
    ├── constants.js          # Constantes y mapeos
    ├── utils.js              # Utilidades (toast)
    ├── config.js             # Sistema de configuración
    ├── theme.js              # Gestión de temas
    ├── form.js               # Lógica del formulario
    ├── utm.js                # Generación de UTMs
    ├── history.js            # Gestión del historial
    ├── export.js             # Exportación CSV/Excel
    ├── validation.js         # Validación de URLs
    ├── modals.js             # Modales
    └── main.js               # Inicialización
```

## 🔧 Instalación

### Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para importar SheetJS en exportación Excel)

### Instalación Local

1. **Clonar el repositorio**:
   ```bash
   git clone <repository-url>
   cd RUTEO-SF
   ```

2. **Abrir directamente**:
   ```bash
   # Simplemente abre index.html en tu navegador
   # O usa un servidor local:

   # Con Python 3
   python -m http.server 8000

   # O directamente abre el archivo
   open index.html
   ```

3. **Acceder**:
   ```
   http://localhost:8000
   ```

## 🌐 Deploy en Netlify

### Deploy Directo desde Git (Recomendado)

1. **Push a GitHub**:
   ```bash
   git add .
   git commit -m "Conversion to modular structure"
   git push origin main
   ```

2. **Conectar con Netlify**:
   - Ve a [Netlify](https://app.netlify.com)
   - Click en "Add new site" > "Import an existing project"
   - Selecciona tu repositorio de GitHub
   - Netlify detectará automáticamente la configuración de `netlify.toml`
   - Click en "Deploy site"

3. **¡Listo!**
   - Tu sitio estará disponible en una URL tipo: `https://random-name.netlify.app`
   - Puedes cambiar el nombre en Site settings > Domain management

## 📖 Uso

### 1. Generar una UTM

1. **Selecciona la URL de destino** (o ingresa una personalizada)
2. **Elige la división**: Brand o Ecommerce
3. **Selecciona la plataforma**: Meta, Google, TikTok, etc.
4. **Define el objetivo**: Tráfico, Conversiones, Alcance, etc.
5. **Completa los campos**:
   - Tipo de campaña
   - Mes y año
   - Motivo/Creatividad
   - (Si es Brand) Código y número de pieza
6. **Click en "🚀 GENERAR UTM"**
7. La UTM aparecerá en el resultado y en el historial

### 2. Configurar Opciones Personalizadas

1. Click en el botón **⚙️** (top-left)
2. Navega entre las pestañas:
   - **📍 URLs**: Gestiona URLs predeterminadas
   - **🎯 Campañas**: Agrega tipos de campaña
   - **🎨 Motivos**: Define motivos/creatividades
   - **🏷️ Códigos Brand**: Gestiona códigos de pieza
3. Click en **"➕ Agregar"** para crear nuevos items
4. Los cambios se sincronizan automáticamente con el formulario

### 3. Exportar Historial

- **CSV**: Click en "📥 CSV" para descargar en formato CSV
- **Excel**: Click en "📊 Excel" para descargar con formato (requiere conexión)

### 4. Cambiar Tema

1. Click en el botón **🎨** (top-right)
2. Selecciona entre:
   - 🌙 Oscuro
   - ☀️ Claro
   - 🌊 Ocean Blue
   - 🌿 Forest Green
   - 💖 Pink

## ⚙️ Configuración

### Configuración por División

#### Brand
Requiere campos adicionales:
- **Código de Pieza**: AON, NAB2B, HUE, ELABORDOS, etc.
- **Número de Pieza**: 01-30

**Ejemplo de UTM Brand**:
```
utm_source=facebook
utm_medium=paid-social
utm_campaign=brand_conv_AON_OCTUBRE_2025
utm_content=brand_AON_01_META_pollo
```

#### Ecommerce
Estructura simplificada:

**Ejemplo de UTM Ecommerce**:
```
utm_source=facebook
utm_medium=paid-social
utm_campaign=ecommerce_conv_Cyber_OCTUBRE_2025
utm_content=ecom_META_chorizo
```

### Almacenamiento Local

El generador usa localStorage para persistir:
- ✅ Historial de UTMs (`utmHistory`)
- ✅ Configuración personalizada (`utmGeneratorConfig`)
- ✅ Tema seleccionado (`theme`)

**Importante**: Los datos solo existen en tu navegador. Si limpias el caché, se perderán.

## 🛠️ Desarrollo

### Modificar Estilos

Los estilos están modularizados en `/css/`:

```css
/* Para cambiar colores del tema Dark */
/* Edita: css/variables.css */

:root {
  --accent: #6366f1;  /* Color principal */
  --success: #10b981; /* Color de éxito */
  /* ... */
}
```

### Agregar Nueva Funcionalidad

```javascript
// 1. Crea tu función en el módulo apropiado
// Ejemplo: js/utm.js

function miNuevaFuncion() {
  // Tu código aquí
}

// 2. Llámala desde main.js o donde la necesites
```

## 🔒 Validación y Seguridad

### Caracteres Permitidos en UTMs

**NO PERMITIDOS** (se limpian automáticamente):
- ❌ Espacios
- ❌ Tildes (á, é, í, ó, ú)
- ❌ Ñ
- ❌ Caracteres especiales (¿, ¡, ´, `, %, &, #, etc.)

**PERMITIDOS**:
- ✅ Letras (a-z, A-Z)
- ✅ Números (0-9)
- ✅ Guiones bajos (_)
- ✅ Guiones (-)

### Verificación de URLs

El sistema verifica automáticamente que las URLs sean accesibles:
- ✅ **OK**: URL accesible (verde)
- ⚠️ **Warning**: Redirect detectado (amarillo)
- ❌ **Error**: URL no accesible (rojo)

## 🌟 Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modulares con variables CSS
- **JavaScript (ES6+)**: Vanilla JS, sin frameworks
- **SheetJS (XLSX)**: Exportación a Excel
- **LocalStorage**: Persistencia de datos
- **Netlify**: Hosting y deploy

## 📝 Notas Importantes

1. **Sin Backend**: Todo funciona en el navegador (client-side)
2. **Sin Dependencias**: No requiere npm/node para funcionar
3. **Privacidad**: Los datos nunca salen del navegador del usuario
4. **Offline**: Funciona sin conexión (excepto exportación Excel)

## 🐛 Troubleshooting

### "No se genera la UTM"
- Verifica que todos los campos obligatorios (*) estén completos
- Asegúrate de que la URL comience con http:// o https://

### "No se exporta a Excel"
- Requiere conexión a internet (importa SheetJS desde CDN)
- Si falla, usa la exportación a CSV

### "Se perdió mi historial"
- Los datos están en localStorage del navegador
- Si limpiaste el caché, se habrán borrado
- **Solución**: Exporta regularmente tu historial

### "Los caracteres especiales desaparecen"
- Es correcto: las UTMs no permiten tildes, ñ ni espacios
- Se reemplazan automáticamente por caracteres válidos

## 📄 Licencia

Proyecto privado para uso interno de San Fernando.

## 👥 Créditos

Desarrollado por el equipo RESET 2025 de San Fernando.

---

**Versión**: 2.1
**Última actualización**: 2025
