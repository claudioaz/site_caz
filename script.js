const SITE_CONFIG = {
 
  email: "claudioangulo80@gmail.com",


  resumeUrl: "",

  github: "https://github.com/claudioaz",
  linkedin: "https://www.linkedin.com/in/claudio-angulo-zurita/",
};

/*
projetos
*/
const PROJECTS = [
  {
    title: "Dashboard Interativo de Vendas",
    visual: "dashboard",
    description: "Dashboard web que reúne indicadores, gráficos e tabelas comerciais para facilitar a exploração dos dados e a leitura dos resultados de vendas.",
    tech: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/claudioaz/sales-performance-dashboard",   
    demo: "https://claudioaz.github.io/sales-performance-dashboard/",                                
  },
  {
    title: "Análise de Vendas com Python",
    visual: "python",
    description: "Exploração e tratamento de dados de vendas com Python e pandas: limpeza, organização, consultas e geração de informações para análise, com relatório dos resultados.",
    tech: ["Python", "pandas"],
    code: "https://github.com/claudioaz/analise-vendas-pandas",   
    demo: "https://claudioaz.github.io/relatorio/",
    demoLabel: "Ver relatório",
  },
  {
    title: "Dashboard Financeiro em Power BI",
    visual: "finance",
    description: "Análise de recebimentos, pagamentos e fluxo de caixa, com preparação de dados, modelagem e criação de indicadores para acompanhamento.",
    tech: ["Excel", "Power Query", "Power BI", "DAX"],
    code: "",   
    demo: "https://lnkd.in/p/dD-AspTc",
  },
  {
    title: "Automação de Análise de Feedbacks",
    visual: "automation",
    description: "Fluxo que processa avaliações de clientes com n8n e um Agente de IA, classificando e interpretando comentários para transformá-los em informações relevantes.",
    tech: ["n8n", "Inteligência Artificial", "Automação"],
    code: "",  
    demo: "https://lnkd.in/p/dz5_PCGN",   
  },
  {
    title: "Projetos de Programação",
    visual: "code",
    description: "Aplicações e exercícios práticos desenvolvidos durante a graduação: Python, estruturas de dados, algoritmos e desenvolvimento de aplicações.",
    tech: ["Python", "Algoritmos", "Estruturas de dados"],
    code: "https://github.com/claudioaz",
    demo: "",
  },
];


const VISUALS = {
  dashboard: `<svg viewBox="0 0 300 140" role="img" aria-label="Ilustração de dashboard com gráfico de barras e cartões">
    <rect class="t-box" x="6" y="6" width="84" height="34" rx="6"/><rect class="t-acc" x="14" y="16" width="30" height="5" rx="2"/><rect class="t-box" x="14" y="26" width="50" height="5" rx="2"/>
    <rect class="t-box" x="98" y="6" width="84" height="34" rx="6"/><rect class="t-acc" x="106" y="16" width="30" height="5" rx="2"/>
    <rect class="t-box" x="190" y="6" width="104" height="34" rx="6"/><rect class="t-acc" x="198" y="16" width="30" height="5" rx="2"/>
    <rect class="t-box" x="6" y="48" width="180" height="86" rx="6"/>
    <rect class="t-fill" x="20" y="92" width="18" height="32" rx="3"/><rect class="t-fill" x="48" y="76" width="18" height="48" rx="3"/><rect class="t-fill" x="76" y="84" width="18" height="40" rx="3"/><rect class="t-fill" x="104" y="64" width="18" height="60" rx="3"/><rect class="t-fill" x="132" y="72" width="18" height="52" rx="3"/><rect class="t-fill" x="160" y="58" width="18" height="66" rx="3"/>
    <rect class="t-box" x="194" y="48" width="100" height="86" rx="6"/>
    <circle cx="244" cy="91" r="28" fill="none" stroke="rgba(52,211,153,.35)" stroke-width="12"/>
    <path d="M244 63 A28 28 0 0 1 272 91" fill="none" stroke="#34d399" stroke-width="12"/>
  </svg>`,
  python: `<svg viewBox="0 0 300 140" role="img" aria-label="Ilustração de código Python e tabela de dados">
    <rect class="t-box" x="6" y="6" width="150" height="128" rx="6"/>
    <text class="t-txt" x="16" y="30">import pandas as pd</text>
    <text class="t-txt" x="16" y="50">df = pd.read_csv(...)</text>
    <text class="t-txt" x="16" y="70">df.dropna()</text>
    <text class="t-txt" x="16" y="90">df.groupby(...)</text>
    <rect class="t-acc" x="16" y="104" width="60" height="5" rx="2"/>
    <rect class="t-box" x="166" y="6" width="128" height="128" rx="6"/>
    <rect class="t-fill" x="166" y="6" width="128" height="22"/>
    <line x1="166" y1="50" x2="294" y2="50" stroke="#28323f"/><line x1="166" y1="72" x2="294" y2="72" stroke="#28323f"/><line x1="166" y1="94" x2="294" y2="94" stroke="#28323f"/><line x1="166" y1="116" x2="294" y2="116" stroke="#28323f"/>
    <line x1="230" y1="6" x2="230" y2="134" stroke="#28323f"/>
  </svg>`,
  finance: `<svg viewBox="0 0 300 140" role="img" aria-label="Ilustração de gráfico financeiro em linha">
    <rect class="t-box" x="6" y="6" width="288" height="128" rx="6"/>
    <line x1="20" y1="46" x2="280" y2="46" stroke="#28323f"/><line x1="20" y1="76" x2="280" y2="76" stroke="#28323f"/><line x1="20" y1="106" x2="280" y2="106" stroke="#28323f"/>
    <polyline class="t-line" points="22,104 62,86 102,94 142,62 182,70 222,40 278,28"/>
    <polyline points="22,112 62,108 102,100 142,96 182,88 222,84 278,70" fill="none" stroke="#14b8a6" stroke-width="2" stroke-dasharray="5 5" stroke-linecap="round"/>
  </svg>`,
  automation: `<svg viewBox="0 0 300 140" role="img" aria-label="Ilustração de fluxo de automação com nós conectados">
    <rect class="t-box" x="8" y="46" width="64" height="48" rx="10"/><circle class="t-acc" cx="40" cy="70" r="6"/>
    <rect class="t-box" x="118" y="12" width="64" height="48" rx="10"/><rect class="t-fill" x="134" y="30" width="32" height="12" rx="3"/>
    <rect class="t-box" x="118" y="80" width="64" height="48" rx="10"/><rect class="t-fill" x="134" y="98" width="32" height="12" rx="3"/>
    <rect class="t-box" x="228" y="46" width="64" height="48" rx="10"/><circle class="t-acc" cx="260" cy="70" r="6"/>
    <path class="t-line" d="M72 70 C95 70 95 36 118 36"/><path class="t-line" d="M72 70 C95 70 95 104 118 104"/>
    <path class="t-line" d="M182 36 C205 36 205 70 228 70"/><path class="t-line" d="M182 104 C205 104 205 70 228 70"/>
  </svg>`,
  code: `<svg viewBox="0 0 300 140" role="img" aria-label="Ilustração de símbolos de código">
    <rect class="t-box" x="6" y="6" width="288" height="128" rx="6"/>
    <path class="t-line" d="M104 48 L70 70 L104 92"/><path class="t-line" d="M196 48 L230 70 L196 92"/>
    <path d="M166 40 L134 100" stroke="#14b8a6" stroke-width="3" stroke-linecap="round" fill="none"/>
  </svg>`,
};


function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function linkButton(label, url, extraClass, srLabel) {
  if (url) {
    return `<a class="btn ${extraClass}" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(srLabel)} (abre em nova aba)">${escapeHtml(label)}</a>`;
  }
  return `<span class="btn ${extraClass}" aria-disabled="true">${escapeHtml(label)}</span>`;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.querySelector("noscript")?.remove();

  PROJECTS.forEach((p) => {
    const card = el("article", "project-card reveal");
    const tags = p.tech.map((t) => `<li>${escapeHtml(t)}</li>`).join("");
    card.innerHTML = `
      <div class="project-thumb">${VISUALS[p.visual] || VISUALS.code}</div>
      <div class="project-body">
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.description)}</p>
        <ul class="tags" aria-label="Tecnologias utilizadas">${tags}</ul>
        <div class="project-links">
          ${linkButton("Código", p.code, "btn-ghost", "Ver código de " + p.title)}
          ${p.demo
            ? linkButton(p.demoLabel || "Demonstração", p.demo, "btn-primary", "Ver demonstração de " + p.title)
            : linkButton("Demo em breve", "", "btn-ghost", "")}
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function setupContactInfo() {
  const { email, resumeUrl } = SITE_CONFIG;

  if (email) {
    const li = document.querySelector('[data-contact="email"]');
    document.getElementById("emailLink").href = "mailto:" + email;
    document.getElementById("emailText").textContent = email;
    li.hidden = false;
  }
  if (resumeUrl) {
    const li = document.querySelector('[data-contact="resume"]');
    document.getElementById("resumeLink").href = resumeUrl;
    li.hidden = false;
  }
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("formStatus");

  if (!SITE_CONFIG.email) {
    form.innerHTML = `<h3>Prefere conversar?</h3><p class="muted">Me envie uma mensagem pelo <a href="${SITE_CONFIG.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>`;
    return;
  }

  const rules = {
    fName: { err: "eName", test: (v) => v.trim().length >= 2, msg: "Informe seu nome (mínimo 2 caracteres)." },
    fEmail: { err: "eEmail", test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()), msg: "Informe um e-mail válido." },
    fMsg: { err: "eMsg", test: (v) => v.trim().length >= 10, msg: "Escreva uma mensagem com pelo menos 10 caracteres." },
  };

  function validate(id) {
    const input = document.getElementById(id);
    const rule = rules[id];
    const ok = rule.test(input.value);
    input.closest(".field").classList.toggle("invalid", !ok);
    input.setAttribute("aria-invalid", String(!ok));
    document.getElementById(rule.err).textContent = ok ? "" : rule.msg;
    return ok;
  }

  Object.keys(rules).forEach((id) => {
    document.getElementById(id).addEventListener("blur", () => validate(id));
    document.getElementById(id).addEventListener("input", () => {
      if (document.getElementById(id).closest(".field").classList.contains("invalid")) validate(id);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const allOk = Object.keys(rules).map(validate).every(Boolean);
    if (!allOk) {
      status.textContent = "";
      form.querySelector(".invalid input, .invalid textarea")?.focus();
      return;
    }
    const name = document.getElementById("fName").value.trim();
    const from = document.getElementById("fEmail").value.trim();
    const msg = document.getElementById("fMsg").value.trim();
    const subject = encodeURIComponent("Contato pelo portfólio - " + name);
    const body = encodeURIComponent(msg + "\n\n—\n" + name + "\n" + from);
    status.textContent = "Abrindo seu aplicativo de e-mail…";
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  });
}

function setupNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  const close = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });


  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && map.has(en.target.id)) {
          links.forEach((l) => l.classList.remove("active"));
          map.get(en.target.id).classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  items.forEach((i) => io.observe(i));
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderProjects();
  setupContactInfo();
  setupContactForm();
  setupNav();
  setupReveal();
});
