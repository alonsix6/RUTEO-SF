🎨 Documento de Identidad Visual: Reset - Agencia de Medios
Versión para Claude Code & IA Generativa
Fecha: 3 de Noviembre, 2025
Propósito: Guía definitiva para replicar el branding visual de Reset en cualquier proyecto generado por IA

📋 Resumen Ejecutivo
Reset es una agencia de medios ubicada en Barranco, Lima, Perú, con una identidad visual moderna, minimalista y de alto contraste. Su estética combina fondos negros intensos con tipografía bold en blanco y acentos de color vibrantes (principalmente verde neón y tonos morados/violetas). El diseño prioriza jerarquía visual clara, espacios generosos y geometría limpia.

⚠️ PRINCIPIO FUNDAMENTAL: LEGIBILIDAD SOBRE ESTÉTICA
La legibilidad y usabilidad siempre tienen prioridad sobre efectos visuales llamativos:
- **Colores sólidos** sobre gradientes (los gradientes verde-cian cansan la vista)
- **Contraste suficiente** para lectura cómoda (WCAG AA mínimo 4.5:1)
- **Tipografía clara** sin efectos que dificulten la lectura
- **Feedback visual** sutil en interacciones (no destellos ni animaciones excesivas)
- **El contenido es el protagonista**, no los efectos visuales

🎨 Sistema de Color
Color Primario: Negro Profundo

Hex: #000000 (negro puro)
Uso: Fondos principales en el 80% de las composiciones
Contexto: El negro no es un simple fondo - es un lienzo premium que genera contraste dramático
Psicología: Sofisticación, seriedad profesional, modernidad

Color Secundario: Blanco Puro

Hex: #FFFFFF (blanco puro, sin grises)
Uso: Tipografía principal, títulos, elementos de contraste
Regla crítica: NUNCA usar gris claro (#F5F5F5) - siempre blanco puro para máximo contraste

Color Acento 1: Verde Neón

Hex principal: #00FF85 (verde neón) - USAR COMO COLOR SÓLIDO
⚠️ IMPORTANTE: Evitar gradientes verde-cian, dificultan la legibilidad
Uso:

Highlights en texto (palabras clave como "RESEARCH")
Bordes de elementos gráficos
Contornos de formas geométricas
Botones primarios (fondo sólido, no gradiente)


Intensidad: Debe "brillar" sobre el fondo negro - saturación al 100%
Contexto: Representa innovación, digital, tecnología
Hover/Active: Usar versión más oscura (#00CC6A) para feedback visual

Color Acento 2: Sistema Violeta/Morado

Rango de tonos:

Violeta intenso: #6F42C1
Morado medio: #9B59B6
Fucsia: #E91E63


Uso:

Tablas y visualizaciones de datos
Sistemas de etiquetado
Gradientes sutiles en elementos secundarios


Regla: Usar como acento, nunca como color dominante

Paleta de Datos (Visualizaciones)
Para gráficos, tablas y dashboards:
Azul primario:   #0052CC (azul corporativo sólido)
Azul secundario: #00A3FF (cian brillante)
Rosa:            #FF0080 (magenta vibrante)
Verde:           #00FF85 (neón)
Morado:          #9B59B6 (violeta medio)
Regla crítica: En visualizaciones, usar colores brillantes con saturación alta (>80%) para legibilidad sobre negro.

🔤 Tipografía
Familia Principal: Sans-Serif Bold/Heavy
Características identificadas:

Peso ultra-pesado: 800-900 (Extra Bold / Black)
Condensada en títulos grandes
Sin serifas (grotesca moderna)
Tracking (espaciado) apretado en títulos
Mayúsculas predominantes en encabezados

Fuentes recomendadas (similares al estilo Reset):

Bebas Neue (gratuita) - Condensada, bold, mayúsculas ✅ PREFERIDA
Anton (Google Fonts) - Ultra bold, compacta
Archivo Black (Google Fonts) - Pesada, moderna
Oswald (Google Fonts) - Condensada, profesional
Montserrat Black - Alternativa más legible para textos largos

Jerarquía Tipográfica
Nivel 1: Títulos Principales (H1)
cssfont-family: 'Bebas Neue', 'Anton', 'Archivo Black', sans-serif;
font-weight: 900;
font-size: 72-120px (desktop) / 48-64px (mobile);
line-height: 0.9-1.0 (muy compacto);
letter-spacing: -2px a -4px (kerning negativo);
text-transform: uppercase;
color: #FFFFFF;
```

**Ejemplo visual:**
```
CATÁLOGO DE
ENTREGABLES

Cada palabra en línea separada
Alineación izquierda o centrada
Espaciado vertical mínimo entre líneas

Nivel 2: Subtítulos (H2)
cssfont-family: 'Bebas Neue', sans-serif;
font-weight: 700-800;
font-size: 36-48px (desktop) / 28-36px (mobile);
line-height: 1.1;
letter-spacing: -1px;
text-transform: uppercase;
color: #FFFFFF o acento verde/cian (#00FF85);
Nivel 3: Texto de Apoyo (H3)
cssfont-family: 'Montserrat', 'Inter', sans-serif;
font-weight: 600-700 (Semi-bold);
font-size: 18-24px;
line-height: 1.4;
letter-spacing: normal (0);
text-transform: capitalize o normal;
color: #FFFFFF;
Nivel 4: Cuerpo / Párrafos (Body)
cssfont-family: 'Montserrat', 'Inter', 'Roboto', sans-serif;
font-weight: 400-500 (Regular o Medium);
font-size: 14-16px;
line-height: 1.5-1.6;
letter-spacing: 0.5px;
color: #FFFFFF o #E5E5E5 (gris muy claro);
```

### Uso de Color en Tipografía

**Patrón identificado en "FT. RESEARCH":**
```
FT. [blanco] RESEARCH [verde neón]
```

**Regla:** Destacar palabras clave con verde neón dentro de títulos blancos
- 70-80% del texto en blanco
- 20-30% en verde neón para énfasis
- NUNCA usar más de 2 colores en un mismo título

---

## 📐 Sistema de Layout y Composición

### Grid System: Asimétrico con Jerarquía Clara

**Estructura base:**
```
┌─────────────────────────────────────┐
│ Logo (esquina superior izquierda)   │
│                                     │
│  ┌──────────────┐  ┌─────────┐    │
│  │  TÍTULO      │  │ Imagen  │    │
│  │  PRINCIPAL   │  │         │    │
│  │  GRANDE      │  └─────────┘    │
│  └──────────────┘                  │
│                                     │
│  Subtítulo pequeño                 │
└─────────────────────────────────────┘
```

### Proporciones Clave

**Ratio de Tamaño Título/Subtítulo:** 4:1 a 6:1
- Si título es 80px → subtítulo 12-16px
- Contraste dramático de escala

**Espaciado (Whitespace):**
- Padding generoso: mínimo 60-80px en desktop
- Márgenes laterales: 40-60px
- Separación vertical entre secciones: 80-120px
- **Regla:** El espacio vacío es tan importante como el contenido

**Alineación:**
- Predominantemente **izquierda** en títulos y textos
- **Centrado** solo en composiciones simétricas o landing pages
- NUNCA justificado

### Composición de Tarjetas/Cards

**Anatomía de una tarjeta de contenido:**
```
┌──────────────────────────────┐
│ TÍTULO EN MAYÚSCULAS         │ ← Bebas Neue, blanco, 24-32px
├──────────────────────────────┤
│ Subtítulo descriptivo        │ ← Montserrat, gris claro, 14-16px
│                              │
│ Valor numérico grande        │ ← Montserrat Bold, 48-64px
│ Unidad pequeña               │ ← 12px, color acento
└──────────────────────────────┘
```

**Colores de fondo de tarjetas:**
- Tarjetas sobre fondo negro: `#1A1A1A` a `#2A2A2A` (gris muy oscuro)
- Bordes: 1-2px en color acento (verde, morado, cian) o transparent
- Border-radius: 8-12px (esquinas levemente redondeadas)
- Sombras: Casi nunca - priorizar bordes

---

## 🖼️ Elementos Gráficos y Formas

### Geometría: Formas Básicas con Propósito

**Elementos recurrentes:**

1. **Flechas de Navegación/Play**
```
   ▶ (triángulo derecho)
```
   - Color: Verde neón o blanco
   - Tamaño: Proporcional al texto adyacente
   - Uso: Indicadores de sección, breadcrumbs, bullets decorativos

2. **Rectángulos y Cuadrados**
   - Siempre con esquinas levemente redondeadas (border-radius: 8-16px)
   - Nunca esquinas perfectamente cuadradas (0px)
   - Usados para contener contenido, no como decoración

3. **Líneas de Separación**
   - Grosor: 1-3px
   - Color: Verde neón (#00FF85) o gris oscuro (#333333)
   - Nunca líneas grises claras - alto contraste

4. **Degradados (Gradientes)**
   - **EVITAR en la mayoría de casos** - dificultan la legibilidad
   - Si es necesario: Muy sutiles, solo en fondos (Negro → gris muy oscuro #000000 → #1A1A1A)
   - ❌ NO usar gradiente verde-cian en textos ni botones (cansa la vista)
   - Preferir siempre colores sólidos para elementos interactivos

### Iconografía

**Estilo:** Minimalista, line-art, stroke weight 2-3px

**Ejemplos identificados:**
- Ubicación/Pin: `📍` (ícono de mapa)
- Pantalla/Display: `🖥️` (monitor)
- Siempre en blanco o color acento
- Sin relleno sólido - solo contornos

**Regla:** Los íconos son **funcionales**, no decorativos. Solo usar cuando mejoran comprensión.

---

## 📊 Visualización de Datos

### Tablas

**Estructura:**
```
┌────────────┬────────────┬────────────┐
│ HEADER 1   │ HEADER 2   │ HEADER 3   │ ← Fondo morado/violeta
├────────────┼────────────┼────────────┤
│ Valor 1    │ Valor 2    │ Valor 3    │ ← Fondo gris oscuro
│ Valor 4    │ Valor 5    │ Valor 6    │ ← Alterna fondo negro
└────────────┴────────────┴────────────┘
Especificaciones:

Headers: Fondo violeta (#6F42C1), texto blanco, bold
Filas alternas: Negro (#000000) / Gris oscuro (#1A1A1A)
Bordes: 1px #333333 (gris muy oscuro)
Padding interno: 12-16px vertical, 16-20px horizontal
Tipografía: Montserrat 14-16px, Medium weight

Gráficos y Métricas
KPIs (Números grandes):
cssfont-size: 48-72px;
font-weight: 700-800;
color: Azul (#0052CC) o Verde (#00FF85);
font-family: 'Montserrat', sans-serif;
Etiquetas de métricas:
cssfont-size: 12-14px;
font-weight: 500-600;
text-transform: uppercase;
letter-spacing: 1px;
color: #AAAAAA (gris medio);
```

**Colores de estado:**
- Positivo/Incremento: Verde `#00FF85`
- Negativo/Decremento: Rojo `#FF4444` o Rosa `#FF0080`
- Neutral: Azul `#0052CC`

**Formato de porcentajes:**
```
+135% ✅ (verde si positivo)
-31%  ⚠️ (rojo si negativo)
```

---

## 🖼️ Tratamiento de Imágenes

### Fotografías

**Características:**
- Alto contraste, preferiblemente con fondo oscuro natural
- Sujetos con buena iluminación frontal
- Nunca fotografías con fondos blancos brillantes (rompe armonía visual)
- Filtro sutil: Ligeramente desaturado (-10% saturation) para cohesión

**Integración:**
- Esquinas redondeadas: border-radius 12-24px
- Bordes opcionales: 2-3px en color acento (verde/cian)
- Sombras: Muy sutiles si las hay: `0 8px 24px rgba(0, 255, 133, 0.15)`

### Recortes y Máscaras

**Patrón en web:**
```
┌─────────────────┐
│     ┌────────┐  │
│     │ Foto   │  │
│     │        │  │
│     └────────┘  │
│  ╱              │ ← Diagonal decorativa en verde neón
│ ╱               │
└─────────────────┘
```

- Formas geométricas en verde neón (#00FF85) que "enmarcan" fotos
- Nunca cubren rostros - siempre decorativas en esquinas

---

## 🎯 Branding Elements: Logo y Firma

### Logo Reset

**Composición:**
```
┌───┐
│ R │  Reset
└───┘
```

- Letra "R" en cuadrado con flecha inferior derecha integrada
- Sans-serif bold
- Siempre en blanco sobre fondos oscuros
- Versión monocromática preferida (sin color)

**Variaciones:**
- Logo solo (símbolo R)
- Logo + texto "Reset"
- Tamaño mínimo: 32px de altura

**Ubicación:**
- Esquina superior izquierda (consistente)
- Padding: 24-40px desde bordes

**Uso en firmas/footers:**
```
GRACIAS [espacio] R Reset

📱 Responsive Design: Reglas de Adaptación
Mobile (<768px)
Ajustes de tipografía:

Títulos H1: Reducir a 48-64px (desde 72-120px)
Subtítulos H2: Reducir a 28-36px (desde 36-48px)
Mantener weight bold (no reducir)
Aumentar line-height ligeramente (1.0 → 1.1)

Layout:

Stack vertical (columna única)
Padding lateral: 20-24px (desde 40-60px)
Espaciado vertical: 40-60px (desde 80-120px)
Imágenes: width 100%, height auto

Interacción:

Botones: mínimo 44px de altura (táctil)
Espaciado entre elementos interactivos: 16px mínimo

Tablet (768px - 1024px)

Híbrido: Algunas secciones en 2 columnas
Tipografía: 85% del tamaño desktop
Mantener jerarquía visual


🎨 Paleta de Componentes UI
Botones
Estilo Primario:
cssbackground: #00FF85; /* Verde neón sólido - EVITAR gradientes por legibilidad */
color: #000000; /* Texto negro sobre verde brillante */
font-weight: 700;
padding: 14px 32px;
border-radius: 8px;
border: none;
text-transform: uppercase;
letter-spacing: 1px;
font-size: 14-16px;
Hover:
cssbackground: #00CC6A; /* Versión más oscura para contraste */
color: #000000;
transition: all 0.3s ease;
Estilo Secundario (Ghost):
cssbackground: transparent;
color: #00FF85;
border: 2px solid #00FF85;
/* Resto igual que primario */
Hover:
cssbackground: #00FF85;
color: #000000;
Inputs / Formularios
cssbackground: #1A1A1A;
border: 1px solid #333333;
border-radius: 8px;
padding: 12px 16px;
color: #FFFFFF;
font-family: 'Montserrat', sans-serif;
font-size: 14-16px;
Focus:
cssborder-color: #00FF85;
outline: none;
box-shadow: 0 0 0 3px rgba(0, 255, 133, 0.1);
Separadores
cssheight: 1px;
background: linear-gradient(90deg, 
    transparent 0%, 
    #00FF85 50%, 
    transparent 100%
);
margin: 60px 0;

🎬 Animaciones y Transiciones
Principios
Timing:

Rápidas: 0.2-0.3s para hovers, clicks
Medias: 0.4-0.5s para transiciones de página
Lentas: 0.6-0.8s para animaciones de entrada

Easing:
csstransition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1); /* Material Design */
Animaciones Específicas
Hover en tarjetas:
csstransform: translateY(-4px);
box-shadow: 0 12px 40px rgba(0, 255, 133, 0.2);
border-color: #00FF85;
Aparición de elementos (Fade in + Slide up):
css@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
animation: fadeInUp 0.6s ease-out forwards;
Pulsación en acentos (Opcional - usar con moderación):
css@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
animation: pulse 2s ease-in-out infinite;
```

---

## 📏 Espaciado y Ritmo Vertical

### Sistema de Espaciado (8pt Grid)

**Base unit:** 8px
```
Spacing scale:
xs:  8px   (0.5rem)
sm:  16px  (1rem)
md:  24px  (1.5rem)
lg:  32px  (2rem)
xl:  48px  (3rem)
2xl: 64px  (4rem)
3xl: 96px  (6rem)
4xl: 128px (8rem)
Uso:

Entre párrafos: sm-md (16-24px)
Entre secciones: 2xl-3xl (64-96px)
Padding de containers: lg-xl (32-48px desktop), md (24px mobile)
Margin de títulos: xl-2xl (48-64px) arriba, md-lg (24-32px) abajo


🎭 Voz y Tono Visual
Adjetivos que Definen el Estilo Reset

Boldness: Títulos impactantes, tamaños exagerados
Modernidad: Tipografía sans-serif, colores neón
Claridad: Jerarquía visual obvia, sin ambigüedades
Minimalismo: Pocos elementos, mucho espacio negativo
Profesionalismo: Colores corporativos, datos presentados limpiamente
Contraste: Negro vs blanco, grande vs pequeño, nunca términos medios

Lo Que NO Es Reset
❌ Gradientes llamativos verde-cian (daña la vista, dificulta legibilidad)
❌ Degradados multicolores o fosforescentes
❌ Tipografía serif o script
❌ Fondos blancos o grises claros
❌ Sombras dramáticas (dropshadows exageradas)
❌ Texturas o patterns
❌ Ilustraciones coloridas o cartoonescas
❌ Múltiples fuentes tipográficas en una composición
❌ Elementos decorativos sin función
❌ Colores de saturación extrema que dificulten la lectura

🛠️ Implementación en Código: Plantilla CSS Base
css/* ============================================
   RESET AGENCIA - BASE STYLES
   Generado para proyectos con IA
   ============================================ */

/* Variables de diseño */
:root {
  /* Colores */
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-neon-green: #00FF85;
  --color-cyan: #00E5FF;
  --color-violet: #6F42C1;
  --color-purple: #9B59B6;
  --color-magenta: #FF0080;
  --color-blue: #0052CC;
  --color-gray-dark: #1A1A1A;
  --color-gray-medium: #333333;
  --color-gray-light: #AAAAAA;

  /* Tipografía */
  --font-display: 'Bebas Neue', 'Anton', 'Archivo Black', sans-serif;
  --font-body: 'Montserrat', 'Inter', 'Roboto', sans-serif;

  /* Espaciado */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 96px;

  /* Border radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  /* Transiciones */
  --transition-fast: 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
  --transition-base: 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  --transition-slow: 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
}

/* Reset y base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--color-black);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Tipografía */
h1, .h1 {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(48px, 8vw, 120px);
  line-height: 0.95;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: var(--space-lg);
}

h2, .h2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(36px, 5vw, 72px);
  line-height: 1.1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

h3, .h3 {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: clamp(24px, 3vw, 36px);
  line-height: 1.3;
  color: var(--color-white);
  margin-bottom: var(--space-sm);
}

p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

/* Acentos de color en títulos */
.accent-neon {
  color: var(--color-neon-green);
}

.accent-cyan {
  color: var(--color-cyan);
}

/* Contenedores */
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-md);
  }
}

.section {
  padding: var(--space-3xl) 0;
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-2xl) 0;
  }
}

/* Botones */
.btn {
  display: inline-block;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 14px 32px;
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: all var(--transition-base);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--color-neon-green); /* Sólido - evitar gradientes */
  color: var(--color-black);
}

.btn-primary:hover {
  background: #00CC6A; /* Verde más oscuro para feedback visual */
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 255, 133, 0.3);
}

.btn-ghost {
  background: transparent;
  color: var(--color-neon-green);
  border: 2px solid var(--color-neon-green);
}

.btn-ghost:hover {
  background: var(--color-neon-green);
  color: var(--color-black);
}

/* Tarjetas */
.card {
  background: var(--color-gray-dark);
  border: 1px solid var(--color-gray-medium);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  transition: all var(--transition-base);
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--color-neon-green);
  box-shadow: 0 12px 40px rgba(0, 255, 133, 0.15);
}

/* Separador decorativo */
.divider {
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    var(--color-neon-green) 50%, 
    transparent 100%
  );
  margin: var(--space-2xl) 0;
}

/* Logo */
.logo {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 24px;
  color: var(--color-white);
  text-decoration: none;
}

/* Utilidades */
.text-center {
  text-align: center;
}

/* NOTA: Evitar text-gradient ya que dificulta la legibilidad */
/* En su lugar usar color sólido: */
.text-neon {
  color: var(--color-neon-green);
}

/* Animaciones */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

🎯 Checklist de Validación Visual
Antes de aprobar cualquier diseño generado por IA, verificar:
Color ✅

 Fondo negro puro (#000000) en áreas principales
 Texto blanco puro (#FFFFFF), no gris claro
 Verde neón (#00FF85) usado con moderación (10-20% del diseño)
 Sin fondos blancos o grises claros
 Paleta limitada a 3-4 colores máximo por composición

Tipografía ✅

 Títulos en sans-serif ultra-bold (900 weight)
 Títulos en mayúsculas
 Contraste de tamaño 4:1 mínimo entre H1 y H3
 Spacing negativo (kerning) en títulos grandes
 Máximo 2 familias tipográficas en total

Layout ✅

 Espaciado generoso (mínimo 60px entre secciones)
 Jerarquía visual clara e inmediata
 Alineación consistente (preferiblemente izquierda)
 Grid asimétrico, no rígido
 Logo en esquina superior izquierda

Elementos Gráficos ✅

 Bordes redondeados (8-16px) en tarjetas e imágenes
 Sin sombras dramáticas (solo sutiles si es necesario)
 Formas geométricas simples (triángulos, rectángulos)
 Íconos minimalistas, line-art, sin relleno

Responsive ✅

 Títulos reducen tamaño 50% en mobile
 Layout cambia a columna única <768px
 Botones táctiles (mínimo 44px altura)
 Padding lateral adecuado (20-24px mobile)

Branding ✅

 Estilo "moderno, minimalista, alto contraste"
ReintentarATContinuar🎨 Documento de Identidad Visual: Reset - Parte 2

🖥️ Componentes Específicos de Presentaciones
Slide de Portada (Cover Slide)
Estructura identificada:
┌─────────────────────────────────────────┐
│ [Logo Reset - izquierda superior]       │
│                                          │
│                                          │
│   TÍTULO PRINCIPAL                       │
│   MUY GRANDE                             │
│   EN 2-3 LÍNEAS                          │
│                                          │
│   Subtítulo descriptivo pequeño          │
│                                          │
│                                          │
│                     [Imagen decorativa]  │
│                                          │
│              Fecha - ubicación           │
└─────────────────────────────────────────┘
Especificaciones:

Título: Ocupa 40-50% de la altura del slide
Subtítulo: 10-12% del tamaño del título
Fecha/Ubicación: Esquina inferior, 10-12px
Imagen: Si existe, en esquina inferior derecha, con forma geométrica (triángulos verdes neón como marco)
Fondo: Negro puro (#000000)

Ejemplo textual:
CATÁLOGO DE
ENTREGABLES

FT. RESEARCH [verde neón en "RESEARCH"]

Slide de Contenido: Tablas de Datos
Patrón de tabla Reset:
┌───────────────────────────────────────────────┐
│ TÍTULO DE SECCIÓN [H2, blanco, uppercase]    │
│                                               │
│ ┌─────────┬──────────┬──────────┬──────────┐│
│ │COLUMNA 1│COLUMNA 2 │COLUMNA 3 │COLUMNA 4 ││ ← Header violeta
│ ├─────────┼──────────┼──────────┼──────────┤│
│ │ Valor 1 │ S/95,000 │ S/5,704  │ S/2,3   ││ ← Fila gris oscuro
│ ├─────────┼──────────┼──────────┼──────────┤│
│ │ Valor 2 │ S/45,000 │ S/1,600  │ S/5,6   ││ ← Fila negro
│ └─────────┴──────────┴──────────┴──────────┘│
│                                               │
│ Texto explicativo debajo de la tabla en       │
│ Montserrat Regular, 14-16px, color gris claro│
└───────────────────────────────────────────────┘
Detalles críticos:

Headers:

Background: Violeta (#6F42C1 o similar)
Texto: Blanco, bold, mayúsculas
Padding: 12px vertical, 16px horizontal


Celdas de datos:

Alterna colores: Negro (#000000) / Gris oscuro (#1A1A1A)
Texto: Blanco, Montserrat Medium 14-16px
Alineación: Números a la derecha, texto a la izquierda


Formato de moneda:

Símbolo de soles: S/ (no "PEN" o "soles")
Separador de miles: . (punto) → Ejemplo: S/95.000
Decimales solo si es necesario


Bordes:

1px solid #333333 (gris muy oscuro)
Sin bordes externos gruesos




Slide de Resumen/KPIs
Layout de métricas clave:
┌─────────────────────────────────────────┐
│ RESUMEN ESCENARIO1 [H2, uppercase]      │
│                                          │
│ ┌──────────┐  ┌──────────┐  ┌─────────┐│
│ │ELEMENTO  │  │UBICACIÓN │  │ALQUILER ││ ← Labels
│ │          │  │          │  │         ││
│ │Panel U108│  │Panameri- │  │S/95,000 ││ ← Valores
│ │          │  │cana Sur  │  │4 MESES  ││
│ └──────────┘  └──────────┘  └─────────┘│
│                                          │
│ ┌──────────────────────────────────────┐│
│ │ TOTAL INVERSIÓN     S/202.488        ││ ← Resumen
│ └──────────────────────────────────────┘│
│                                          │
│ Párrafo descriptivo explicando el       │
│ contexto y la estrategia...             │
└─────────────────────────────────────────┘
Estructura de tarjetas de métricas:
css.metric-card {
  background: #1A1A1A; /* Gris muy oscuro */
  border: 1px solid #333333;
  border-radius: 12px;
  padding: 24px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.metric-label {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #AAAAAA; /* Gris medio */
  margin-bottom: 12px;
}

.metric-value {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32-48px;
  color: #FFFFFF;
  line-height: 1.1;
}

.metric-unit {
  font-size: 14px;
  color: #AAAAAA;
  margin-top: 4px;
}
```

---

### Slide de Ficha Técnica

**Patrón "Global Panel":**
```
┌─────────────────────────────────────────┐
│ GLOBAL                                   │
│ PANEL TI84-PANSUR [H1, Bebas Neue]      │
│                                          │
│ 📍 Ubicación: Panamericana Sur Km. 48.8 │
│    San Bartolo, Lima.                    │
│                                          │
│ 🖥️  Medidas: 11.00 x 18.00 mts          │
│                                          │
│    Alquiler: S/120.00                    │
│                                          │
│    Producción: S/9,900                   │
└─────────────────────────────────────────┘
```

**Detalles:**
- **Jerarquía:** 
  1. Label "GLOBAL" - 16px, Montserrat Semibold, gris claro
  2. Nombre panel - 64-80px, Bebas Neue, blanco
  3. Datos técnicos - 16-18px, Montserrat Regular, blanco
  
- **Íconos:**
  - Usar emojis o íconos SVG simples
  - Color: Verde neón (#00FF85) o blanco
  - Tamaño: 20-24px
  
- **Formato de datos:**
  - **Ubicación:** Dirección completa, multilinea si es necesario
  - **Medidas:** En metros, formato `X.XX x X.XX mts`
  - **Montos:** `S/X,XXX` o `S/X,XXX.XX`

---

### Slide de Cierre ("Gracias")
```
┌─────────────────────────────────────────┐
│                                          │
│                                          │
│         GRACIAS                          │
│                                          │
│                    R Reset [logo]        │
│                                          │
│                                          │
└─────────────────────────────────────────┘
```

**Especificaciones:**
- **"GRACIAS":** 
  - Font: Bebas Neue o similar
  - Size: 120-180px
  - Color: Blanco
  - Centrado vertical y horizontal
  
- **Logo Reset:**
  - Posición: Ligeramente a la derecha del "GRACIAS"
  - Tamaño: 60-80px
  - Alineado verticalmente con el centro del texto

---

## 📊 Visualización de Datos: Gráficos y Charts

### Gráficos de Medidores (Gauge Charts)

**Estilo identificado en "Resultados Totales":**
```
┌────────────────┐
│  Alcance       │ ← Label
│                │
│  1,063,181     │ ← Valor grande
│  Usuarios      │ ← Unidad
└────────────────┘
Especificaciones:
css.metric-gauge {
  background: linear-gradient(135deg, #E8F5FF 0%, #D0E8FF 100%); /* Azul pastel */
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
}

.gauge-label {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #1A1A1A; /* Gris muy oscuro */
  margin-bottom: 16px;
}

.gauge-value {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 48px;
  color: #0052CC; /* Azul corporativo */
  line-height: 1;
}

.gauge-unit {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #666666;
  margin-top: 8px;
}
```

**Paleta de colores para métricas (fondos):**
- Azul claro: `#E8F5FF` → Para "Alcance", "Frecuencia"
- Rosa claro: `#FFE8F0` → Para "Impresiones"
- Amarillo claro: `#FFF9E8` → Para "Reproducciones"
- Verde claro: `#E8FFE8` → Para "Interacciones", "Ventas"
- Gris claro: `#F0F0F0` → Para "Inversión"

**Regla:** Fondos pasteles con texto oscuro (invertir la paleta cuando es sobre fondo negro de presentación).

---

### Tablas de Comparación (Antes/Después)

**Patrón "Comparativo Anual":**
```
┌─────────────────────────────────────────────┐
│ COMPARATIVO ANUAL - AGOSTO                   │
│                                              │
│           ┌──────────┬──────────┬─────────┐ │
│ Agosto'25 │Inversión │Transac.  │Ingresos │ │
│           │ $4.69K   │ 485      │S/78.4K  │ │
│           ├──────────┼──────────┼─────────┤ │
│           │CTR 1.74% │CPA $9.68 │ROI 3,39 │ │
│           └──────────┴──────────┴─────────┘ │
│                                              │
│           ┌──────────┬──────────┬─────────┐ │
│ Agosto'24 │Inversión │Transac.  │Ingresos │ │
│           │ $4.1K    │ 232      │S/35.9K  │ │
│           ├──────────┼──────────┼─────────┤ │
│           │CTR 2.54% │CPA$16.60 │ROI 1,47 │ │
│           └──────────┴──────────┴─────────┘ │
│                                              │
│              -31%  ▼    -50%  ▼   +131% ▲   │
│             [rojo]     [rojo]     [verde]   │
└─────────────────────────────────────────────┘
```

**Detalles:**
- **Año actual:** Fondo azul (#0052CC), texto blanco
- **Año anterior:** Fondo morado/burdeos (#8B1C3E), texto blanco
- **Diferencias porcentuales:**
  - Verde (#00FF85) para incrementos positivos con ▲
  - Rojo (#FF4444) para decrementos con ▼
  - Font size: 14-16px, bold
  - Alineación: Centrada debajo de cada columna

---

### Gráficos Circulares (Gauge/Donut)

**Patrón identificado en "Resumen General - Agosto":**
```
        ┌─────────────┐
        │  Inversión  │
        │             │
        │   $4.69 mil │ ← Valor central
        │             │
   $0 ──┴─────────────┴── $5 mil
        └─────────────┘
         [Gauge visual]
Implementación:
html<!-- Usando Chart.js o similar -->
<canvas id="inversionGauge"></canvas>

<script>
new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [4.69, 0.31], // Valor actual vs restante
      backgroundColor: ['#0052CC', '#1A1A1A'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '75%', // Grosor del gauge
    rotation: -90, // Empezar desde arriba
    circumference: 180, // Medio círculo
    plugins: {
      legend: { display: false }
    }
  }
});
</script>
```

**Colores por métrica:**
- **Inversión:** Azul (#0052CC)
- **Transacciones:** Morado (#6F42C1)
- **Ingresos:** Verde (#00FF85)

---

## 🎨 Tratamiento de Imágenes en Web

### Hero Section (Página de inicio)

**Patrón identificado:**
```
┌─────────────────────────────────────────┐
│ RESETEAMOS LA                            │
│ PLANIFICACIÓN                            │
│ DE MEDIOS                                │
│                                          │
│ Dando énfasis a la estrategia, los      │
│ resultados y el servicio                 │
│                                          │
│            ┌──────────────┐              │
│            │              │              │
│            │   [Foto de   │              │
│            │   persona]   │              │
│            │              │              │
│            └──────────────┘              │
│           /                              │
│          / [Triángulo verde neón]       │
│         /                                │
└─────────────────────────────────────────┘
Especificaciones:

Foto:

Border-radius: 16-24px
Posición: Derecha, ocupando ~40% del ancho
Aspecto: Retrato vertical (3:4 ratio)
Filtro: filter: grayscale(20%) contrast(110%); (opcional)


Forma geométrica:

Triángulo o diagonal en verde neón (#00FF85)
border: 3px solid #00FF85;
Posición: Esquina inferior izquierda de la foto
Tamaño: ~25% de la altura de la foto



CSS para formas decorativas:
css.decorative-shape {
  position: absolute;
  bottom: -20px;
  left: -20px;
  width: 150px;
  height: 150px;
  clip-path: polygon(0 100%, 0 0, 100% 100%); /* Triángulo */
  background: transparent;
  border: 3px solid var(--color-neon-green);
  z-index: -1;
}

Composición de Imágenes con Overlays
Patrón para destacar áreas:
html<div class="image-wrapper">
  <img src="comida.jpg" alt="Anticuchos peruanos">
  <div class="image-overlay">
    <h3>PROPUESTAS OOH</h3>
    <p>VERANO 2026</p>
  </div>
</div>
css.image-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(0.7); /* Oscurecer para legibilidad */
}

.image-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #FFFFFF;
  width: 80%;
}

.image-overlay h3 {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 48px;
  text-transform: uppercase;
  margin-bottom: 12px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); /* Sombra para legibilidad */
}

.image-overlay p {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 2px;
}
```

---

## 🏗️ Arquitectura de Páginas Web

### Estructura de Navegación

**Header/Navbar:**
```
┌─────────────────────────────────────────┐
│ R Reset    Socios Servicios Equipo ... │ ← Logo izq, menú derecha
└─────────────────────────────────────────┘
Especificaciones:
css.header {
  background: #000000;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #333333;
}

.logo {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 28px;
  color: #FFFFFF;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  gap: 40px;
  list-style: none;
}

.nav-link {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-neon-green);
}
```

**Mobile menu (hamburger):**
- Ícono: Tres líneas horizontales, blanco
- Al abrir: Full-screen overlay negro con menú centrado
- Animación: Fade in + slide from right (0.3s)

---

### Footer

**Estructura:**
```
┌─────────────────────────────────────────┐
│                                          │
│  R Reset                                 │
│                                          │
│  Barranco, Lima, Perú                    │
│  contacto@reset.pe                       │
│                                          │
│  © 2025 Reset. Todos los derechos       │
│  reservados.                             │
│                                          │
└─────────────────────────────────────────┘
css.footer {
  background: #0A0A0A; /* Negro ligeramente menos intenso */
  padding: 60px 40px 40px;
  text-align: center;
  border-top: 1px solid #333333;
}

.footer-logo {
  font-size: 32px;
  margin-bottom: 24px;
}

.footer-text {
  font-size: 14px;
  color: #AAAAAA;
  line-height: 1.8;
  margin-bottom: 12px;
}

.footer-copyright {
  font-size: 12px;
  color: #666666;
  margin-top: 32px;
}

🎯 Casos de Uso: Aplicaciones Específicas
Aplicación Web: Mougli (Procesador KantarIBope)
Hero section:
html<section class="app-hero">
  <div class="container">
    <div class="hero-content">
      <h1>
        MOUGLI
        <span class="accent-neon">PROCESADOR KANTAR</span>
      </h1>
      <p class="hero-subtitle">
        Consolida archivos OutView y Monitor en un solo reporte
      </p>
    </div>
    
    <div class="upload-area">
      <!-- Formulario de upload aquí -->
    </div>
  </div>
</section>
Card de carga de archivos:
css.upload-card {
  background: #1A1A1A;
  border: 2px dashed #333333;
  border-radius: 16px;
  padding: 48px;
  text-align: center;
  transition: all var(--transition-base);
}

.upload-card:hover {
  border-color: var(--color-neon-green);
  background: #222222;
}

.upload-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  stroke: var(--color-neon-green);
}

.upload-text {
  font-size: 18px;
  color: #FFFFFF;
  margin-bottom: 8px;
}

.upload-subtext {
  font-size: 14px;
  color: #AAAAAA;
}

Dashboard de Resultados
Layout de métricas:
html<div class="metrics-grid">
  <div class="metric-card">
    <div class="metric-label">Alcance</div>
    <div class="metric-value">1,063,181</div>
    <div class="metric-unit">Usuarios</div>
  </div>
  
  <div class="metric-card">
    <div class="metric-label">Frecuencia</div>
    <div class="metric-value">8</div>
    <div class="metric-unit">Veces</div>
  </div>
  
  <div class="metric-card">
    <div class="metric-label">Impresiones</div>
    <div class="metric-value">8,505,448</div>
    <div class="metric-unit">Totales</div>
  </div>
  
  <!-- Más métricas... -->
</div>
css.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin: 48px 0;
}

@media (max-width: 768px) {
  .metrics-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

---

## 📱 Diseño Mobile: Adaptaciones Específicas

### Stack de Contenido

**Desktop (lado a lado):**
```
┌──────────────┬──────────────┐
│   Texto      │   Imagen     │
└──────────────┴──────────────┘
```

**Mobile (apilado):**
```
┌──────────────┐
│   Imagen     │
├──────────────┤
│   Texto      │
└──────────────┘
Regla: En mobile, imagen SIEMPRE arriba del texto (no viceversa).
Tipografía Mobile
css@media (max-width: 768px) {
  h1, .h1 {
    font-size: 48px; /* Desde 72-120px */
    line-height: 1.05; /* Más espacio para legibilidad */
    letter-spacing: -0.01em; /* Menos apretado */
  }
  
  h2, .h2 {
    font-size: 36px; /* Desde 48-72px */
  }
  
  h3, .h3 {
    font-size: 24px; /* Desde 28-36px */
  }
  
  p, .body-text {
    font-size: 16px; /* Mantener, no reducir */
    line-height: 1.7; /* Más espaciado */
  }
}
Regla crítica: NUNCA reducir body text debajo de 16px en mobile (legibilidad).
Tablas en Mobile
Transformación a cards:
css@media (max-width: 768px) {
  /* Ocultar tabla tradicional */
  table {
    display: none;
  }
  
  /* Mostrar versión cards */
  .table-card-mobile {
    display: block;
  }
}

.table-card-mobile .row {
  background: #1A1A1A;
  border: 1px solid #333333;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
}

.table-card-mobile .cell {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.table-card-mobile .cell-label {
  font-weight: 600;
  color: #AAAAAA;
  font-size: 12px;
  text-transform: uppercase;
}

.table-card-mobile .cell-value {
  font-weight: 700;
  color: #FFFFFF;
  font-size: 16px;
}

🎨 Variaciones y Excepciones
Fondos Alternativos (No Negro)
Cuándo usar fondo claro:

En visualizaciones de datos embedded (charts, gauges)
En secciones de "inversión" o "costos" (fondos azul/verde/rosa pastel)
En tarjetas de contenido dentro de fondo negro

Paleta de fondos claros:
css:root {
  --bg-blue-light: #E8F5FF;
  --bg-green-light: #E8FFE8;
  --bg-pink-light: #FFE8F0;
  --bg-yellow-light: #FFF9E8;
  --bg-gray-light: #F5F5F5;
}
Regla: Si fondo es claro, texto SIEMPRE oscuro (#1A1A1A o #000000). NUNCA gris medio (#666666) sobre claro.
Uso Excepcional de Serifas
NO usar serifas en Reset.
Única excepción: Citas textuales largas (testimonios) - pero aún así, preferir sans-serif.
Colores Terciarios (Uso Limitado)
Estos colores existen en la paleta pero usar CON MODERACIÓN:
css:root {
  --color-red: #FF4444; /* Solo para errores o decrementos negativos */
  --color-orange: #FF8800; /* Advertencias (casi nunca usar) */
  --color-yellow: #FFD700; /* Destacados especiales (raro) */
}
Regla: Máximo 1 uso de color terciario por página/slide.

🧪 Testing de Consistencia Visual
Herramienta de Verificación
Checklist automatizable con IA:
javascript// Pseudo-código para validar diseño generado
function validateResetBranding(design) {
  const checks = {
    backgroundColor: design.bgColor === '#000000',
    primaryTextColor: design.textColor === '#FFFFFF',
    accentColorUsage: design.accentColors.includes('#00FF85'),
    fontFamily: design.headingFont === 'Bebas Neue' || 'Anton',
    fontWeight: design.headingWeight >= 800,
    borderRadius: design.borderRadius >= 8 && design.borderRadius <= 16,
    spacing: design.sectionPadding >= 60,
    maxColors: design.colorPalette.length <= 4
  };
  
  return Object.values(checks).every(check => check === true);
}
Contraste de Color (WCAG AA)
Ratios mínimos:

Blanco (#FFFFFF) sobre Negro (#000000): 21:1 ✅ (Perfecto)
Verde Neón (#00FF85) sobre Negro (#000000): 12:1 ✅ (Excelente)
Gris claro (#AAAAAA) sobre Negro (#000000): 7:1 ✅ (Bueno)
Texto pequeño (<18px): Ratio mínimo 4.5:1
Texto grande (≥18px): Ratio mínimo 3:1

Herramienta: Usar contrast checker antes de aprobar cualquier combinación custom.

🎓 Guía de Voz para Copywriting
Tono de Comunicación Reset
Características:

Directo: Sin rodeos, al grano
Profesional: Pero no corporativo frío
Aspiracional: "Reseteamos la planificación de medios"
Orientado a resultados: Enfoque en datos, métricas, ROI
Inclusivo: "Nosotros" vs "yo"

Ejemplos de Headlines:
✅ Correcto (Reset style):

"RESETEAMOS LA PLANIFICACIÓN DE MEDIOS"
"CATÁLOGO DE ENTREGABLES"
"PROPUESTAS OOH VERANO 2026"
"CUMPLIMIENTO DE PROYECTADOS: 135%"

❌ Incorrecto (no Reset style):

"Somos la mejor agencia de medios" (muy genérico)
"Tu partner en marketing" (demasiado casual)
"Innovando el futuro de la publicidad" (buzzwords vacíos)
"Soluciones integrales personalizadas" (jerga corporativa)

Estructura de Mensajes
Patrón identificado:

Título impactante (H1): Declaración bold, mayúsculas
Subtítulo contextual (H3): Explicación concisa
Datos duros (Números): Métricas que respaldan
ReintentarATContinuar🎨 Documento de Identidad Visual: Reset - Parte 3 (Final)

🔤 Sistema de Nomenclatura y Etiquetas
Etiquetas de Secciones/Tags
Patrón visual:
html<span class="section-tag">// SAN FERNANDO</span>
<span class="section-tag">FT. RESEARCH</span>
<span class="section-tag">Relanzamiento AQP</span>
Estilo:
css.section-tag {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 12-14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--color-neon-green); /* Verde neón */
  display: inline-block;
  padding: 4px 12px;
  background: rgba(0, 255, 133, 0.1); /* Fondo semi-transparente */
  border-radius: 4px;
  margin-bottom: 16px;
}

/* Variante con símbolo // */
.section-tag::before {
  content: '▶ '; /* O usar '//' según contexto */
  color: var(--color-neon-green);
  margin-right: 8px;
}
```

**Uso:**
- Antes de títulos principales para dar contexto
- En breadcrumbs de navegación
- Como identificadores de cliente/proyecto

---

### Nomenclatura de Archivos y Assets

**Convención para proyectos Reset:**
```
reset-[proyecto]-[tipo]-[version].[ext]

Ejemplos:
reset-sanfernando-propuesta-v1.pdf
reset-mougli-dashboard-2025.html
reset-mapito-icon-primary.svg
reset-suite-logo-white.png
Reglas:

Todo en minúsculas
Separador: guión medio - (no underscore _)
Sin espacios, sin caracteres especiales
Incluir versión si aplica (v1, v2, final)


🎬 Animaciones Específicas y Microinteracciones
Hover Effects en Cards
Efecto "Lift & Glow":
css.card {
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  position: relative;
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: var(--color-neon-green); /* Borde sólido - evitar gradientes */
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 255, 133, 0.25);
}

.card:hover::before {
  opacity: 1;
}
Efecto: Al hacer hover, la card se eleva y aparece un borde degradado verde-cian brillante.

Loading States
Spinner estilo Reset:
html<div class="loader">
  <div class="loader-ring"></div>
  <div class="loader-text">PROCESANDO...</div>
</div>
css.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.loader-ring {
  width: 60px;
  height: 60px;
  border: 4px solid #1A1A1A;
  border-top: 4px solid var(--color-neon-green);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loader-text {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 2px;
  color: var(--color-neon-green);
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

Progress Bars
Estilo Reset:
html<div class="progress-container">
  <div class="progress-label">
    <span>Procesando archivo</span>
    <span>75%</span>
  </div>
  <div class="progress-bar">
    <div class="progress-fill" style="width: 75%"></div>
  </div>
</div>
css.progress-container {
  margin: 24px 0;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #1A1A1A;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: var(--color-neon-green); /* Sólido para mejor visibilidad */
  border-radius: 4px;
  transition: width 0.3s ease-out;
  position: relative;
  overflow: hidden;
}

/* Efecto de "brillo" animado */
.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  100% { left: 100%; }
}

Toast Notifications
Mensajes de feedback:
html<div class="toast toast-success">
  <div class="toast-icon">✓</div>
  <div class="toast-content">
    <div class="toast-title">¡Archivo procesado!</div>
    <div class="toast-message">Tu reporte está listo para descargar</div>
  </div>
  <button class="toast-close">×</button>
</div>
css.toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: #1A1A1A;
  border: 1px solid #333333;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  animation: slideInRight 0.3s ease-out;
  z-index: 1000;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast-success {
  border-left: 4px solid var(--color-neon-green);
}

.toast-error {
  border-left: 4px solid #FF4444;
}

.toast-warning {
  border-left: 4px solid #FF8800;
}

.toast-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-neon-green);
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;
}

.toast-content {
  flex: 1;
}

.toast-title {
  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
  margin-bottom: 4px;
}

.toast-message {
  font-size: 13px;
  color: #AAAAAA;
  line-height: 1.4;
}

.toast-close {
  background: none;
  border: none;
  color: #666666;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
  flex-shrink: 0;
}

.toast-close:hover {
  color: #FFFFFF;
}

🖼️ Iconografía y Símbolos
Biblioteca de Íconos Recomendada
Lucide Icons (recomendado para consistencia):

Estilo: Line icons, stroke weight 2
Color: Blanco o verde neón
Tamaño base: 24px

html<!-- Ejemplo con Lucide -->
<script src="https://unpkg.com/lucide@latest"></script>

<i data-lucide="upload" class="icon"></i>
<i data-lucide="check-circle" class="icon"></i>
<i data-lucide="x-circle" class="icon"></i>
<i data-lucide="arrow-right" class="icon"></i>

<script>
  lucide.createIcons();
</script>
css.icon {
  width: 24px;
  height: 24px;
  stroke: var(--color-white);
  stroke-width: 2;
  transition: stroke 0.2s ease;
}

.icon:hover {
  stroke: var(--color-neon-green);
}

.icon-lg {
  width: 32px;
  height: 32px;
}

.icon-sm {
  width: 18px;
  height: 18px;
}

Íconos Personalizados Reset
Si necesitas crear íconos custom:
Especificaciones:

Formato: SVG (vectorial)
Grid base: 24x24px
Stroke: 2px
Sin fill (solo contornos)
Extremos: Redondeados (stroke-linecap: round)

Ejemplo SVG del logo R:
svg<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Cuadrado con esquina cortada -->
  <path d="M4 4 L36 4 L36 32 L24 36 L4 36 Z" 
        stroke="white" 
        stroke-width="2" 
        stroke-linejoin="round"/>
  
  <!-- Letra R -->
  <path d="M12 12 L12 28 M12 12 L20 12 Q24 12 24 16 Q24 20 20 20 L12 20 M20 20 L24 28" 
        stroke="white" 
        stroke-width="2.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
  
  <!-- Flecha integrada -->
  <path d="M28 28 L32 32 M32 32 L32 28 M32 32 L28 32" 
        stroke="#00FF85" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>

📐 Grid Systems y Layouts Específicos
Grid de Dashboard (3 columnas)
css.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 48px 0;
}

/* Área destacada (span 2 columnas) */
.dashboard-grid .featured {
  grid-column: span 2;
}

/* Responsive */
@media (max-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .dashboard-grid .featured {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  
  .dashboard-grid .featured {
    grid-column: span 1;
  }
}

Layout Asimétrico (Hero Section)
css.hero-asymmetric {
  display: grid;
  grid-template-columns: 1.5fr 1fr; /* 60/40 split */
  gap: 60px;
  align-items: center;
  min-height: 80vh;
  padding: 60px 0;
}

.hero-content {
  /* Contenido a la izquierda */
}

.hero-visual {
  /* Imagen/visual a la derecha */
  position: relative;
}

@media (max-width: 968px) {
  .hero-asymmetric {
    grid-template-columns: 1fr;
    gap: 40px;
    min-height: auto;
  }
  
  /* En mobile, visual primero */
  .hero-visual {
    order: -1;
  }
}

Layout "Bento Box" (Mosaico)
Para presentar múltiples servicios/features:
css.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 16px;
}

.bento-item-1 {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-item-2 {
  grid-column: span 2;
  grid-row: span 1;
}

.bento-item-3 {
  grid-column: span 1;
  grid-row: span 2;
}

/* etc... */

@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  
  .bento-grid > * {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }
}

🎨 Patrones de Diseño Reutilizables
Pattern 1: "Split Hero"
Texto izquierda, visual derecha:
html<section class="split-hero">
  <div class="container">
    <div class="split-content">
      <div class="split-text">
        <span class="tag">// CLIENTE</span>
        <h1>TÍTULO IMPACTANTE EN MÚLTIPLES LÍNEAS</h1>
        <p>Descripción concisa del proyecto o servicio.</p>
        <div class="cta-group">
          <button class="btn btn-primary">Ver Propuesta</button>
          <button class="btn btn-ghost">Descargar PDF</button>
        </div>
      </div>
      
      <div class="split-visual">
        <img src="visual.jpg" alt="Visual">
        <div class="decorative-shape"></div>
      </div>
    </div>
  </div>
</section>

Pattern 2: "Stats Row"
Fila de estadísticas:
html<section class="stats-row">
  <div class="container">
    <div class="stats-grid">
      <div class="stat">
        <div class="stat-value">135%</div>
        <div class="stat-label">Cumplimiento</div>
      </div>
      
      <div class="stat">
        <div class="stat-value">1M+</div>
        <div class="stat-label">Alcance</div>
      </div>
      
      <div class="stat">
        <div class="stat-value">8.5M</div>
        <div class="stat-label">Impresiones</div>
      </div>
      
      <div class="stat">
        <div class="stat-value">3.39</div>
        <div class="stat-label">ROI</div>
      </div>
    </div>
  </div>
</section>
css.stats-row {
  background: #0A0A0A;
  padding: 80px 0;
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  text-align: center;
}

.stat-value {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 64px;
  color: var(--color-neon-green);
  line-height: 1;
  margin-bottom: 12px;
}

.stat-label {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #AAAAAA;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

Pattern 3: "Feature Cards"
Tarjetas de servicios/features:
html<section class="features">
  <div class="container">
    <h2 class="section-title">NUESTROS SERVICIOS</h2>
    
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">
          <i data-lucide="bar-chart"></i>
        </div>
        <h3 class="feature-title">Planificación de Medios</h3>
        <p class="feature-description">
          Estrategia data-driven para maximizar el alcance de tu campaña.
        </p>
      </div>
      
      <!-- Más cards... -->
    </div>
  </div>
</section>
css.features {
  padding: 120px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 64px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.feature-card {
  background: #1A1A1A;
  border: 1px solid #333333;
  border-radius: 16px;
  padding: 40px 32px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: var(--color-neon-green);
  box-shadow: 0 16px 48px rgba(0, 255, 133, 0.2);
}

.feature-icon {
  width: 56px;
  height: 56px;
  background: var(--color-neon-green); /* Sólido para mejor legibilidad */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.feature-icon i {
  width: 28px;
  height: 28px;
  stroke: #000000;
}

.feature-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
}

.feature-description {
  font-size: 15px;
  line-height: 1.6;
  color: #AAAAAA;
}

@media (max-width: 968px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

🔧 Herramientas y Recursos
Stack Tecnológico Recomendado para Implementación
Frontend:
json{
  "framework": "React 18+ o Vue 3+",
  "css": "Tailwind CSS 3.4+",
  "fonts": {
    "display": "Bebas Neue (Google Fonts)",
    "body": "Montserrat (Google Fonts)"
  },
  "icons": "Lucide React",
  "animations": "Framer Motion",
  "charts": "Chart.js o Recharts"
}
Librerías CSS útiles:
bash# Tailwind plugins
npm install -D @tailwindcss/forms
npm install -D @tailwindcss/typography

# Animaciones
npm install framer-motion

# Íconos
npm install lucide-react

Configuración Tailwind para Reset
javascript// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'reset-black': '#000000',
        'reset-white': '#FFFFFF',
        'reset-neon': '#00FF85',
        'reset-cyan': '#00E5FF',
        'reset-violet': '#6F42C1',
        'reset-purple': '#9B59B6',
        'reset-gray-dark': '#1A1A1A',
        'reset-gray-medium': '#333333',
        'reset-gray-light': '#AAAAAA',
      },
      fontFamily: {
        'display': ['Bebas Neue', 'Anton', 'Archivo Black', 'sans-serif'],
        'body': ['Montserrat', 'Inter', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero': ['120px', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display': ['72px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'reset': '12px',
      },
      boxShadow: {
        'reset-sm': '0 4px 16px rgba(0, 255, 133, 0.1)',
        'reset-md': '0 8px 32px rgba(0, 255, 133, 0.15)',
        'reset-lg': '0 16px 48px rgba(0, 255, 133, 0.25)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
```

---

### Preset de Figma/Sketch

**Variables de diseño para herramientas:**
```
# Color Styles
reset/black: #000000
reset/white: #FFFFFF
reset/neon-green: #00FF85
reset/cyan: #00E5FF
reset/violet: #6F42C1
reset/purple: #9B59B6
reset/gray-dark: #1A1A1A
reset/gray-medium: #333333
reset/gray-light: #AAAAAA

# Text Styles
reset/h1-display: Bebas Neue, 900, 120px, -2% tracking
reset/h2-heading: Bebas Neue, 800, 72px, -1% tracking
reset/h3-subhead: Montserrat, 700, 36px, 0% tracking
reset/body-large: Montserrat, 500, 18px, 0.5px tracking
reset/body: Montserrat, 400, 16px, 0.5px tracking
reset/caption: Montserrat, 600, 12px, 1.5px tracking

# Effect Styles
reset/shadow-sm: 0 4px 16px rgba(0, 255, 133, 0.1)
reset/shadow-md: 0 8px 32px rgba(0, 255, 133, 0.15)
reset/shadow-lg: 0 16px 48px rgba(0, 255, 133, 0.25)

📚 Biblioteca de Componentes Completa
Componente: Button
jsx// Button.jsx - React Component
import React from 'react';
import './Button.css';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  onClick,
  disabled = false,
  ...props 
}) => {
  const variantClasses = {
    primary: 'btn-primary',
    ghost: 'btn-ghost',
    text: 'btn-text'
  };
  
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  };
  
  return (
    <button
      className={`btn ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-text">{children}</span>
    </button>
  );
};
css/* Button.css */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-body);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  text-decoration: none;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Variants */
.btn-primary {
  background: var(--color-neon-green); /* Sólido - evitar gradientes */
  color: var(--color-black);
}

.btn-primary:hover:not(:disabled) {
  background: #00CC6A; /* Verde más oscuro para feedback */
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 255, 133, 0.3);
}

.btn-ghost {
  background: transparent;
  color: var(--color-neon-green);
  border: 2px solid var(--color-neon-green);
}

.btn-ghost:hover:not(:disabled) {
  background: var(--color-neon-green);
  color: var(--color-black);
}

.btn-text {
  background: transparent;
  color: var(--color-neon-green);
  padding: 0;
}

.btn-text:hover:not(:disabled) {
  color: var(--color-cyan);
}

/* Sizes */
.btn-sm {
  padding: 10px 20px;
  font-size: 13px;
}

.btn-md {
  padding: 14px 32px;
  font-size: 16px;
}

.btn-lg {
  padding: 18px 40px;
  font-size: 18px;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

Componente: Card
jsx// Card.jsx
import React from 'react';
import './Card.css';

export const Card = ({ 
  children, 
  hover = true,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`card ${hover ? 'card-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => (
  <div className="card-header">{children}</div>
);

export const CardBody = ({ children }) => (
  <div className="card-body">{children}</div>
);

export const CardFooter = ({ children }) => (
  <div className="card-footer">{children}</div>
);
css/* Card.css */
.card {
  background: var(--color-gray-dark);
  border: 1px solid var(--color-gray-medium);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all var(--transition-base);
}

.card-hover:hover {
  transform: translateY(-4px);
  border-color: var(--color-neon-green);
  box-shadow: 0 12px 40px rgba(0, 255, 133, 0.15);
}

.card-header {
  padding: 24px 24px 16px;
  border-bottom: 1px solid var(--color-gray-medium);
}

.card-body {
  padding: 24px;
}

.card-footer {
  padding: 16px 24px 24px;
  border-top: 1px solid var(--color-gray-medium);
}
