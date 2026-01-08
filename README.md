# Linky — Generador UTM

Herramienta web para la generación automatizada de parámetros UTM para campañas digitales. Diseñado para equipos de marketing digital con soporte para múltiples marcas.

## Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Comandos](#comandos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Adaptar para Otra Marca](#adaptar-para-otra-marca)
- [Configuración](#configuración)
- [Tecnologías](#tecnologías)

## Características

- **Generación de UTMs**: URLs de rastreo con parámetros UTM personalizados
- **5 Temas Visuales**: Dark, Light, Ocean Blue, Forest Green, Pink
- **Historial**: Guarda y gestiona UTMs con localStorage
- **Exportación**: CSV y Excel con formato
- **Configurable**: URLs, campañas, motivos y códigos personalizables
- **Validación de URLs**: Verifica accesibilidad automáticamente
- **Responsive**: Adaptable a cualquier dispositivo
- **Sin Backend**: 100% cliente, sin servidor requerido
- **Vite**: Bundling optimizado para producción

## Instalación

### Requisitos
- Node.js 18+
- npm 9+

### Setup

```bash
# Clonar repositorio
git clone <repository-url>
cd Linky

# Instalar dependencias
npm install
```

## Comandos

```bash
# Desarrollo (hot reload en http://localhost:3000)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Estructura del Proyecto

```
Linky/
├── index.html              # HTML principal
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
│
├── src/                    # Código fuente (ES Modules)
│   ├── main.js             # Entry point
│   ├── constants.js        # Constantes y mapeos
│   ├── utils.js            # Utilidades (toast)
│   ├── config.js           # Sistema de configuración
│   ├── theme.js            # Gestión de temas
│   ├── form.js             # Lógica del formulario
│   ├── utm.js              # Generación de UTMs
│   ├── history.js          # Gestión del historial
│   ├── export.js           # Exportación CSV/Excel
│   ├── validation.js       # Validación de URLs
│   └── modals.js           # Modales
│
├── css/                    # Estilos modulares
│   ├── variables.css       # Variables CSS
│   ├── themes.css          # 5 temas de color
│   ├── layout.css          # Layout base
│   ├── navigation.css      # Navegación
│   ├── forms.css           # Formularios
│   ├── cards.css           # Cards
│   ├── history.css         # Historial
│   ├── modals.css          # Modal de ayuda
│   ├── config.css          # Modal de configuración
│   ├── utilities.css       # Utilidades
│   └── responsive.css      # Media queries
│
├── dist/                   # Build de producción (generado)
└── js/                     # (Legacy - puede eliminarse)
```

## Uso

### Generar UTM

1. Selecciona URL de destino
2. Elige división (Brand/Ecommerce)
3. Selecciona plataforma (Meta, Google, TikTok, etc.)
4. Define objetivo y campaña
5. Click en **GENERAR UTM**

### Configuración

Click en **Ajustes** para gestionar:
- URLs predeterminadas
- Tipos de campaña
- Motivos/creatividades
- Códigos de pieza (Brand)

---

## Adaptar para Otra Marca

Esta guía explica cómo adaptar Linky para una nueva marca/cliente.

### Paso 1: Información de la marca

Antes de empezar, necesitas:
- Nombre de la marca
- URLs de destino principales
- Tipos de campaña específicos
- Productos/motivos principales
- Colores de la marca (opcional para personalizar temas)
- Logo/favicon

### Paso 2: Configurar datos por defecto

Edita `src/config.js` → función `getDefaultConfig()`:

```javascript
export function getDefaultConfig() {
  return {
    // URLs predeterminadas de la marca
    urls: [
      {
        id: 'url_1',
        label: 'Web Principal',
        url: 'https://www.tu-marca.com/',
        isDefault: true,
        category: 'web'
      },
      {
        id: 'url_2',
        label: 'Tienda Online',
        url: 'https://tienda.tu-marca.com/',
        isDefault: false,
        category: 'ecommerce'
      }
      // Agrega más URLs...
    ],

    // Tipos de campaña
    campanias: [
      { id: 'camp_1', nombre: 'AON', descripcion: 'Always On', isCore: true, division: 'both' },
      { id: 'camp_2', nombre: 'Lanzamiento', descripcion: 'Lanzamiento de producto', isCore: true, division: 'both' },
      // Agrega más campañas...
    ],

    // Motivos/creatividades
    motivos: [
      { id: 'mot_1', nombre: 'promocion', categoria: 'promocion', division: 'both' },
      { id: 'mot_2', nombre: 'producto_nuevo', categoria: 'producto', division: 'both' },
      // Agrega más motivos...
    ],

    // Códigos para división Brand
    codigosBrand: [
      { id: 'cod_1', codigo: 'AON', descripcion: 'Always On', isCore: true },
      { id: 'cod_2', codigo: 'LANZO', descripcion: 'Lanzamiento', isCore: true },
      // Agrega más códigos...
    ]
  };
}
```

### Paso 3: Actualizar textos e identidad

#### 3.1 Título y metadata (`index.html`)

```html
<title>Linky — [NOMBRE MARCA] 2025</title>
<link rel="icon" type="image/png" href="favicon.png">
```

#### 3.2 Header visible (`index.html`)

Busca y modifica:
```html
<div class="header">
  <h1>Linky</h1>
  <p>[NOMBRE AGENCIA] — [NOMBRE MARCA]</p>
</div>
```

#### 3.3 Footer (`index.html`)

```html
<div class="footer">Powered by <span class="font-display">[AGENCIA]</span> | Generador UTM v2.1</div>
```

### Paso 4: Cambiar favicon

Reemplaza `favicon.png` con el logo de la marca (idealmente 32x32 o 64x64 px).

### Paso 5: Personalizar colores (opcional)

Para cambiar los colores del tema principal, edita `css/themes.css`:

```css
/* Tema Dark - Cambiar el verde neón por el color de la marca */
:root,
[data-theme="dark"] {
  --accent: #TU_COLOR;           /* Color principal */
  --accent-hover: #TU_COLOR_HOVER;
  --title-color: #TU_COLOR;
  /* ... */
}
```

### Paso 6: Actualizar package.json

```json
{
  "name": "linky-[marca]",
  "version": "1.0.0",
  "description": "Generador UTM para [Marca]"
}
```

### Paso 7: Build y deploy

```bash
# Verificar cambios en desarrollo
npm run dev

# Crear build de producción
npm run build

# El contenido de dist/ está listo para deploy
```

### Checklist de adaptación

- [ ] URLs de destino actualizadas en `src/config.js`
- [ ] Campañas específicas de la marca
- [ ] Motivos/productos de la marca
- [ ] Códigos Brand (si aplica)
- [ ] Título y header en `index.html`
- [ ] Footer actualizado
- [ ] Favicon reemplazado
- [ ] Colores personalizados (opcional)
- [ ] `package.json` actualizado
- [ ] Build probado (`npm run build`)

---

## Configuración Técnica

### localStorage Keys

| Key | Descripción |
|-----|-------------|
| `utmHistory` | Array de UTMs generadas |
| `utmGeneratorConfig` | Configuración personalizada |
| `theme` | Tema seleccionado |

### Estructura UTM

**Brand**:
```
utm_campaign=brand_[objetivo]_[campaña]_[mes]_[año]
utm_content=brand_[codigo]_[numero]_[placement]_[motivo]
```

**Ecommerce**:
```
utm_campaign=ecommerce_[objetivo]_[campaña]_[mes]_[año]
utm_content=ecom_[placement]_[motivo]
```

## Tecnologías

- **Vite** - Bundler y dev server
- **ES Modules** - JavaScript modular
- **CSS3** - Variables CSS y Grid/Flexbox
- **LocalStorage** - Persistencia de datos
- **SheetJS** - Exportación Excel (CDN)
- **Lucide Icons** - Iconografía

## Troubleshooting

### "No se genera la UTM"
- Verifica campos obligatorios (*)
- URL debe comenzar con http:// o https://

### "Error en build"
- Ejecuta `npm install` primero
- Verifica Node.js 18+

### "Excel no exporta"
- Requiere conexión a internet
- Usa CSV como alternativa

---

**Versión**: 2.1
**Bundler**: Vite 5.4
**Última actualización**: 2025
