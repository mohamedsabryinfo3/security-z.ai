/* ============================================================
   Security+ Arabic Study Hub — App Logic
   عرض البيانات + التوجيه + التفاعلات (Vanilla JS)
   ============================================================ */
"use strict";

/* ---------- أدوات مساعدة ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const esc = (s) => String(s ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

function fmtDur(sec) {
  sec = Math.max(0, sec | 0);
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  const mm = String(m).padStart(2, "0"), ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

/* ---------- أيقونات ---------- */
const IC = {
  star: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z"/></svg>',
  adjust: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6.5 3.8"/></svg>',
  clock: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  x: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  check: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5 5L20 6.5"/></svg>',
  play: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86a1 1 0 0 0-1.5.86z"/></svg>',
  flask: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.5L4.6 19a2 2 0 0 0 1.8 3h11.2a2 2 0 0 0 1.8-3L14 9.5V2"/><path d="M8.5 2h7M7 16h10"/></svg>',
  ext: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>',
  chev: '<svg class="chev" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  trophy: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21 1.18.54 2.03 2.03 2.03 3.79M18 2H6v7a6 6 0 0 0 12 0z"/></svg>',
  zap: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  library: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 6l4 14M12 6v14M8 8v12M4 4v16"/></svg>',
  target: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>',
  archive: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4"/></svg>',
  sun: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>',
  moon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>',
  film: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 9h5M2 15h5M17 9h5M17 15h5"/></svg>',
  info: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  eye: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  plus: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
};

const ROLE_ICON = { trophy: IC.trophy, zap: IC.zap, library: IC.library, target: IC.target, archive: IC.archive };

/* ---------- حالة التطبيق ---------- */
const ST = {
  imp: { label: "مهم", cls: "b-imp", icon: IC.star, seg: "seg-imp" },
  med: { label: "متوسط", cls: "b-med", icon: IC.adjust, seg: "seg-med" },
  later: { label: "فيما بعد", cls: "b-later", icon: IC.clock, seg: "seg-later" },
  skip: { label: "غير مهم", cls: "b-skip", icon: IC.x, seg: "seg-skip" },
};
const SHORT = { p5: "Netriders", p1: "Ahmad Al-Mashaikh", p3: "م. حسن صالح", p4: "م. محمد علوي", p2: "Mohamed hosseny" };
const PLID = Object.fromEntries(DATA.playlists.map(p => [p.key, p.url.split("list=")[1]]));
const DOM_NAMES = Object.fromEntries(DATA.domains.map(d => [d.id, d.name]));
const CHAPTER_BY_N = Object.fromEntries(DATA.chapters.map(c => [c.n, c]));

const state = {
  view: "home",
  pri: "all",
  dom: "all",
  q: "",
  playlist: "p5",
  plStatus: "all",
  progress: new Set(JSON.parse(localStorage.getItem("sph-progress") || "[]")),
  homeCounted: false,
};

const ytUrl = (id, pl) => `https://www.youtube.com/watch?v=${id}&list=${PLID[pl]}`;

/* ---------- الوضع الليلي ---------- */
function applyTheme(t) {
  document.documentElement.classList.toggle("dark", t === "dark");
  $("#theme-icon").innerHTML = t === "dark" ? IC.sun : IC.moon;
  localStorage.setItem("sph-theme", t);
}
applyTheme(localStorage.getItem("sph-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("#theme-btn").addEventListener("click", () =>
  applyTheme(document.documentElement.classList.contains("dark") ? "light" : "dark"));

/* ---------- قائمة الجوال ---------- */
$("#burger").addEventListener("click", () => {
  const m = $("#mobile-menu");
  m.classList.toggle("hidden");
  m.classList.toggle("flex");
});
$$("#mobile-menu a").forEach(a => a.addEventListener("click", () => {
  $("#mobile-menu").classList.add("hidden");
  $("#mobile-menu").classList.remove("flex");
}));

/* ---------- التوجيه ---------- */
const VIEWS = ["home", "plan", "playlists", "coverage", "schedule", "method"];
function route() {
  const h = (location.hash || "#/home").replace("#/", "").split("?")[0];
  state.view = VIEWS.includes(h) ? h : "home";
  VIEWS.forEach(v => $("#view-" + v).classList.toggle("hidden", v !== state.view));
  $$("#nav-links a, #mobile-menu a").forEach(a =>
    a.classList.toggle("active", a.dataset.view === state.view));
  if (state.view === "home" && !state.homeCounted) { renderHome(); state.homeCounted = true; }
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  observeReveals();
}
addEventListener("hashchange", route);

/* ---------- ظهور تدريجي ---------- */
let io = null;
function observeReveals() {
  if (io) io.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.08 });
  $$(".reveal:not(.in)").forEach(el => io.observe(el));
}

/* ============================================================
   الرئيسية
   ============================================================ */
function renderHome() {
  const s = DATA.stats;
  $("#home-stats").innerHTML = [
    ["260", "فيديو تم تحليله", `${DATA.playlists.length} قوائم · 4 قنوات`],
    [`${s.totalHours}`, "ساعة محتوى إجمالية", "كامل المحتوى المتاح"],
    [`${s.impCount}`, "درساً أساسياً مختاراً", `نحو ${s.impHours} ساعة فقط`],
    [`${s.medCount}`, "درساً مسانداً (متوسط)", `معامل وتطبيق نحو ${s.medHours} ساعة`],
  ].map(([n, l, sub]) => `
    <div class="card card-hover p-4 sm:p-5 text-center reveal">
      <div class="stat-num" data-count="${n}">0</div>
      <div class="text-sm font-bold mt-1">${l}</div>
      <div class="text-[11px] muted mt-0.5 font-medium">${sub}</div>
    </div>`).join("");

  // عدّادات متحركة
  $$("#home-stats .stat-num").forEach(el => {
    const target = parseFloat(el.dataset.count.replace(/[^\d.]/g, "")) || 0;
    const dec = el.dataset.count.includes(".") ? 1 : 0;
    const t0 = performance.now(), dur = 1100;
    (function tick(t) {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * e).toFixed(dec);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = el.dataset.count;
    })(t0);
  });

  // أوزان النطاقات
  $("#domain-bars").innerHTML = DATA.domains.map(d => `
    <div class="reveal">
      <div class="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="dom-chip d-${d.id}">${d.id}</span>
          <span class="font-bold text-sm">${d.name}</span>
        </div>
        <div class="flex items-center gap-2 text-xs muted font-bold">
          <span>الفصول: ${d.chapters.join("، ")}</span>
          <span class="dom-chip d-${d.id} !text-[.72rem]">${d.weight}%</span>
        </div>
      </div>
      <div class="h-3.5 rounded-full overflow-hidden" style="background:var(--border)">
        <div class="h-full rounded-full transition-all duration-1000" style="width:${d.weight * 4}%; background:linear-gradient(90deg,#0891b2,#059669)"></div>
      </div>
      <p class="text-[11px] muted mt-1 font-medium">${d.desc}</p>
    </div>`).join("");

  // بطاقات القوائم
  $("#home-playlists").innerHTML = DATA.playlists.map(p => {
    const st = ST.imp, cnt = p.counts;
    return `
    <div class="card card-hover p-5 reveal flex flex-col gap-3">
      <div class="flex items-start justify-between gap-2">
        <div class="min-w-0">
          <span class="badge ${ST[p.key === 'p5' ? 'imp' : p.key === 'p4' ? 'med' : 'later']} !text-[.75rem]">${ROLE_ICON[p.icon] || ""} ${p.role}</span>
          <h3 class="font-display font-black text-lg mt-2 leading-snug mix" dir="auto">${esc(p.name)}</h3>
          <p class="text-xs muted mt-0.5 font-medium">${esc(p.channel)}</p>
        </div>
      </div>
      <div class="flex items-center gap-1.5 text-[11px] muted font-bold flex-wrap">
        <span class="dur-chip">${p.count} فيديو</span>
        <span class="dur-chip">${p.hours} ساعة</span>
        <span class="dur-chip">${IC.eye} ${p.views}</span>
      </div>
      <div class="seg-bar" title="توزيع الأولويات">
        <div class="seg-imp"   style="width:${cnt.imp / p.count * 100}%"></div>
        <div class="seg-med"   style="width:${cnt.med / p.count * 100}%"></div>
        <div class="seg-later" style="width:${cnt.later / p.count * 100}%"></div>
        <div class="seg-skip"  style="width:${cnt.skip / p.count * 100}%"></div>
      </div>
      <p class="text-sm muted leading-relaxed flex-1">${esc(p.verdict)}</p>
      <a href="#/playlists" class="btn btn-ghost !py-2 !text-sm !rounded-xl w-full mt-auto" data-view="playlists" data-goto-pl="${p.key}">التحليل الكامل للقائمة ${IC.ext}</a>
    </div>`;
  }).join("");

  // تذييل: روابط القوائم
  $("#footer-playlists").innerHTML = DATA.playlists.map(p =>
    `<a href="${p.url}" target="_blank" rel="noopener" class="footer-link flex items-center gap-1.5" dir="auto">${IC.ext} ${esc(p.name)}</a>`).join("");

  bindGotoPl();
  observeReveals();
}

/* فتح قائمة محددة من الرئيسية */
function bindGotoPl() {
  $$("[data-goto-pl]").forEach(a => a.addEventListener("click", () => {
    state.playlist = a.dataset.gotoPl;
    renderPlaylistPanel();
  }));
}

/* ============================================================
   خطة الدراسة
   ============================================================ */
function renderPlan() {
  const list = $("#plan-list");
  const matches = c => {
    if (state.pri !== "all" && c.pri !== state.pri) return false;
    if (state.dom !== "all" && !c.dom.includes(state.dom)) return false;
    if (state.q) {
      const hay = (c.ar + " " + c.en + " " + c.intro + " " + c.keys.join(" ")).toLowerCase();
      if (!hay.includes(state.q.toLowerCase())) return false;
    }
    return true;
  };

  const visible = DATA.chapters.filter(matches);
  $("#plan-empty").classList.toggle("hidden", visible.length > 0);

  list.innerHTML = visible.map(c => {
    const done = state.progress.has(c.n);

    /* شرائح فيديوهات: الأجزاء المتتابعة تُرقَّم وتُجمع مدتها — حتى يتضح أنها تُشاهد كلها بالترتيب وليست نسخاً بديلة */
    const chips = (vids, pk, kind = "sel") => {
      const multi = vids.length > 1;
      const total = vids.reduce((a, v) => a + v.d, 0);
      const hint = multi ? `
      <div class="flex items-center gap-1.5 mt-2 text-[11px] font-black" style="color:#059669">${IC.check} ${kind === "lab" ? "معامل متتابعة" : "سلسلة متتابعة"} — شاهد ${vids.length === 2 ? "الجزأين كليهما" : `الأجزاء الـ${vids.length} كلها`} بالترتيب</div>` : "";
      return `${hint}
      <div class="flex items-center gap-2 flex-wrap ${multi ? "" : "mt-1.5"}">
        ${vids.map((v, i) => `<a class="dur-chip" href="${ytUrl(v.id, pk)}" target="_blank" rel="noopener" style="text-decoration:none" title="${esc(v.t)}">${IC.play} ${multi ? `<b>${i + 1}/${vids.length}</b> · ` : ""}${fmtDur(v.d)}</a>`).join("")}
        ${multi ? `<span class="dur-chip" style="background:rgba(5,150,105,.12); color:#059669; cursor:default" title="مجموع مدة السلسلة كاملة">الإجمالي ${fmtDur(total)}</span>` : ""}
        <span class="text-[11px] muted font-bold">المصدر: ${SHORT[pk]}</span>
      </div>`;
    };

    const selHtml = c.sel.map(s => `
      <div class="vid-row">
        <a class="play-btn" href="${ytUrl(s.vids[0].id, s.p)}" target="_blank" rel="noopener" title="شاهد على يوتيوب">${IC.play}</a>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="badge ${s.role.includes("مكمّل") ? "b-med" : "b-imp"}">${IC.star} ${s.role}</span>
            <a href="${ytUrl(s.vids[0].id, s.p)}" target="_blank" rel="noopener" class="text-sm font-bold hover:underline leading-snug mix" dir="auto" style="color:var(--text-1)">${esc(s.vids[0].t)}</a>
            ${s.vids.length > 1 ? `<span class="dur-chip !text-[.65rem]" style="background:rgba(5,150,105,.12); color:#059669; cursor:default">سلسلة ${s.vids.length} أجزاء</span>` : ""}
          </div>
          ${chips(s.vids, s.p)}
          <p class="text-xs muted mt-1.5 leading-relaxed">${esc(s.why)}</p>
        </div>
      </div>`).join("");

    const labsHtml = c.labs.length ? `
      <div class="mt-3 grid gap-2">
        ${c.labs.map(l => `
        <div class="vid-row !py-2.5">
          <span class="grid place-items-center w-[38px] h-[38px] rounded-xl flex-none" style="background:rgba(245,158,11,.15); color:#b45309">${IC.flask}</span>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="badge b-med">${IC.flask} معمل — متوسط</span>
              <span class="text-[11px] muted font-bold">${SHORT[l.p]}</span>
            </div>
            ${chips(l.vids, l.p, "lab")}
            <p class="text-xs muted mt-1 leading-relaxed">${esc(l.why)}</p>
          </div>
        </div>`).join("")}
      </div>` : "";

    const altsHtml = c.alts.length ? `
      <details class="mt-3 rounded-xl overflow-hidden" style="border:1px dashed var(--border)">
        <summary class="flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-bold" style="color:var(--text-2)">
          <span class="flex items-center gap-2">${IC.clock} بدائل ومراجع احتياطية — ليست ضمن المسار (${c.alts.length})</span>${IC.chev}
        </summary>
        <p class="px-4 pt-2.5 pb-1 text-[11px] leading-relaxed muted font-medium">هذه دروس لنفس الموضوع من مصادر أخرى — افتحها فقط إذا احتجت شرحاً مختلفاً أو مراجعة سريعة، ولا تشاهدها مع الدرس الأساسي.</p>
        <div class="px-4 pb-3 grid gap-2">
          ${c.alts.map(a => `
          <div class="flex items-start gap-2.5 text-xs">
            <span class="badge b-later !text-[.65rem] mt-0.5">${a.role}</span>
            <div class="flex-1">
              <div class="flex items-center gap-1.5 flex-wrap font-bold" style="color:var(--text-1)">
                ${SHORT[a.p]}
                ${a.vids.map((v, i) => `<a class="dur-chip !text-[.65rem]" href="${ytUrl(v.id, a.p)}" target="_blank" rel="noopener" style="text-decoration:none" title="${esc(v.t)}">${a.vids.length > 1 ? `${i + 1}/${a.vids.length} · ` : ""}${fmtDur(v.d)}</a>`).join("")}
                ${a.vids.length > 1 ? `<span class="dur-chip !text-[.65rem]" style="background:rgba(6,182,212,.1); color:#0891b2; cursor:default">الإجمالي ${fmtDur(a.vids.reduce((x, v) => x + v.d, 0))}</span>` : ""}
              </div>
              <p class="muted mt-0.5 leading-relaxed">${esc(a.why)}</p>
            </div>
          </div>`).join("")}
        </div>
      </details>` : "";

    const keysHtml = `
      <div class="key-box mt-4 p-4">
        <h4 class="font-display font-bold text-sm mb-2.5 flex items-center gap-1.5" style="color:var(--primary)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          النقاط الأساسية التي يغطيها الفصل
        </h4>
        <div class="grid sm:grid-cols-2 gap-x-4 gap-y-2">
          ${c.keys.map(k => `<div class="key-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5 5L20 6.5"/></svg><span>${esc(k)}</span></div>`).join("")}
        </div>
      </div>`;

    const cmpHtml = c.cmp.length ? `
      <details class="mt-3 rounded-xl overflow-hidden" style="border:1px dashed var(--border)">
        <summary class="flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-bold" style="color:var(--text-2)">
          <span class="flex items-center gap-2">${IC.target} مقارنة المصادر المتشابهة لهذا الفصل</span>${IC.chev}
        </summary>
        <div class="px-3 pb-3">
          <div class="cmp-row !text-[.72rem] font-black muted">
            <span>القائمة</span><span>المدة</span><span>الحكم</span><span>لماذا؟</span>
          </div>
          ${c.cmp.map(r => {
            const vcls = r.verdict === "مختار" ? "v-win" : ["بديل", "بديل قوي", "تعمق نظري"].includes(r.verdict) ? "v-alt" : ["لاحق", "مكمل لاحق"].includes(r.verdict) ? "v-late" : "v-out";
            return `
          <div class="cmp-row ${r.verdict === "مختار" ? "win" : ""}">
            <span class="font-black text-xs">${SHORT[r.p]}</span>
            <span class="dur-chip !text-[.65rem]">${esc(r.dur)}</span>
            <span class="verdict-chip ${vcls}">${esc(r.verdict)}</span>
            <span class="muted text-xs leading-relaxed">${esc(r.note)}</span>
          </div>`;
          }).join("")}
        </div>
      </details>` : "";

    return `
    <article class="tl-item reveal ${done ? "done" : ""}" id="ch-${c.n}">
      <span class="tl-num">${c.n}</span>
      <div class="card card-hover p-5 sm:p-6">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap mb-2">
              <span class="dom-chip d-${c.dom.split("+")[0]}" title="${c.dom.split("+").map(d => d + ": " + DOM_NAMES[d]).join(" + ")}">${c.dom}</span>
              <span class="badge ${ST[c.pri].cls}">${ST[c.pri].icon} ${ST[c.pri].label}</span>
            </div>
            <h3 class="ch-title font-display font-black text-lg sm:text-xl leading-snug">${esc(c.ar)}</h3>
            <p class="text-[11px] muted mt-1 ltr text-right font-medium" dir="ltr">${esc(c.en)}</p>
          </div>
          <button class="done-btn ${done ? "done" : ""}" data-ch="${c.n}" title="علّم كمنجز" aria-label="علّم الفصل كمنجز">
            ${done ? IC.check : '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5 5L20 6.5"/></svg>'}
          </button>
        </div>
        <p class="text-sm muted leading-relaxed mt-3 font-medium">${esc(c.intro)}</p>
        <div class="mt-4 grid gap-2.5">${selHtml}</div>
        ${labsHtml}
        ${altsHtml}
        ${keysHtml}
        ${cmpHtml}
      </div>
    </article>`;
  }).join("");

  // أزرار الإنجاز
  $$("#plan-list .done-btn").forEach(b => b.addEventListener("click", () => {
    const n = +b.dataset.ch;
    state.progress.has(n) ? state.progress.delete(n) : state.progress.add(n);
    localStorage.setItem("sph-progress", JSON.stringify([...state.progress]));
    updateProgress();
    renderPlan();
  }));

  updateProgress();
  observeReveals();
}

function updateProgress() {
  const n = state.progress.size, total = DATA.chapters.length, pct = Math.round(n / total * 100);
  $("#plan-bar").style.width = pct + "%";
  $("#plan-bar-txt").innerHTML = `<span class="ltr">${n} / ${total}</span>`;
  const C = 100.53;
  $("#ring-fg").style.strokeDashoffset = C - (C * pct / 100);
  $("#ring-txt").textContent = pct + "%";
}

/* فلاتر الخطة */
$("#plan-pri-filters").addEventListener("click", e => {
  const b = e.target.closest("[data-pri]"); if (!b) return;
  state.pri = b.dataset.pri;
  $$("#plan-pri-filters .chip").forEach(c => c.classList.toggle("active", c === b));
  renderPlan();
});
$("#plan-dom-filter").addEventListener("change", e => { state.dom = e.target.value; renderPlan(); });
$("#plan-search").addEventListener("input", e => { state.q = e.target.value.trim(); renderPlan(); });

/* ============================================================
   القوائم الخمس
   ============================================================ */
function renderPlaylistTabs() {
  $("#pl-tabs").innerHTML = DATA.playlists.map(p => `
    <button class="tab-btn ${state.playlist === p.key ? "active" : ""}" data-pl="${p.key}">
      <span style="color:inherit">${ROLE_ICON[p.icon]}</span>
      <span class="mix" dir="auto">${SHORT[p.key]}</span>
      <span class="dur-chip !text-[.65rem] !py-0 !px-1.5 ltr">${p.count}</span>
    </button>`).join("");
  $$("#pl-tabs .tab-btn").forEach(b => b.addEventListener("click", () => {
    state.playlist = b.dataset.pl; state.plStatus = "all";
    renderPlaylistTabs(); renderPlaylistPanel();
  }));
}

function renderPlaylistPanel() {
  const p = DATA.playlists.find(x => x.key === state.playlist);
  const cnt = p.counts;
  const order = ["imp", "med", "later", "skip"];

  const statusChips = `
    <div class="flex items-center gap-1.5 flex-wrap">
      ${["all", ...order].map(s => `
        <button class="chip !text-[.78rem] !py-1.5 ${state.plStatus === s ? "active" : ""}" data-st="${s}">
          ${s === "all" ? "الكل" : `${ST[s].icon} ${ST[s].label}`}
          <span class="text-[.65rem] opacity-70">${s === "all" ? p.count : cnt[s]}</span>
        </button>`).join("")}
    </div>`;

  const p3note = p.key === "p3" ? `
    <div class="rounded-2xl p-4 mb-4 flex items-start gap-3" style="background:rgba(139,92,246,.08); border:1px dashed rgba(139,92,246,.4)">
      <span class="mt-0.5" style="color:#7c3aed">${IC.info}</span>
      <p class="text-sm leading-relaxed font-medium" style="color:var(--text-2)">
        <b style="color:var(--text-1)">لماذا لا توجد اختيارات «مهم» هنا؟</b>
        عناوين هذه القائمة رقمية فقط (محاضرة 1، محاضرة 2...) فلا يمكن مطابقتها بالفصول دون مشاهدتها —
        لذلك لم نخترر منها دروساً أساسية ولم نستبعد أياً منها: القائمة كلها محفوظة <b>كمرجع احتياطي (فيما بعد)</b> —
        عند تعثرك في مفهوم، افتح أقرب محاضرة بالتسلسل أو استخدم البحث داخل قناة المهندس حسن صالح.
      </p>
    </div>` : "";

  const rows = p.videos.filter(v => state.plStatus === "all" || v.st === state.plStatus);

  $("#pl-panel").innerHTML = `
    <div class="card p-5 sm:p-7">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div class="min-w-0">
          <span class="badge ${p.key === "p5" ? "b-imp" : p.key === "p4" ? "b-med" : "b-later"} !text-[.78rem]">${ROLE_ICON[p.icon]} ${p.role}</span>
          <h2 class="font-display font-black text-xl sm:text-2xl mt-2 leading-snug mix" dir="auto">${esc(p.name)}</h2>
          <p class="text-sm muted mt-1 font-medium">${esc(p.channel)}</p>
          <div class="flex items-center gap-1.5 mt-3 flex-wrap">
            <span class="dur-chip">${IC.film} ${p.count} فيديو</span>
            <span class="dur-chip">${IC.clock} ${p.hours} ساعة</span>
            <span class="dur-chip">${IC.eye} ${p.views} مشاهدة</span>
            <a href="${p.url}" target="_blank" rel="noopener" class="dur-chip hover:scale-105 transition" style="text-decoration:none">${IC.ext} فتح القائمة على يوتيوب</a>
          </div>
        </div>
        <div class="w-full sm:w-64 grid gap-2">
          <div class="seg-bar !h-4">${order.map(s => `<div class="${ST[s].seg}" style="width:${cnt[s] / p.count * 100}%"></div>`).join("")}</div>
          <div class="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] font-bold muted">
            ${order.map(s => `<span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full ${ST[s].seg}"></span>${ST[s].label}: ${cnt[s]}</span>`).join("")}
          </div>
        </div>
      </div>

      <div class="mt-5 rounded-2xl p-4" style="background:linear-gradient(120deg, rgba(8,145,178,.08), rgba(5,150,105,.08)); border:1px dashed color-mix(in srgb, var(--primary) 30%, transparent)">
        <p class="text-sm leading-relaxed font-medium" style="color:var(--text-2)"><b style="color:var(--text-1)">الحكم: </b>${esc(p.verdict)}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4 mt-5">
        <div class="rounded-2xl p-4" style="border:1px solid color-mix(in srgb,#059669 30%, transparent); background:rgba(5,150,105,.05)">
          <h4 class="font-display font-bold text-sm mb-2" style="color:var(--text-1)">نقاط القوة</h4>
          <ul class="grid gap-1.5">${p.strengths.map(x => `<li class="key-item !text-[.82rem]">${IC.check}<span>${esc(x)}</span></li>`).join("")}</ul>
        </div>
        <div class="rounded-2xl p-4" style="border:1px solid color-mix(in srgb,#f59e0b 35%, transparent); background:rgba(245,158,11,.05)">
          <h4 class="font-display font-bold text-sm mb-2" style="color:var(--text-1)">نقاط الضعف</h4>
          <ul class="grid gap-1.5">${p.weaknesses.map(x => `<li class="key-item !text-[.82rem]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.4" stroke-linecap="round" class="mt-1 flex-none"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="9"/></svg><span>${esc(x)}</span></li>`).join("")}</ul>
        </div>
      </div>

      <div class="mt-5 text-xs font-bold muted">الأفضل لـ: <span style="color:var(--primary)">${esc(p.bestFor)}</span></div>
    </div>

    ${p3note}

    <div class="mt-5 mb-3 flex flex-wrap items-center justify-between gap-3">
      <h3 class="font-display font-black text-lg">كل دروس القائمة — ما اختير وما استُبعد (${rows.length})</h3>
      ${statusChips}
    </div>

    <div class="card p-3 sm:p-4 grid gap-0.5">
      ${rows.length ? rows.map(v => `
        <div class="pl-row st-${v.st}">
          <span class="text-xs font-black muted ltr text-center">${v.i}</span>
          <div class="min-w-0">
            <a href="${ytUrl(v.id, p.key)}" target="_blank" rel="noopener" class="text-sm font-bold hover:underline leading-snug mix" dir="auto" style="color:var(--text-1)">${esc(v.t)}</a>
            <p class="text-xs muted mt-1 leading-relaxed">${esc(v.rs)}</p>
          </div>
          <span class="pl-dur dur-chip justify-self-start">${fmtDur(v.d)}</span>
          <span class="pl-st badge ${ST[v.st].cls} justify-self-start">${ST[v.st].icon} ${ST[v.st].label}</span>
        </div>`).join("") : `<p class="text-center muted py-10 font-medium">لا توجد فيديوهات بهذه الأولوية.</p>`}
    </div>`;

  $$("#pl-panel [data-st]").forEach(b => b.addEventListener("click", () => {
    state.plStatus = b.dataset.st;
    renderPlaylistPanel();
  }));
  observeReveals();
}

/* ============================================================
   خريطة تغطية أهداف الامتحان
   ============================================================ */
const COV = {
  full: { label: "تغطية كاملة", cls: "b-imp", icon: IC.check, seg: "seg-imp" },
  partial: { label: "تغطية جزئية", cls: "b-med", icon: IC.adjust, seg: "seg-med" },
  gap: { label: "فجوة — يحتاج مرجعاً خارجياً", cls: "b-later", icon: IC.clock, seg: "seg-later" },
};

function renderCoverage() {
  const cov = DATA.coverage;
  const gf = DATA.gapFill || null;
  const SRC = {};
  (gf ? gf.sources : []).forEach(x => SRC[x.id] = x);
  const groupsByObj = {};
  gf.groups.forEach(g => { groupsByObj[g.obj] = g; });

  const all = cov.domains.flatMap(d => d.objectives);
  const cnt = { full: 0, partial: 0, gap: 0 };
  all.forEach(o => cnt[o.st]++);

  const gfVids = gf.groups.flatMap(g => g.vids);
  const gfCore = gfVids.filter(v => !v.opt);
  const coreSecs = gfCore.reduce((a, v) => a + v.d, 0);
  const allSecs = gfVids.reduce((a, v) => a + v.d, 0);
  const hrs = x => x >= 3600 ? (x / 3600).toFixed(1).replace(/\.0$/, "") + " ساعة" : Math.round(x / 60) + " دقيقة";

  const summary = `
    <div class="card p-5 sm:p-7">
      <div class="grid sm:grid-cols-3 gap-4 mb-5">
        ${["full", "partial", "gap"].map(s => `
        <div class="rounded-2xl p-4 text-center" style="background:${s === "full" ? "rgba(5,150,105,.07)" : s === "partial" ? "rgba(245,158,11,.07)" : "rgba(100,116,139,.07)"}">
          <div class="font-display font-black text-3xl ltr" dir="ltr" style="color:${s === "full" ? "#059669" : s === "partial" ? "#b45309" : "#64748b"}">${cnt[s]}</div>
          <div class="text-sm font-bold mt-1">${s === "full" ? "تغطية كاملة" : s === "partial" ? "تغطية جزئية" : "فجوة — سُدَّت عربياً"}</div>
          <div class="text-[11px] muted mt-0.5 font-medium">من أصل ${all.length} هدفاً رسمياً</div>
        </div>`).join("")}
      </div>
      <div class="seg-bar !h-4 mb-5">
        <div class="seg-imp" style="width:${cnt.full / all.length * 100}%"></div>
        <div class="seg-med" style="width:${cnt.partial / all.length * 100}%"></div>
        <div class="seg-later" style="width:${cnt.gap / all.length * 100}%"></div>
      </div>
      <p class="text-sm leading-relaxed font-medium" style="color:var(--text-2)">
        <b style="color:var(--text-1)">الخلاصة الصادقة:</b>
        خطة الموقع تغطي <b style="color:#059669">${cnt.full} هدفاً بتغطية كاملة</b> عبر فصولها الـ21، و<b style="color:#b45309">${cnt.partial} أهداف بتغطية جزئية</b> (الجوهر موجود والعمق قابل للإكمال)، بينما <b>${cnt.gap} أهداف</b> لم يوجد لها أي فيديو عربي داخل القوائم الخمس.
        <b style="color:#7c3aed">هذه الفجوات الأربع سُدَّت كلها الآن بمحتوى عربي مختار ومعتمد من خارج القوائم (${gfVids.length} فيديو من ${gf.sources.length} مصادر — نحو ${hrs(coreSecs)} أساسية)، مع فيديوهات تعميق للأهداف الجزئية — فصار لكل هدف من الأهداف الـ35 مرجع عربي واضح.</b>
      </p>
      <p class="text-[11px] muted leading-relaxed mt-3 font-medium">${esc(cov.note)}</p>
    </div>`;

  /* ---------- قسم سدّ الفجوات ---------- */
  const vidRow = v => {
    const src = SRC[v.src];
    const isDub = src && src.tag === "مدبلج رسمياً";
    return `
    <div class="vid-row gf-row !py-2.5">
      <a class="play-btn !w-[34px] !h-[34px]" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener" title="شاهد على يوتيوب">${IC.play}</a>
      <p class="text-sm font-medium leading-relaxed flex-1" style="color:var(--text-2)">${esc(v.t)}
        ${v.opt ? `<span class="badge b-later !text-[.6rem] !py-0.5 !px-1.5">اختياري — تعمق</span>` : ""}
      </p>
      <span class="dur-chip !text-[.65rem]" style="cursor:default">${fmtDur(v.d)}</span>
      <a href="${src.url}" target="_blank" rel="noopener" class="chip !text-[.65rem] !py-0.5 !px-2 flex items-center gap-1" style="text-decoration:none; background:${isDub ? "rgba(139,92,246,.1); color:#7c3aed" : "rgba(6,182,212,.1); color:#0891b2"}" title="${esc(src.name)} — ${esc(src.desc)}">${isDub ? IC.check : IC.film} <span class="gf-src-name">${esc(src.short)}</span></a>
    </div>`;
  };

  const groupCard = g => {
    const core = g.vids.filter(v => !v.opt);
    const tot = core.reduce((a, v) => a + v.d, 0);
    return `
    <div class="card p-5" id="gf-${g.obj}" style="scroll-margin-top:96px">
      <div class="flex items-center justify-between gap-3 flex-wrap mb-2.5">
        <div class="flex items-center gap-2.5 flex-wrap">
          <span class="dom-chip ltr" dir="ltr">${g.obj}</span>
          <h3 class="font-display font-black text-base sm:text-lg">${esc(g.t)}</h3>
          ${g.kind === "fill"
            ? `<span class="badge b-imp !text-[.68rem] !py-1">${IC.check} سُدَّت بمحتوى عربي</span>`
            : `<span class="badge b-med !text-[.68rem] !py-1">${IC.adjust} تعميق مكمل</span>`}
        </div>
        <span class="dur-chip !text-[.68rem]" style="cursor:default">${IC.film} ${core.length} فيديو · الإجمالي ${fmtDur(tot)}</span>
      </div>
      <p class="text-xs muted leading-relaxed mb-3.5 font-medium">${esc(g.why)}</p>
      <div class="grid gap-2">${g.vids.map(vidRow).join("")}</div>
    </div>`;
  };

  const fills = gf.groups.filter(g => g.kind === "fill");
  const deeps = gf.groups.filter(g => g.kind === "deep");

  const gapCard = `
    <div class="card p-5 sm:p-6 mt-4" style="background:linear-gradient(150deg, rgba(139,92,246,.06), rgba(6,182,212,.05))">
      <div class="flex items-start justify-between gap-3 flex-wrap mb-3">
        <h3 class="font-display font-black text-lg sm:text-xl flex items-center gap-2">${IC.star} سدّ الفجوات — محتوى عربي مختار ومعتمد</h3>
        <div class="flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
          <span class="dur-chip" style="cursor:default">${IC.film} ${gfVids.length} فيديو</span>
          <span class="dur-chip" style="cursor:default">${IC.library} ${gf.sources.length} مصادر</span>
          <span class="dur-chip" style="cursor:default">${IC.clock} ${hrs(coreSecs)} أساسية${gfVids.length > gfCore.length ? " + اختيارية" : ""}</span>
        </div>
      </div>
      <p class="text-sm leading-relaxed font-medium mb-3" style="color:var(--text-2)">${esc(gf.intro)}</p>
      <div class="rounded-2xl px-4 py-3 flex items-start gap-2.5 mb-3.5" style="background:rgba(139,92,246,.07); border:1px dashed rgba(139,92,246,.35)">
        <span style="color:#7c3aed; flex:none; margin-top:2px">${IC.info}</span>
        <p class="text-xs leading-relaxed font-medium" style="color:var(--text-2)">${esc(gf.dubHint)}</p>
      </div>
      <div class="flex flex-wrap gap-1.5 mb-4">
        ${gf.sources.map(x => `
        <a href="${x.url}" target="_blank" rel="noopener" class="chip !text-[.7rem] !py-1 !px-2.5 flex items-center gap-1.5" style="text-decoration:none; background:${x.tag === "عربي أصلي" ? "rgba(6,182,212,.1); color:#0891b2" : "rgba(139,92,246,.1); color:#7c3aed"}" title="${esc(x.desc)}">
          <b>${x.tag === "عربي أصلي" ? IC.film : IC.check}</b> ${esc(x.short)} ${IC.ext}
        </a>`).join("")}
      </div>
      <h4 class="font-display font-black text-sm mb-2.5 flex items-center gap-2" style="color:#059669">${IC.check} الفجوات الأربع — سدّ كامل بمحتوى عربي</h4>
      <div class="grid gap-3">${fills.map(groupCard).join("")}</div>
      <h4 class="font-display font-black text-sm mt-5 mb-2.5 flex items-center gap-2" style="color:#b45309">${IC.adjust} تعميق الأهداف الجزئية — لمن يريد الدرجة الكاملة</h4>
      <div class="grid gap-3">${deeps.map(groupCard).join("")}</div>
    </div>`;

  const recommendations = cov.recommend.map((rec, i) => `
    <div class="card p-5 ${i === 0 ? "" : "mt-4"}">
      <h3 class="font-display font-black text-lg mb-3 flex items-center gap-2">
        ${i === 0 ? IC.star : IC.ext} ${esc(rec.title)}
      </h3>
      <div class="grid gap-2">
        ${rec.items.map(it => it.ext ? `
        <div class="vid-row !py-2.5">
          <span class="grid place-items-center w-[34px] h-[34px] rounded-xl flex-none text-[13px] font-black" style="background:rgba(139,92,246,.1); color:#7c3aed">↗</span>
          <p class="text-sm font-medium leading-relaxed flex-1" style="color:var(--text-2)">${esc(it.label)}</p>
        </div>` : `
        <div class="vid-row !py-2.5">
          <a class="play-btn !w-[34px] !h-[34px]" href="${ytUrl(it.ids[0], it.p)}" target="_blank" rel="noopener" title="شاهد على يوتيوب">${IC.play}</a>
          <p class="text-sm font-medium leading-relaxed flex-1" style="color:var(--text-2)">${esc(it.label)} <a class="dur-chip !text-[.65rem] !py-0.5" href="${ytUrl(it.ids[0], it.p)}" target="_blank" rel="noopener" style="text-decoration:none">مشاهدة ${IC.ext}</a></p>
        </div>`).join("")}
      </div>
    </div>`).join("");

  const domains = cov.domains.map(d => {
    const dc = { full: 0, partial: 0, gap: 0 };
    d.objectives.forEach(o => dc[o.st]++);
    return `
    <div class="card p-5 sm:p-6">
      <div class="flex items-center justify-between gap-3 flex-wrap mb-4">
        <div class="flex items-center gap-2.5">
          <span class="dom-chip d-${d.id}">${d.id}</span>
          <h3 class="font-display font-black text-lg">${esc(d.name)}</h3>
        </div>
        <div class="flex items-center gap-1.5 text-[11px] font-bold">
          <span class="badge b-imp !text-[.68rem] !py-1">${IC.check} ${dc.full}</span>
          <span class="badge b-med !text-[.68rem] !py-1">${IC.adjust} ${dc.partial}</span>
          <span class="badge b-later !text-[.68rem] !py-1">${IC.clock} ${dc.gap}</span>
          <span class="dom-chip d-${d.id} !text-[.72rem]">وزن ${d.weight}%</span>
        </div>
      </div>
      <div class="grid gap-1.5">
        ${d.objectives.map(o => {
          const grp = groupsByObj[o.id];
          const badge = grp && o.st === "gap"
            ? `<span class="badge !text-[.68rem] !py-1 justify-self-start flex items-center gap-1" style="background:rgba(139,92,246,.12); color:#7c3aed">${IC.check} فجوة — سُدَّت بمحتوى عربي خارجي</span>`
            : `<span class="badge ${COV[o.st].cls} !text-[.68rem] !py-1 justify-self-start">${COV[o.st].icon} ${COV[o.st].label}</span>`;
          return `
        <div class="cov-row st-${o.st}">
          <span class="ltr font-black text-xs text-center flex-none" dir="ltr">${o.id}</span>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-sm font-bold" style="color:var(--text-1)">${esc(o.t)}</span>
              ${o.ch.length ? o.ch.map(n => {
                const c = CHAPTER_BY_N[n];
                return `<button class="chip !text-[.68rem] !py-0.5 !px-2 ltr" data-goto-ch="${n}" title="انتقل إلى ${esc(c.ar)}">فصل ${n}</button>`;
              }).join("") : ""}
              ${grp ? `<button class="chip !text-[.68rem] !py-0.5 !px-2 flex items-center gap-1" data-goto-gf="${o.id}" style="background:rgba(139,92,246,.12); color:#7c3aed" title="انتقل إلى ${grp.kind === "fill" ? "فيديوهات سدّ الفجوة" : "فيديوهات التعميق"} لهذا الهدف">${IC.plus} ${grp.kind === "fill" ? "سُدَّت عربياً" : "تعميق عربي"}</button>` : ""}
            </div>
            ${o.note ? `<p class="text-xs muted mt-1 leading-relaxed">${esc(o.note)}</p>` : ""}
          </div>
          ${badge}
        </div>`;
        }).join("")}
      </div>
    </div>`;
  }).join("");

  $("#coverage-body").innerHTML = summary + gapCard + `
    <div class="card p-5 sm:p-6 mt-4" style="background:linear-gradient(120deg, rgba(8,145,178,.07), rgba(5,150,105,.07))">
      <h3 class="font-display font-black text-lg mb-3 flex items-center gap-2">${IC.target} توصيات تكميلية (بأسبقية واضحة)</h3>
      <div class="grid gap-2">${recommendations}</div>
    </div>` + domains;

  // الانتقال إلى الفصل المرتبط بهدف (مقتصر على هذا القسم)
  $$("[data-goto-ch]", $("#coverage-body")).forEach(b => b.addEventListener("click", () => {
    location.hash = "#/plan";
    setTimeout(() => {
      const el = $("#ch-" + b.dataset.gotoCh);
      if (el) { el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.querySelector(".card").style.boxShadow = "0 0 0 3px var(--primary)";
        setTimeout(() => el.querySelector(".card").style.boxShadow = "", 1800); }
    }, 120);
  }));

  // الانتقال إلى مجموعة سدّ الفجوات الخاصة بهدف (مقتصر على هذا القسم)
  $$("[data-goto-gf]", $("#coverage-body")).forEach(b => b.addEventListener("click", () => {
    const el = document.getElementById("gf-" + b.dataset.gotoGf);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.style.boxShadow = "0 0 0 3px #7c3aed";
      setTimeout(() => el.style.boxShadow = "", 1800);
    }
  }));

  observeReveals();
}

/* ============================================================
   الجدول الزمني
   ============================================================ */
function renderSchedule() {
  $("#schedule-list").innerHTML = DATA.schedule.map(w => `
    <div class="card card-hover p-5 sm:p-6 flex flex-col sm:flex-row gap-4 reveal">
      <div class="week-num">${w.week}</div>
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <span class="text-[11px] font-black muted">الأسبوع ${w.week}</span>
            <h3 class="font-display font-black text-lg leading-snug">${esc(w.title)}</h3>
          </div>
          <span class="dur-chip">${IC.clock} ${esc(w.hours)}</span>
        </div>
        <p class="text-xs muted mt-2 leading-relaxed font-medium">${esc(w.note)}</p>
        ${w.chapters.length ? `
        <div class="flex flex-wrap gap-1.5 mt-3">
          ${w.chapters.map(n => {
            const c = CHAPTER_BY_N[n];
            return `<button class="chip !text-[.72rem] !py-1 !px-2.5" data-goto-ch="${n}" title="${esc(c.ar)}">
              <b>${n}</b> ${esc(c.ar.length > 26 ? c.ar.slice(0, 26) + "…" : c.ar)}</button>`;
          }).join("")}
        </div>` : ""}
        <p class="text-xs mt-3 font-bold" style="color:var(--primary)">إضافات هذا الأسبوع: ${esc(w.extra)}</p>
      </div>
    </div>`).join("");

  $("#exam-facts").innerHTML = DATA.examFacts.map(([v, l]) => `
    <div class="card card-hover p-4 text-center reveal">
      <div class="font-display font-black text-lg sm:text-xl" style="color:var(--primary)" dir="auto">${esc(v)}</div>
      <p class="text-[11px] muted mt-1.5 leading-relaxed font-bold">${esc(l)}</p>
    </div>`).join("");

  $$("[data-goto-ch]", $("#schedule-list")).forEach(b => b.addEventListener("click", () => {
    location.hash = "#/plan";
    setTimeout(() => {
      const el = $("#ch-" + b.dataset.gotoCh);
      if (el) { el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.querySelector(".card").style.boxShadow = "0 0 0 3px var(--primary)";
        setTimeout(() => el.querySelector(".card").style.boxShadow = "", 1800); }
    }, 120);
  }));
  observeReveals();
}

/* ============================================================
   المنهجية
   ============================================================ */
function renderMethod() {
  $("#method-body").innerHTML = `
    <div class="grid gap-3">
      ${DATA.methodology.steps.map(([t, d], i) => `
      <div class="card card-hover p-5 flex items-start gap-4 reveal">
        <span class="week-num !w-11 !h-11 !rounded-xl !text-base">${i + 1}</span>
        <div>
          <h3 class="font-display font-black text-lg mb-1">${esc(t)}</h3>
          <p class="text-sm muted leading-relaxed font-medium">${esc(d)}</p>
        </div>
      </div>`).join("")}
    </div>
    <div class="card p-6 reveal" style="background:linear-gradient(120deg, rgba(8,145,178,.07), rgba(5,150,105,.07))">
      <h3 class="font-display font-black text-lg mb-3 flex items-center gap-2">${IC.info} حدود التحليل وشفافيته</h3>
      <ul class="grid gap-2.5">
        ${DATA.methodology.transparency.map(t => `
        <li class="key-item !text-sm"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color:#d97706"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="9"/></svg><span>${esc(t)}</span></li>`).join("")}
      </ul>
    </div>
    <div class="card p-6 reveal">
      <h3 class="font-display font-black text-lg mb-2">مصادر البيانات</h3>
      <p class="text-sm muted leading-relaxed font-medium">
        بيانات القوائم (الترتيب، المدد الدقيقة، أعداد المشاهدات، القنوات) مستخرجة مباشرة من صفحات قوائم يوتيوب بتاريخ
        <b style="color:var(--text-1)">7 نوفمبر 2026</b> — 260 فيديو عبر 5 قوائم.
        أوزان النطاقات وتفاصيل الامتحان من الوثائق الرسمية لـ CompTIA.
        عناوين الدروس ومطابقتها مع فصول الكتاب الرسمي SY0-601 (21 فصلاً) هي أساس الربط بين القوائم.
      </p>
    </div>`;
  observeReveals();
}

/* ============================================================
   الإقلاع
   ============================================================ */
renderPlan();
renderPlaylistTabs();
renderPlaylistPanel();
renderCoverage();
renderSchedule();
renderMethod();
if (!location.hash) location.hash = "#/home";
route();
