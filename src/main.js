import "./style.css";

// Data + Render
const PROJECTS = [
  {
    title: "Lista Escolar Lápiz López",
    desc: "Plataforma en línea que permite a los apoderados y estudiantes seleccionar y comprar listas escolares completas de forma rápida. El sistema valida disponibilidad, optimiza precios y facilita la compra en un solo clic. Incluye integración con WooCommerce para la gestión de pedidos y pasarela de pago. Además, se utilizó inteligencia artificial para la lectura automática de archivos e imágenes PDF con listas escolares, junto con Redis para optimizar la caché y mejorar el rendimiento.",
    stack: ["PHP", "WordPress", "WooCommerce", "ACF", "AI", "Redis"],
    link: "https://lapizlopez.cl/lista-escolar",
  },
  {
    title: "Reenvío de correos de WooCommerce",
    desc: "Reenvía en bloque correos de WooCommerce por rango de fechas con filtros por estado y selección de tipos de correo (Nuevo pedido, En espera, Procesando, Completado, Fallido, Cancelado, Factura/Detalles, Reembolsado). Permite excluir pagos 'cod', cuenta con modo simulación, ejecución por AJAX con barra de progreso, evita reenvíos duplicados mediante flag interno, agrega nota al pedido y puede reenviar 'Nuevo pedido (admin)' solo si no fue enviado antes. Respeta la habilitación de emails en los ajustes de WooCommerce. (v1.0.6)",
    stack: ["PHP", "WordPress", "WooCommerce", "JavaScript", "AJAX"],
    link: "https://github.com/yogui-dev/yg-dev-resend-wc-emails",
  },
  {
    title: "Sitio web Tropera.cl",
    desc: "E-commerce para la cervecería Tropera con WooCommerce, tema WordPress personalizado y frontend basado en Bootstrap. Incluye catálogo de packs, carrito/checkout, restricción de edad (18+), y métodos de pago integrados (WebPay). Optimizado para UX y conversión.",
    stack: [
      "PHP",
      "WordPress",
      "WooCommerce",
      "ACF",
      "JavaScript",
      "Bootstrap",
      "CSS",
    ],
    link: "https://tropera.cl",
  },
  {
    title: "Sitio web Lápiz López",
    desc: "Desarrollo y soporte del e-commerce de Lápiz López, implementado con WooCommerce. Incluye personalización de plantillas, optimización de backend y mejoras en la experiencia de compra para usuarios. Se trabajó en la integración de productos, carrito, pagos y gestión de pedidos.",
    stack: ["PHP", "WordPress", "WooCommerce", "JavaScript", "CSS"],
    link: "https://lapizlopez.cl",
  },
  {
    title: "Sitio web Revista Velvet",
    desc: "Implementación y mantenimiento del sitio web de Revista Velvet en WordPress. Se trabajó en la optimización de la experiencia de lectura digital, personalización de plantillas y gestión de contenidos editoriales, garantizando un diseño moderno, rápido y adaptable a dispositivos móviles.",
    stack: ["PHP", "WordPress", "JavaScript", "CSS"],
    link: "https://revistavelvet.cl",
  },
  {
    title: "Sitio web El Desconcierto",
    desc: "Desarrollo y soporte del portal de noticias El Desconcierto en WordPress. Incluye personalización de temas, optimización de rendimiento y administración de contenidos de alto tráfico, asegurando estabilidad, seguridad y una experiencia de lectura eficiente en múltiples dispositivos.",
    stack: ["PHP", "WordPress", "JavaScript", "CSS"],
    link: "https://eldesconcierto.cl/",
  },
  {
    title: "Sitio web Vientos del Sur Propiedades",
    desc: "Plataforma inmobiliaria desarrollada en Laravel para Vientos del Sur Propiedades, con funcionalidades de gestión de arriendos y ventas de propiedades. Incluye filtros de búsqueda, panel de administración para carga de inmuebles y un diseño optimizado para usuarios interesados en propiedades en el sur de Chile.",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "CSS"],
    link: "https://www.vientosdelsurpropiedades.cl/",
  },
];

const grid = document.getElementById("projectsGrid");
const count = document.getElementById("projectCount");
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

function tag(list) {
  return list
    .map(
      (t) =>
        `<span class="rounded-lg border border-zinc-200 px-2 py-1 text-xs dark:border-zinc-800">${t}</span>`
    )
    .join("");
}

function card(p) {
  return `
    <article class="group flex h-full flex-col justify-between rounded-3xl border border-zinc-200 p-5 transition hover:-translate-y-0.5 hover:shadow-soft dark:border-zinc-800">
      <div>
        <h3 class="text-lg font-semibold">
          <a class="inline-flex items-center gap-2 underline-offset-4 hover:text-accent hover:underline" href="${
            p.link
          }" target="_blank" rel="noopener">
            ${p.title}
            <svg class="h-4 w-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </h3>
        <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">${p.desc}</p>
      </div>
      <div class="mt-4 flex flex-wrap gap-2">${tag(p.stack)}</div>
    </article>`;
}

if (grid) grid.innerHTML = PROJECTS.map(card).join("");
if (count) count.textContent = PROJECTS.length;

// Theme toggle
const themeBtn = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");
function setTheme(mode) {
  document.documentElement.classList.toggle("dark", mode === "dark");
  localStorage.setItem("theme", mode);
  if (themeLabel) themeLabel.textContent = mode === "dark" ? "☀️" : "🌙";
}
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const dark = document.documentElement.classList.contains("dark");
    setTheme(dark ? "light" : "dark");
  });
}
setTheme(
  document.documentElement.classList.contains("dark") ? "dark" : "light"
);

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
