# Portafolio — Jorge Arias (Yogui-dev)

Sitio de portafolio personal construido con HTML + Tailwind CSS (v3) y Vite.

## Stack
- Vite 5 (Dev server y build)
- Tailwind CSS 3 + PostCSS 8 + Autoprefixer 10
- JavaScript vanilla

## Requisitos
- Node.js 18+

## Empezar
```bash
npm install
npm run dev
```
Abre la URL que muestra Vite (p. ej. http://localhost:5173).

## Scripts
- `npm run dev`: servidor de desarrollo
- `npm run build`: compila a producción en `dist/`
- `npm run preview`: sirve la build de producción

## Estructura
```
.
├─ index.html
├─ src/
│  ├─ main.js        # Render de proyectos, toggle de tema, menú móvil
│  └─ style.css      # @tailwind base/components/utilities + utilidades
├─ public/
│  └─ profile.jpg    # (opcional) foto de perfil servida estáticamente
├─ tailwind.config.js # color accent y sombra soft extendidos
├─ postcss.config.js  # Tailwind + Autoprefixer
├─ package.json
└─ .gitignore
```

## Tailwind
- Config en `tailwind.config.js` con:
  - `content`: `./index.html` y `./src/**/*.{js,ts,jsx,tsx,vue}`
  - `theme.extend.colors.accent` y `theme.extend.boxShadow.soft`
- Estilos globales en `src/style.css` con las directivas `@tailwind`.

## Tema (dark por defecto)
- El sitio inicia en modo oscuro por defecto.
- Se respeta la preferencia guardada en `localStorage` (`theme = 'dark' | 'light'`).
- Toggle de tema en el header (`#themeToggle`), manejado por `setTheme()` en `src/main.js`.

## Hero (avatar)
- La imagen de perfil se muestra a la izquierda del título, redonda, con ring/accent y tamaños responsivos.
- Puedes usar una URL (p. ej. GitHub avatar) o colocar `public/profile.jpg` y referenciar `/profile.jpg` en el HTML.

## Desarrollo
- Evita abrir `index.html` con `file://` para no tener problemas CORS. Usa siempre `npm run dev`.

## Build y Deploy
- Build: `npm run build` genera `dist/`.
- Puedes desplegar en:
  - Netlify / Vercel: detectan Vite automáticamente.
  - GitHub Pages: publica `dist/` (necesitarás adaptar rutas si usas subcarpeta).

## Personalización rápida
- Colores: ajusta `accent` en `tailwind.config.js`.
- Avatar: cambia la `src` en el `img` del Hero (`index.html`) o usa `/profile.jpg`.
- Proyectos: edita el array `PROJECTS` en `src/main.js`.

## Notas
- No hay variables de entorno. Si agregas alguna, recuerda añadir `.env*` al `.gitignore` (ya incluido).
