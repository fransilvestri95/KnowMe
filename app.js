/* =========================================================
   DATOS EDITABLES
   Para cambiar textos, editá este bloque. Cada texto tiene
   su versión en español (es) y en inglés (en).
   ========================================================= */
const LINKS = {
  /* El mail se arma acá (no aparece escrito en el HTML) para que los bots de spam no lo levanten */
  email: ["fransilvestri95", "gmail.com"].join("@"),
  linkedin: "https://www.linkedin.com/in/francosilvestri95/",
  /* Archivos para descargar: van en la carpeta "cv" con el MISMO nombre que en Drive */
  docs: {
    es: { cv: "cv/CV FRANCO SILVESTRI 2026 (esp).pdf", letter: "cv/Carta - Franco Silvestri 2026.pdf" },
    en: { cv: "cv/CV FRANCO SILVESTRI 2026 (eng).pdf", letter: "cv/Letter - Franco Silvestri 2026.pdf" }
  }
};

const SECTIONS = ["perfil","experiencia","logros","voluntariado","educacion","skills","idiomas"];

/* Colores de cada empresa: c1 = color de marca, c2 = versión intensa.
   Imágenes opcionales: img/<id>.jpg (edificio) e img/<id>-logo.png (logo). */
const COMPANIES = {
  pwc:       { name:"PwC",                    c1:"#D04A02", c2:"#9C3500", logoH:34, art:"img/pwc-edificio.jpg" },
  accenture: { name:"Accenture",              c1:"#A100FF", c2:"#6E00B8", logoH:26, art:"img/accenture-edificio.jpg" },
  up:        { name:"Universidad de Palermo", c1:"#2B2B2B", c2:"#000000", logoH:58 },
  havanna:   { name:"Havanna",                c1:"#CE1436", c2:"#8F0E26", logoH:32, accent:"#FED129" }
};

const T = {
es: {
  nav:{perfil:"Perfil",experiencia:"Experiencia",logros:"Logros",voluntariado:"Voluntariado",educacion:"Educación",skills:"Skills",idiomas:"Idiomas"},
  ui:{contact:"Contacto",sendMail:"Enviar un mail",copyMail:"Copiar mail",copied:"Mail copiado",linkedinSub:"Ver perfil",download:"Descargar CV",docCv:"CV",docLetter:"Carta",docCvShort:"CV (PDF)",docLetterShort:"Carta (PDF)",menu:"Abrir menú",writeMe:"Escribime",backTop:"Volver arriba ↑",skills:"Skills",current:"Actual"},
  hero:{
    lead:"Profesional de RRHH con experiencia en staffing, workforce planning, people analytics, administración de personal y automatización con Excel/Power BI.",
    langs:"Español nativo · Inglés C1",
    cardStatTitle:"−14 h/mes",
    cardStat:"con automatizaciones en Excel y Power BI"
  },
  ticker:["Business Partnering","Workforce Planning","People Analytics","Performance Management","Employee Engagement","Administración de personal","Power BI","Workday","Copilot Studio","Recruiting"],
  profile:{
    title:"Socio estratégico de líderes, con foco en datos y procesos.",
    text:"Profesional de RRHH con experiencia funcionando como socio estratégico (business partner) de líderes y stakeholders globales, combinando Workforce Planning, gestión de performance, People Analytics y employee engagement. Colaboro en la planificación de talento en todos los niveles, desde pasantes hasta Managers y Directores, impulso decisiones basadas en datos con dashboards de Power BI, y lidero iniciativas de cultura, reconocimiento y capacitación técnica dentro del equipo. Experiencia adicional en recruiting, capacitación, HRIS (Workday) y coordinación de equipos multidisciplinarios y globales."
  },
  focus:[
    {ic:"users", t:"Business Partnering y Workforce Planning", d:"Planificación de talento en todos los niveles, junto a managers y Engagement Managers."},
    {ic:"chart", t:"People Analytics y automatización", d:"Dashboards en Power BI, herramientas en Excel/VBA y un bot en Copilot Studio."},
    {ic:"file",  t:"Administración de personal", d:"Carga de horas, calendarios y novedades: vacaciones, licencias y ausencias."},
    {ic:"spark", t:"Cultura y engagement", d:"Planes de reconocimiento, eventos de equipo y capacitaciones internas."}
  ],
  exp:{title:"Experiencia profesional", lead:"Tocá «Skills» en cada rol para ver las habilidades que desarrollé ahí."},
  jobs:[
    { id:"pwc", current:true, company:"PwC · Acceleration Center", role:"Staffing & Deployment Senior Associate", dates:"Dic 2024 — Actualidad",
      about:"Red global de servicios profesionales (auditoría, impuestos y consultoría). Desde el Acceleration Center de Buenos Aires trabajo con equipos de PwC en Estados Unidos.",
      bullets:[
        "Socio estratégico de los Engagement Managers en la asignación de recursos de EE. UU., con seguimiento semanal de disponibilidad, horas y utilización.",
        "Ownership del workforce planning de pasantes y niveles iniciales, con reuniones de bienvenida y seguimiento 1:1; colaboro con mi manager en la planificación de Managers y Directores.",
        "Punto de contacto de RRHH para carga de horas, calendarios de proyectos y novedades (vacaciones, licencias).",
        "Planes de mejora de performance, 1:1 de feedback y desarrollo, y participación en evaluaciones de desempeño y promociones.",
        "Análisis de KPIs de utilización y acciones correctivas junto a los managers."
      ],
      skills:["Business Partnering","Workforce Planning","Staffing & Deployment","Performance Management","Employee Relations","Administración de personal","People Analytics","KPIs de utilización","Power BI","Excel VBA","Copilot Studio","Stakeholder Management"] },
    { id:"accenture", company:"Accenture", role:"Talent Architecture Analyst", dates:"Sep 2022 — Nov 2024",
      about:"Compañía global de servicios profesionales especializada en tecnología, consultoría y operaciones.",
      bullets:[
        "Administración del catálogo global de roles en Workday: descripciones, skills, niveles y metadatos.",
        "Dashboard en Power BI para el equipo de Talent y HRBPs, que reemplazó las actualizaciones de roles en slides.",
        "Product Owner/Scrum: alcance, backlog, user stories, sprints y ceremonias.",
        "Recruiting (screening y entrevistas) y diseño y dictado de capacitaciones; orador en talleres de Skill Management.",
        "Estandarización de procesos y SOPs, y soporte funcional de Workday a stakeholders globales."
      ],
      skills:["Workday HCM","Role Catalog","Power BI","Power Query","Excel VBA","Product Owner","Scrum","Azure DevOps","Recruiting","Facilitación de capacitaciones","SOPs","Stakeholders globales"] },
    { id:"up", company:"Fundación Universidad de Palermo", role:"Administrativo Senior", dates:"Feb 2019 — Ago 2022",
      about:"Institución universitaria privada con sede en la Ciudad de Buenos Aires.",
      bullets:[
        "Encargado de sede: onboarding, capacitación y coaching de asesores; cobertura operativa.",
        "Referente de Front Service y del Departamento de Alumnos; gestión end-to-end de casos y escalaciones.",
        "Coordinación de trámites académicos y gestiones ante el Ministerio de Educación.",
        "Auditoría de documentación y legajos, cumplimiento normativo, y tesorería."
      ],
      skills:["Onboarding","Coaching","Liderazgo de equipo","Gestión de casos","Atención al cliente","Compliance","Administración de legajos","Tesorería"] },
    { id:"havanna", company:"Havanna", role:"Vendedor", dates:"Ene 2017 — May 2018",
      about:"Marca argentina de alfajores y cafeterías.",
      bullets:[
        "Atención al cliente y ventas en salón.",
        "Manejo de caja y cobro a clientes.",
        "Exhibición y mantenimiento de productos."
      ],
      skills:["Atención al cliente","Ventas","Manejo de caja","Exhibición de productos"] }
  ],
  wins:{title:"Logros con métricas", lead:"Herramientas que construí para que el equipo trabaje con datos y dedique menos tiempo a tareas manuales."},
  stats:[
    {n:"14", u:"h/mes", d:"ahorradas con automatizaciones propias en Excel y Power BI."},
    {n:"3", u:"", d:"dashboards de Power BI creados para Partners, managers y HRBPs."},
    {n:"1", u:"bot", d:"en Copilot Studio que responde consultas y arma reportes de staffing."},
    {n:"Pasantes → Directores", u:"", text:true, d:"niveles que abarca el workforce planning en el que participo."}
  ],
  winsList:[
    {tag:"Excel · VBA", delta:"−10 h/mes", t:"Asignación automática de recursos", d:"Herramienta con macros que asigna automáticamente recursos a proyectos de clientes."},
    {tag:"Power BI", delta:"−4 h/mes", t:"Sugerencia de proyectos", d:"Dashboard y base de datos que sugieren proyectos según las horas libres de cada empleado."},
    {tag:"Power BI", t:"Dashboard para Partners", d:"Capacidad, utilización y horas cargadas como insumo para las reuniones de Client Services."},
    {tag:"Copilot Studio", t:"Bot de staffing", d:"Responde consultas del sector y genera reportes y calendarios de staffing en Excel."},
    {tag:"Workday · Power BI", t:"Buscador del catálogo de roles", d:"En Accenture: reemplazó las slides de actualizaciones de roles para el equipo global de Talent y HRBPs."},
    {tag:"Power Up Crew", t:"Plan de reconocimiento anual", d:"Creé el plan y su evento de cierre de año fiscal, donde fui el host."}
  ],
  vol:{title:"Impacto más allá de mi rol", lead:"Iniciativas voluntarias en las que participé por fuera de mis responsabilidades formales."},
  volunteer:[
    { id:"pwc", art:"img/vol-pwc.jpg", current:true, role:"Power Up Crew", company:"PwC · Voluntariado interno",
      about:"Programa voluntario de PwC en el que participo en dos equipos, por fuera de mi rol.",
      groups:[
        {h:"Bonding & Recognition", items:[
          "Organización de punta a punta de eventos: cumpleaños in office, bonding virtual con el equipo de México y encuentros presenciales.",
          "Coordinación de un equipo de voluntarios junior y gestión de proveedores.",
          "Presentaciones y calendarios para el directorio; diseño de dinámicas y juegos.",
          "Creación del plan de reconocimiento y su evento anual de cierre de año fiscal, como host."]},
        {h:"Innovation", items:[
          "Referente técnico en Excel y Power BI del equipo de capacitaciones internas de People.",
          "Diseño de un calendario de formación progresivo, de inicial a avanzado, con materiales de práctica, y organización de las clases."]}
      ],
      skills:["Gestión de eventos","Gestión de proveedores","Programas de reconocimiento","Liderazgo de voluntarios","Diseño instruccional","Capacitación en Excel y Power BI","Comunicación ejecutiva"] },
    { id:"accenture", art:"img/vol-accenture.jpg", role:"Recruiter voluntario", company:"Accenture · Voluntariado corporativo",
      about:"Voluntariado junto a ONGs que capacitan a personas en programación.",
      bullets:[
        "Reclutamiento de participantes para los programas de formación en programación de ONGs aliadas.",
        "Revisión de postulaciones y entrevistas a candidatos."],
      skills:["Recruiting","Screening de CVs","Entrevistas","Trabajo con ONGs","Impacto social"] }
  ],
  edu:{title:"Educación y cursos", degree:"Licenciatura en Recursos Humanos", status:"Cursando las últimas materias", progress:"Avance de la carrera", courses:"Cursos"},
  courses:[
    {n:"Excel Avanzado y Power BI", o:"Educación IT", d:"2024"},
    {n:"Scrum Master", o:"Scrum.org y Accenture", d:"2023"},
    {n:"Diversidad, Equidad e Inclusión", o:"Universidad de los Andes (Colombia) · Coursera", d:"2020"}
  ],
  skills:{title:"Lo que sé hacer"},
  skillGroups:[
    {ic:"users", t:"Recursos Humanos", items:["Business Partnering","Workforce Planning","Staffing & Deployment","Performance Management","Employee Relations","Employee Engagement","Programas de reconocimiento","Administración de personal","Recruiting","Capacitación y diseño instruccional"]},
    {ic:"chart", t:"Datos y automatización", items:["Excel","Power BI","Power Query","VBA / Macros","Power Pivot","Data Cleaning","Dashboards","SharePoint"]},
    {ic:"cpu",   t:"HRIS e IA", items:["Workday HCM","Role Catalog","Copilot Studio","ChatGPT / Codex","Claude","Azure DevOps","WordPress"]},
    {ic:"flag",  t:"Metodologías y habilidades", items:["Agile / Scrum","Product Owner","Backlog Management","Stakeholder Management","Comunicación ejecutiva","Gestión de eventos","Gestión de proveedores","Equipos virtuales globales"]}
  ],
  langs:{title:"Idiomas"},
  langList:[
    {n:"Español", lvl:"Nativo", bars:5, certs:[]},
    {n:"Inglés", lvl:"Avanzado · C1", bars:4, certs:["EF Exam — nivel C1 (2025)","First Certificate, Cambridge — B2 (2014)"]}
  ],
  contactBand:{title:"Hablemos", text:"Escribime por mail o por LinkedIn. También podés descargar mi CV y mi carta de presentación en PDF."}
},

en: {
  nav:{perfil:"Profile",experiencia:"Experience",logros:"Impact",voluntariado:"Volunteering",educacion:"Education",skills:"Skills",idiomas:"Languages"},
  ui:{contact:"Contact",sendMail:"Send an email",copyMail:"Copy email",copied:"Email copied",linkedinSub:"View profile",download:"Download CV",docCv:"CV",docLetter:"Cover letter",docCvShort:"CV (PDF)",docLetterShort:"Cover letter (PDF)",menu:"Open menu",writeMe:"Email me",backTop:"Back to top ↑",skills:"Skills",current:"Current"},
  hero:{
    lead:"HR professional with experience in staffing, workforce planning, people analytics, personnel administration and Excel/Power BI automation.",
    langs:"Native Spanish · English C1",
    cardStatTitle:"−14 h/month",
    cardStat:"saved with Excel & Power BI automations"
  },
  ticker:["Business Partnering","Workforce Planning","People Analytics","Performance Management","Employee Engagement","Personnel administration","Power BI","Workday","Copilot Studio","Recruiting"],
  profile:{
    title:"A strategic partner to leaders, with a focus on data and process.",
    text:"HR professional experienced in acting as a strategic business partner to leaders and global stakeholders, combining Workforce Planning, performance management, People Analytics, and employee engagement. I collaborate on talent planning across all levels, from interns to Managers and Directors, drive data-informed decisions through Power BI dashboards, and lead culture, recognition, and technical training initiatives within the team. Additional experience in recruiting, training, HRIS (Workday), and coordination of multidisciplinary, global teams."
  },
  focus:[
    {ic:"users", t:"Business Partnering & Workforce Planning", d:"Talent planning across all levels, together with managers and Engagement Managers."},
    {ic:"chart", t:"People Analytics & automation", d:"Power BI dashboards, Excel/VBA tools, and a Copilot Studio bot."},
    {ic:"file",  t:"Personnel administration", d:"Time-tracking, calendars, and leave management: vacations, leaves, and absences."},
    {ic:"spark", t:"Culture & engagement", d:"Recognition plans, team events, and internal training."}
  ],
  exp:{title:"Professional experience", lead:"Tap “Skills” on each role to see the skills I built there."},
  jobs:[
    { id:"pwc", current:true, company:"PwC · Acceleration Center", role:"Staffing & Deployment Senior Associate", dates:"Dec 2024 — Present",
      about:"Global network of professional services firms (audit, tax, and consulting). From the Buenos Aires Acceleration Center, I work with PwC teams in the United States.",
      bullets:[
        "Strategic partner to Engagement Managers on the allocation of U.S. resources, with weekly tracking of availability, hours, and utilization.",
        "Ownership of workforce planning for interns and entry-level employees, with welcome meetings and 1:1 check-ins; I work with my manager on planning for Managers and Directors.",
        "HR point of contact for time-tracking, project calendars, and leave management (vacations, leaves of absence).",
        "Performance improvement plans, 1:1 feedback and development meetings, and participation in performance reviews and promotions.",
        "Utilization KPI analysis and corrective actions together with managers."
      ],
      skills:["Business Partnering","Workforce Planning","Staffing & Deployment","Performance Management","Employee Relations","Personnel administration","People Analytics","Utilization KPIs","Power BI","Excel VBA","Copilot Studio","Stakeholder Management"] },
    { id:"accenture", company:"Accenture", role:"Talent Architecture Analyst", dates:"Sep 2022 — Nov 2024",
      about:"Global professional services company specializing in technology, consulting, and operations.",
      bullets:[
        "Managed the global role catalog in Workday: descriptions, skills, levels, and metadata.",
        "Built a Power BI dashboard for the Talent and HRBP team that replaced slide-based role updates.",
        "Product Owner/Scrum: scope, backlog, user stories, sprints, and ceremonies.",
        "Recruiting (screening and interviews) and training design and delivery; speaker in Skill Management workshops.",
        "Process standardization and SOPs, plus Workday functional support for global stakeholders."
      ],
      skills:["Workday HCM","Role Catalog","Power BI","Power Query","Excel VBA","Product Owner","Scrum","Azure DevOps","Recruiting","Training facilitation","SOPs","Global stakeholders"] },
    { id:"up", company:"Fundación Universidad de Palermo", role:"Senior Administrative Associate", dates:"Feb 2019 — Aug 2022",
      about:"Private university based in the City of Buenos Aires.",
      bullets:[
        "Site Manager: onboarding, training, and coaching of advisors; operational coverage.",
        "Point of contact for Front Service and the Student Department; end-to-end case and escalation management.",
        "Coordinated academic procedures and liaised with the Ministry of Education.",
        "Audited documentation and records, ensured regulatory compliance, and handled treasury."
      ],
      skills:["Onboarding","Coaching","Team leadership","Case management","Customer service","Compliance","Records management","Treasury"] },
    { id:"havanna", company:"Havanna", role:"Seller", dates:"Jan 2017 — May 2018",
      about:"Argentine brand of alfajores and coffee shops.",
      bullets:[
        "Customer service and sales on the shop floor.",
        "Cash handling and customer payments.",
        "Product display and upkeep."
      ],
      skills:["Customer service","Sales","Cash handling","Product display"] }
  ],
  wins:{title:"Measurable impact", lead:"Tools I built so the team can work with data and spend less time on manual tasks."},
  stats:[
    {n:"14", u:"h/month", d:"saved through my own Excel and Power BI automations."},
    {n:"3", u:"", d:"Power BI dashboards built for Partners, managers, and HRBPs."},
    {n:"1", u:"bot", d:"in Copilot Studio that answers questions and builds staffing reports."},
    {n:"Interns → Directors", u:"", text:true, d:"the levels covered by the workforce planning I take part in."}
  ],
  winsList:[
    {tag:"Excel · VBA", delta:"−10 h/mo", t:"Automatic resource allocation", d:"Macro-based tool that automatically assigns resources to client projects."},
    {tag:"Power BI", delta:"−4 h/mo", t:"Project suggestions", d:"Dashboard and database that suggest projects based on each employee's free hours."},
    {tag:"Power BI", t:"Partners dashboard", d:"Capacity, utilization, and logged hours as input for Client Services meetings."},
    {tag:"Copilot Studio", t:"Staffing bot", d:"Answers team questions and generates staffing reports and calendars in Excel."},
    {tag:"Workday · Power BI", t:"Role catalog search", d:"At Accenture: replaced slide-based role updates for the global Talent and HRBP team."},
    {tag:"Power Up Crew", t:"Annual recognition plan", d:"Created the plan and its fiscal year-end event, which I hosted."}
  ],
  vol:{title:"Impact beyond my role", lead:"Volunteer initiatives I took part in outside my formal responsibilities."},
  volunteer:[
    { id:"pwc", art:"img/vol-pwc.jpg", current:true, role:"Power Up Crew", company:"PwC · Internal volunteering",
      about:"PwC volunteer program where I take part in two teams, outside my day-to-day role.",
      groups:[
        {h:"Bonding & Recognition", items:[
          "End-to-end event organization: in-office birthdays, virtual bonding with the Mexico team, and in-person gatherings.",
          "Coordinating a team of junior volunteers and managing vendors.",
          "Presentations and calendars for leadership; designing activities and games.",
          "Created the recognition plan and its annual fiscal year-end event, as host."]},
        {h:"Innovation", items:[
          "Technical lead on Excel and Power BI for the People team's internal training program.",
          "Designed a progressive training calendar, from beginner to advanced, with practice materials, and organized the classes."]}
      ],
      skills:["Event management","Vendor management","Recognition programs","Volunteer leadership","Instructional design","Excel & Power BI training","Executive communication"] },
    { id:"accenture", art:"img/vol-accenture.jpg", role:"Volunteer Recruiter", company:"Accenture · Corporate volunteering",
      about:"Volunteering with NGOs that train people in programming.",
      bullets:[
        "Recruited participants for partner NGOs' programming training programs.",
        "Reviewed applications and interviewed candidates."],
      skills:["Recruiting","CV screening","Interviewing","NGO partnerships","Social impact"] }
  ],
  edu:{title:"Education & courses", degree:"Bachelor's Degree in Human Resources", status:"Final courses in progress", progress:"Degree progress", courses:"Courses"},
  courses:[
    {n:"Advanced Excel & Power BI", o:"Educación IT", d:"2024"},
    {n:"Scrum Master", o:"Scrum.org & Accenture", d:"2023"},
    {n:"Diversity, Equity and Inclusion", o:"Universidad de los Andes (Colombia) · Coursera", d:"2020"}
  ],
  skills:{title:"What I work with"},
  skillGroups:[
    {ic:"users", t:"Human Resources", items:["Business Partnering","Workforce Planning","Staffing & Deployment","Performance Management","Employee Relations","Employee Engagement","Recognition programs","Personnel administration","Recruiting","Training & instructional design"]},
    {ic:"chart", t:"Data & automation", items:["Excel","Power BI","Power Query","VBA / Macros","Power Pivot","Data Cleaning","Dashboards","SharePoint"]},
    {ic:"cpu",   t:"HRIS & AI", items:["Workday HCM","Role Catalog","Copilot Studio","ChatGPT / Codex","Claude","Azure DevOps","WordPress"]},
    {ic:"flag",  t:"Methods & soft skills", items:["Agile / Scrum","Product Owner","Backlog Management","Stakeholder Management","Executive communication","Event management","Vendor management","Global virtual teams"]}
  ],
  langs:{title:"Languages"},
  langList:[
    {n:"Spanish", lvl:"Native", bars:5, certs:[]},
    {n:"English", lvl:"Advanced · C1", bars:4, certs:["EF Exam — C1 level (2025)","First Certificate, Cambridge — B2 (2014)"]}
  ],
  contactBand:{title:"Let's talk", text:"Reach out by email or LinkedIn. You can also download my CV and cover letter as PDFs."}
}
};

/* =========================================================
   Lógica de la página (no hace falta tocar lo de abajo)
   ========================================================= */
const ICONS = {
  users:'<path d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1"/><circle cx="9.5" cy="7.5" r="3.5"/><path d="M21 19v-1a4 4 0 0 0-3-3.9M15.5 4.2a3.5 3.5 0 0 1 0 6.6"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>'
};
const svg = (name) => `<svg class="icon" viewBox="0 0 24 24">${ICONS[name]||""}</svg>`;
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const get = (obj, path) => path.split(".").reduce((o,k)=>o&&o[k], obj);
const hexToRgb = (h) => { const n=parseInt(h.slice(1),16); return `${n>>16&255} ${n>>8&255} ${n&255}`; };

let lang = "es";

function render(){
  const d = T[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-t]").forEach(el => { const v = get(d, el.dataset.t); if (v != null) el.textContent = v; });

  const links = SECTIONS.map(id => `<li><a href="#${id}" data-sec="${id}">${esc(d.nav[id])}</a></li>`).join("");
  document.getElementById("navLinks").innerHTML = links;
  document.getElementById("mobileLinks").innerHTML = links;

  document.getElementById("focus").innerHTML = d.focus.map(f => `
    <div class="focus-card"><div class="ic">${svg(f.ic)}</div><h3>${esc(f.t)}</h3><p>${esc(f.d)}</p></div>`).join("");

  const card = (j, key) => {
    const c = COMPANIES[j.id];
    const art = j.art || c.art;
    const list = j.groups
      ? j.groups.map(g => `<p class="group-h">${esc(g.h)}</p><ul>${g.items.map(b => `<li>${esc(b)}</li>`).join("")}</ul>`).join("")
      : `<ul>${j.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>`;
    return `
    <article class="job reveal in${j.art ? " vol" : ""}" data-company="${esc(j.id)}">
      <div class="job-media${art ? " has-art" : ""}">
        ${art ? `<img class="photo art" src="${art}" alt="" loading="lazy">` : ""}
        ${j.art ? "" : `<img class="photo optional" src="img/${esc(j.id)}.jpg" alt="" loading="lazy">`}
        <div class="logo-badge"><img class="optional logo" src="img/${esc(j.id)}-logo.png" alt="${esc(c.name)}"><span class="wordmark">${esc(c.name)}</span></div>
      </div>
      <div class="job-body">
        <div class="job-top">
          ${j.dates ? `<span>${esc(j.dates)}</span>` : ""}
          ${j.current ? `<span class="pill"><span class="live"></span>${esc(d.ui.current)}</span>` : ""}
        </div>
        <h3>${esc(j.role)}</h3>
        <p class="company">${esc(j.company)}</p>
        <p class="about">${esc(j.about)}</p>
        ${list}
        <div class="job-foot">
          <button class="skills-btn" type="button" aria-expanded="false" aria-controls="sk-${key}">
            ${esc(d.ui.skills)} <span class="count">${j.skills.length}</span>
            <svg class="icon chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
          </button>
        </div>
        <div class="skills-panel" id="sk-${key}" aria-hidden="true"><div><div class="chips">${j.skills.map(s => `<span class="chip">${esc(s)}</span>`).join("")}</div></div></div>
      </div>
    </article>`;
  };
  document.getElementById("jobs").innerHTML = d.jobs.map((j, i) => card(j, "j" + i)).join("");
  document.getElementById("vol").innerHTML = d.volunteer.map((j, i) => card(j, "v" + i)).join("");

  document.querySelectorAll(".jobs .job").forEach(el => {
    const c = COMPANIES[el.dataset.company]; if (!c) return;
    el.style.setProperty("--c1", c.c1);
    el.style.setProperty("--c1-rgb", hexToRgb(c.c1));
    el.style.setProperty("--c2", c.c2);
    if (c.accent) el.style.setProperty("--acc", c.accent);
    const logo = el.querySelector(".logo"); if (logo) logo.style.height = (c.logoH || 30) + "px";
  });
  const tk = document.getElementById("ticker");
  if (tk) {
    const group = () => { const g = document.createElement("div"); g.className = "ticker-group";
      d.ticker.forEach(t => { const sp = document.createElement("span"); sp.textContent = t; g.appendChild(sp); }); return g; };
    tk.replaceChildren(group(), group());
  }
  document.getElementById("stats").innerHTML = d.stats.map(s => `
    <div class="stat"><div class="num${s.text ? " text" : ""}">${esc(s.n)}${s.u ? ` <small>${esc(s.u)}</small>` : ""}</div><p>${esc(s.d)}</p></div>`).join("");

  document.getElementById("wins").innerHTML = d.winsList.map(w => `
    <div class="win"><div class="win-top"><span class="tag">${esc(w.tag)}</span>${w.delta ? `<span class="delta">${esc(w.delta)}</span>` : ""}</div><h3>${esc(w.t)}</h3><p>${esc(w.d)}</p></div>`).join("");

  document.getElementById("edu").innerHTML = `
    <div class="card">
      <span class="dates">2022 — 2026</span>
      <h3 class="edu-title">${esc(d.edu.degree)}</h3>
      <p class="sub">Universidad Argentina de la Empresa (UADE)</p>
      <div class="progress">
        <div class="progress-bar"><span></span></div>
        <div class="progress-label"><span>${esc(d.edu.progress)}</span><span>${esc(d.edu.status)}</span></div>
      </div>
    </div>
    <div class="card">
      <h3 class="courses-title">${esc(d.edu.courses)}</h3>
      ${d.courses.map(c => `<div class="course"><b>${esc(c.n)}</b><span>${esc(c.o)}</span><span class="dates">${esc(c.d)}</span></div>`).join("")}
    </div>`;

  document.getElementById("skillGroups").innerHTML = d.skillGroups.map(g => `
    <div class="card skill-group"><h3><span class="ic">${svg(g.ic)}</span>${esc(g.t)}</h3><div class="chips">${g.items.map(s => `<span class="chip">${esc(s)}</span>`).join("")}</div></div>`).join("");

  document.getElementById("langs").innerHTML = d.langList.map(l => `
    <div class="card">
      <div class="lang-card"><h3>${esc(l.n)}</h3><span class="level">${esc(l.lvl)}</span></div>
      <div class="meter" aria-hidden="true">${[1,2,3,4,5].map(n => `<i class="${n <= l.bars ? "on" : ""}"></i>`).join("")}</div>
      ${l.certs.length ? `<ul class="lang-certs">${l.certs.map(c => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}
    </div>`).join("");

  const docs = LINKS.docs[lang];
  [["cv", docs.cv], ["letter", docs.letter]].forEach(([k, path]) => {
    const name = path.split("/").pop();
    document.querySelectorAll(".doc-" + k).forEach(a => { a.href = encodeURI(path); a.setAttribute("download", name); });
    document.querySelectorAll(".fname-" + k).forEach(el => el.textContent = name);
  });
  document.querySelectorAll(".linkedin").forEach(a => a.href = LINKS.linkedin);
  document.querySelectorAll(".mailto").forEach(a => a.href = "mailto:" + LINKS.email);
  document.querySelectorAll(".email-text").forEach(el => el.textContent = LINKS.email);
  wireOptionalImages(document);
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  document.querySelectorAll(".lang").forEach(g => g.setAttribute("aria-label", lang === "es" ? "Idioma" : "Language"));
  document.title = lang === "es" ? "Franco Silvestri · CV" : "Franco Silvestri · Resume";
  updateActive(currentSection);
}

function setLang(l){
  lang = l;
  try { localStorage.setItem("cv-lang", l); } catch (e) {}
  const url = new URL(location.href); url.searchParams.set("lang", l);
  try { history.replaceState(null, "", url); } catch (e) {}
  render();
}

/* Idioma inicial: ?lang=en en el link > última elección > idioma del navegador */
(function initLang(){
  const q = new URLSearchParams(location.search).get("lang");
  let saved = null; try { saved = localStorage.getItem("cv-lang"); } catch (e) {}
  const nav = (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
  lang = (q === "en" || q === "es") ? q : (saved === "en" || saved === "es") ? saved : nav;
})();

/* Imágenes opcionales (foto, logos, fotos de empresas): si no existen, se ocultan sin romper nada */
function wireOptionalImages(root){
  root.querySelectorAll("img.optional").forEach(img => {
    if (img.dataset.wired) return; img.dataset.wired = "1";
    const fail = () => { const badge = img.closest(".logo-badge"); if (badge) badge.classList.add("no-img"); img.remove(); };
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) fail();
    else img.addEventListener("error", fail, { once: true });
  });
}

document.documentElement.classList.add("js");
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

/* Botón Skills de cada experiencia */
document.querySelectorAll(".jobs").forEach(list => list.addEventListener("click", (e) => {
  const btn = e.target.closest(".skills-btn"); if (!btn) return;
  const job = btn.closest(".job");
  const open = !job.classList.contains("open");
  job.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", String(open));
  job.querySelector(".skills-panel").setAttribute("aria-hidden", String(!open));
}));

/* Menús desplegables (Contacto y Descargar) */
const dropdowns = [...document.querySelectorAll(".dropdown")];
function closeDropdowns(except){
  dropdowns.forEach(d => { if (d !== except) { d.classList.remove("open"); d.querySelector(":scope > button").setAttribute("aria-expanded","false"); } });
}
dropdowns.forEach(d => {
  const b = d.querySelector(":scope > button");
  b.addEventListener("click", (e) => { e.stopPropagation(); const o = !d.classList.contains("open"); closeDropdowns(d); d.classList.toggle("open", o); b.setAttribute("aria-expanded", String(o)); });
  d.querySelectorAll(".dropdown-menu a").forEach(a => a.addEventListener("click", () => closeDropdowns()));
});
document.addEventListener("click", (e) => { if (!e.target.closest(".dropdown")) closeDropdowns(); });

/* Menú mobile */
const header = document.querySelector(".site-header"), menuBtn = document.getElementById("menuToggle");
menuBtn.addEventListener("click", () => { const o = !header.classList.contains("menu-open"); header.classList.toggle("menu-open", o); menuBtn.setAttribute("aria-expanded", String(o)); });
document.getElementById("mobilePanel").addEventListener("click", (e) => { if (e.target.closest("a")) { header.classList.remove("menu-open"); menuBtn.setAttribute("aria-expanded","false"); } });

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  closeDropdowns();
  header.classList.remove("menu-open"); menuBtn.setAttribute("aria-expanded","false");
});

/* Copiar mail */
const toast = document.getElementById("toast");
function showToast(msg){ toast.textContent = msg; toast.classList.add("show"); clearTimeout(showToast.t); showToast.t = setTimeout(() => toast.classList.remove("show"), 1800); }
document.querySelector(".copy-mail").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(LINKS.email); }
  catch (e) { const t = document.createElement("textarea"); t.value = LINKS.email; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); } catch (_) {} t.remove(); }
  showToast(T[lang].ui.copied);
  closeDropdowns();
});

/* Sección activa en el menú */
let currentSection = null;
function updateActive(id){
  currentSection = id;
  document.querySelectorAll("[data-sec]").forEach(a => a.classList.toggle("active", a.dataset.sec === id));
}
const spy = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) updateActive(en.target.id); });
}, { rootMargin: "-40% 0px -55% 0px" });
SECTIONS.forEach(id => { const s = document.getElementById(id); if (s) spy.observe(s); });

/* Animación suave al aparecer */
const rev = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); } });
}, { rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".reveal:not(.in)").forEach(el => rev.observe(el));

render();
