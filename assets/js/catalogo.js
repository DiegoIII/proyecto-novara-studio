const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));

const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

const filterBtns = document.querySelectorAll('.filter-btn');
const allCards = document.querySelectorAll('.cat-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    allCards.forEach(card => {
      card.style.display = filter === 'all' || card.dataset.category === filter ? '' : 'none';
    });
    document.querySelectorAll('.paquete-tier').forEach(tier => {
      tier.style.display = [...tier.querySelectorAll('.cat-card')].some(c => c.style.display !== 'none') ? '' : 'none';
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.cat-card, .tier-header').forEach(el => observer.observe(el));

const catalogData = {
  "basico-interior-sala": {
    tier: "Básico", category: "Interior", title: "Sala — Comedor",
    tagline: "El punto de partida para transformar el corazón de tu hogar.", img: null,
    description: "Diseñamos tu sala y comedor como un conjunto armonioso: paleta de colores, materiales, distribución de muebles y una propuesta visual en 3D para que veas el resultado antes de comprar cualquier cosa.",
    includes: [
      { icon: "render", text: "Propuesta en 3D (1 vista realista)" },
      { icon: "palette", text: "Paleta de colores y materiales seleccionados" },
      { icon: "list", text: "Lista de compras estimada con referencias de tiendas" },
      { icon: "revision", text: "1 revisión de ajustes incluida" }
    ],
    notIncludes: ["Supervisión de obra", "Gestión de compras", "Renders adicionales"],
    time: "5 días hábiles", cta: "asesoria.html",
    ideal: "Familias que quieren renovar su sala/comedor con orientación profesional y presupuesto definido."
  },
  "basico-interior-recamara": {
    tier: "Básico", category: "Interior", title: "Recámara Principal",
    tagline: "Tu espacio de descanso, diseñado para inspirarte cada mañana.", img: null,
    description: "Optimizamos la distribución de tu recámara, proponemos una paleta coherente y diseñamos la iluminación para lograr el ambiente que buscas, todo documentado en un render claro.",
    includes: [
      { icon: "render", text: "Propuesta en 3D (1 vista)" },
      { icon: "furniture", text: "Distribución óptima de muebles" },
      { icon: "light", text: "Propuesta de iluminación (general y ambiente)" },
      { icon: "revision", text: "1 revisión de ajustes incluida" }
    ],
    notIncludes: ["Supervisión de obra", "Gestión de compras", "Clóset o baño incluido"],
    time: "5 días hábiles", cta: "asesoria.html",
    ideal: "Personas que remodelan su recámara y quieren claridad visual antes de invertir."
  },
  "basico-exterior-fachada": {
    tier: "Básico", category: "Exterior", title: "Fachada Residencial",
    tagline: "La primera impresión de tu hogar, renovada con criterio profesional.", img: null,
    description: "Proponemos una nueva imagen para el frente de tu casa: colores, texturas, materiales y elementos decorativos que elevan el aspecto de tu propiedad sin obras mayores.",
    includes: [
      { icon: "render", text: "Render de fachada (1 vista frontal)" },
      { icon: "palette", text: "Paleta de colores exteriores con referencias de marca" },
      { icon: "materials", text: "Sugerencia de materiales costo-eficientes" },
      { icon: "revision", text: "1 revisión incluida" }
    ],
    notIncludes: ["Jardín o patio", "Supervisión de pintura", "Gestión de materiales"],
    time: "5 días hábiles", cta: "asesoria.html",
    ideal: "Propietarios que quieren renovar la apariencia exterior sin grandes obras."
  },
  "intermedio-interior-sala-cocina": {
    tier: "Intermedio", category: "Interior", title: "Sala — Comedor — Cocina",
    tagline: "Los tres espacios principales de tu hogar, pensados como uno solo.", img: null,
    description: "Un proyecto integral que unifica sala, comedor y cocina en una propuesta coherente de estilo, materiales e iluminación. Recibes múltiples vistas 3D, lista de materiales con precios y una visita de supervisión.",
    includes: [
      { icon: "render", text: "Propuesta en 3D (3 vistas distintas)" },
      { icon: "list", text: "Lista de materiales con precios reales de mercado local" },
      { icon: "light", text: "Diseño de iluminación y propuesta de mobiliario" },
      { icon: "revision", text: "2 revisiones de ajustes incluidas" },
      { icon: "supervisor", text: "1 visita de supervisión de avance" }
    ],
    notIncludes: ["Supervisión de obra completa", "Gestión de compras"],
    time: "5 días hábiles para propuesta 3D", cta: "asesoria.html",
    ideal: "Familias que están remodelando su área social y quieren acompañamiento técnico."
  },
  "intermedio-exterior-patio": {
    tier: "Intermedio", category: "Exterior", title: "Patio + Jardín",
    tagline: "Convierte tu espacio exterior en una extensión real de tu hogar.", img: null,
    description: "Diseñamos tu patio y jardín con criterio paisajístico y funcional: vegetación, pavimentos, iluminación exterior y zonas de descanso o convivencia adaptadas a tu presupuesto.",
    includes: [
      { icon: "render", text: "Render 3D (2 vistas del espacio)" },
      { icon: "garden", text: "Diseño de jardín con selección de plantas locales" },
      { icon: "light", text: "Propuesta de iluminación exterior" },
      { icon: "list", text: "Materiales y costos estimados" },
      { icon: "revision", text: "2 revisiones incluidas" }
    ],
    notIncludes: ["Supervisión de obra", "Compra e instalación de plantas"],
    time: "5 días hábiles", cta: "asesoria.html",
    ideal: "Hogares con patio o jardín sin aprovechar que buscan ganar espacio de convivencia."
  },
  "intermedio-comercial-local": {
    tier: "Intermedio", category: "Comercial", title: "Local Comercial",
    tagline: "Un espacio que vende por sí solo antes de que abras la puerta.", img: null,
    description: "Diseñamos la distribución funcional y la identidad visual de tu local: renders 3D, señalética básica y propuesta de imagen que comunica tu marca desde el espacio físico.",
    includes: [
      { icon: "render", text: "Propuesta 3D (2 vistas interior/exterior)" },
      { icon: "furniture", text: "Distribución funcional para flujo de clientes" },
      { icon: "brand", text: "Identidad visual del espacio (colores, materiales, estilo)" },
      { icon: "sign", text: "Señalética básica incluida" },
      { icon: "revision", text: "2 revisiones incluidas" }
    ],
    notIncludes: ["Supervisión de obra", "Rotulación física", "Gestión de proveedores"],
    time: "5 días hábiles", cta: "asesoria.html",
    ideal: "Microempresarios que están abriendo o renovando su local y quieren imagen profesional."
  },
  "plus-interior-residencial": {
    tier: "Plus", category: "Interior", title: "Proyecto Residencial Completo",
    tagline: "Nosotros nos encargamos de todo. Tú solo apruebas el resultado.", img: null,
    description: "Servicio completo de diseño de interiores: desde el primer render hasta la entrega de tu espacio terminado. Gestionamos materiales, coordinamos proveedores y supervisamos cada etapa de la obra.",
    includes: [
      { icon: "render", text: "3D completo con múltiples vistas y recorrido" },
      { icon: "shopping", text: "Gestión y cotización de materiales con proveedores confiables" },
      { icon: "supervisor", text: "Supervisión de obra completa hasta entrega" },
      { icon: "revision", text: "Revisiones ilimitadas durante el proceso" },
      { icon: "doc", text: "Entrega final documentada con fotografías" }
    ],
    notIncludes: [],
    time: "A convenir según alcance", cta: "asesoria.html",
    ideal: "Familias que quieren delegar completamente su remodelación con total confianza."
  },
  "plus-exterior-remodelacion": {
    tier: "Plus", category: "Exterior", title: "Remodelación Exterior Completa",
    tagline: "Fachada, patio y jardín: una transformación exterior integral.", img: null,
    description: "Diseñamos y ejecutamos la renovación completa del exterior de tu propiedad: fachada, patio y jardín como un proyecto unificado, gestionando cada detalle de obra y materiales.",
    includes: [
      { icon: "render", text: "Fachada + patio + jardín en 3D (múltiples vistas)" },
      { icon: "shopping", text: "Gestión completa de materiales exteriores" },
      { icon: "supervisor", text: "Supervisión de obra de principio a fin" },
      { icon: "revision", text: "Revisiones ilimitadas" },
      { icon: "doc", text: "Entrega final documentada antes/después" }
    ],
    notIncludes: [],
    time: "A convenir según alcance", cta: "asesoria.html",
    ideal: "Propietarios que quieren renovar toda la imagen exterior de su propiedad sin preocupaciones."
  },
  "plus-comercial-llave": {
    tier: "Plus", category: "Comercial", title: "Negocio Llave en Mano",
    tagline: "Tu negocio diseñado, construido y listo para abrir.", img: null,
    description: "El servicio más completo de Novara: diseñamos el interior y exterior de tu negocio, coordinamos toda la obra, gestionamos materiales y te entregamos un espacio funcional, con imagen y listo para operar.",
    includes: [
      { icon: "render", text: "Diseño interior y exterior completo en 3D" },
      { icon: "brand", text: "Branding del espacio alineado a tu identidad de marca" },
      { icon: "shopping", text: "Gestión de materiales y proveedores especializados" },
      { icon: "supervisor", text: "Supervisión total de la obra" },
      { icon: "doc", text: "Entrega documentada y lista para abrir al público" }
    ],
    notIncludes: [],
    time: "A convenir según alcance", cta: "asesoria.html",
    ideal: "Emprendedores y negocios que quieren inaugurar con un espacio profesional sin gestionar la obra."
  }
};

function getIcon(type) {
  const icons = {
    render: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="14" height="10" rx="1"/><path d="M5 9 L8 12 L13 7"/></svg>`,
    palette: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="9" r="6"/><path d="M9 3 A6 6 0 0 1 15 9"/></svg>`,
    list: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="2" width="12" height="14" rx="1"/><line x1="6" y1="6" x2="12" y2="6"/><line x1="6" y1="9" x2="12" y2="9"/><line x1="6" y1="12" x2="9" y2="12"/></svg>`,
    revision: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="9" r="6"/><polyline points="6 9 8 11 12 7"/></svg>`,
    furniture: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="8" width="14" height="6" rx="1"/><line x1="4" y1="14" x2="4" y2="16"/><line x1="14" y1="14" x2="14" y2="16"/><path d="M4 8 V6 Q9 3 14 6 V8"/></svg>`,
    light: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="8" r="3"/><line x1="9" y1="2" x2="9" y2="1"/><line x1="9" y1="14" x2="9" y2="16"/><line x1="3" y1="5" x2="2" y2="4"/><line x1="15" y1="5" x2="16" y2="4"/><line x1="1" y1="9" x2="3" y2="9"/><line x1="15" y1="9" x2="17" y2="9"/></svg>`,
    materials: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="10" y="2" width="6" height="6" rx="1"/><rect x="2" y="10" width="6" height="6" rx="1"/><rect x="10" y="10" width="6" height="6" rx="1"/></svg>`,
    supervisor: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="9" r="6"/><circle cx="9" cy="9" r="2.5"/></svg>`,
    garden: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 16 L9 8 M9 8 C9 8 5 6 5 3 C7 3 9 5 9 8 M9 8 C9 8 13 6 13 3 C11 3 9 5 9 8"/></svg>`,
    brand: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="9 2 16 7 16 15 2 15 2 7"/><line x1="9" y1="11" x2="9" y2="15"/></svg>`,
    sign: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="14" height="8" rx="1"/><line x1="9" y1="12" x2="9" y2="16"/><line x1="6" y1="16" x2="12" y2="16"/><line x1="5" y1="7" x2="13" y2="7"/><line x1="5" y1="10" x2="9" y2="10"/></svg>`,
    shopping: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="14" r="1.5"/><circle cx="13" cy="14" r="1.5"/><path d="M1 2 L4 2 L6 11 L14 11 L16 5 L4 5"/></svg>`,
    doc: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="10" height="14" rx="1"/><line x1="6" y1="6" x2="12" y2="6"/><line x1="6" y1="9" x2="12" y2="9"/><line x1="6" y1="12" x2="9" y2="12"/></svg>`
  };
  return icons[type] || icons.render;
}

function getTierClass(tier) {
  if (tier === "Básico") return "tier-basico";
  if (tier === "Intermedio") return "tier-intermedio";
  if (tier === "Plus") return "tier-plus";
  return "";
}

function createModal() {
  if (document.getElementById("detalleModal")) return;
  const modal = document.createElement("div");
  modal.id = "detalleModal";
  modal.className = "detalle-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `<div class="detalle-backdrop"></div><div class="detalle-panel"><button class="detalle-close" id="detalleClose" aria-label="Cerrar"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="4" y1="4" x2="16" y2="16"/><line x1="16" y1="4" x2="4" y2="16"/></svg></button><div class="detalle-body" id="detalleBody"></div></div>`;
  document.body.appendChild(modal);
  modal.querySelector(".detalle-backdrop").addEventListener("click", closeModal);
  modal.querySelector("#detalleClose").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

function openModal(data) {
  const modal = document.getElementById("detalleModal");
  const body = document.getElementById("detalleBody");
  const includesHTML = data.includes.map(item => `<li><span class="di-icon">${getIcon(item.icon)}</span><span>${item.text}</span></li>`).join("");
  const notIncludesHTML = data.notIncludes.length ? `<div class="di-not-includes"><p class="di-sub-label">No incluye</p><ul class="di-not-list">${data.notIncludes.map(t => `<li><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="3" x2="11" y2="11"/><line x1="11" y1="3" x2="3" y2="11"/></svg>${t}</li>`).join("")}</ul></div>` : "";
  body.innerHTML = `<div class="di-top"><div class="di-badges"><span class="di-tier-badge ${getTierClass(data.tier)}">${data.tier}</span><span class="di-cat-badge">${data.category}</span></div><h2 class="di-title">${data.title}</h2><p class="di-tagline">${data.tagline}</p></div><p class="di-description">${data.description}</p><div class="di-section"><p class="di-sub-label">¿Qué incluye?</p><ul class="di-includes-list">${includesHTML}</ul></div>${notIncludesHTML}<div class="di-meta"><div class="di-meta-item"><div class="di-meta-icon"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="10" r="8"/><line x1="10" y1="6" x2="10" y2="10"/><line x1="10" y1="10" x2="14" y2="12"/></svg></div><div><span class="di-meta-label">Tiempo de entrega</span><span class="di-meta-value">${data.time}</span></div></div><div class="di-meta-item"><div class="di-meta-icon"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="8" r="4"/><path d="M3 18 C3 13 17 13 17 18"/></svg></div><div><span class="di-meta-label">Ideal para</span><span class="di-meta-value">${data.ideal}</span></div></div></div><div class="di-actions"><a href="${data.cta}" class="di-btn-primary"><svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="9" x2="15" y2="9"/><polyline points="10 4 15 9 10 14"/></svg>Solicitar este paquete</a><button class="di-btn-secondary" id="diClose2">Cerrar</button></div>`;
  document.getElementById("diClose2").addEventListener("click", closeModal);
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("detalleModal").classList.remove("open");
  document.body.style.overflow = "";
}

function getCardKey(card) {
  const tier = card.closest(".paquete-tier")?.id;
  const category = card.dataset.category;
  const title = card.querySelector("h3")?.textContent.trim();
  const map = {
    "basico|interior|Sala — Comedor": "basico-interior-sala",
    "basico|interior|Recámara Principal": "basico-interior-recamara",
    "basico|exterior|Fachada Residencial": "basico-exterior-fachada",
    "intermedio|interior|Sala — Comedor — Cocina": "intermedio-interior-sala-cocina",
    "intermedio|exterior|Patio + Jardín": "intermedio-exterior-patio",
    "intermedio|comercial|Local Comercial": "intermedio-comercial-local",
    "plus|interior|Proyecto Residencial Completo": "plus-interior-residencial",
    "plus|exterior|Remodelación Exterior Completa": "plus-exterior-remodelacion",
    "plus|comercial|Negocio Llave en Mano": "plus-comercial-llave"
  };
  return map[`${tier}|${category}|${title}`] || null;
}

function initCatalog() {
  createModal();
  // Use event delegation so dynamically added cards still work
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-cta');
    if (!btn) return;
    e.stopPropagation();
    const card = btn.closest('.cat-card');
    if (!card) return;
    const key = getCardKey(card);
    if (key && catalogData[key]) openModal(catalogData[key]);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCatalog);
} else {
  initCatalog();
}