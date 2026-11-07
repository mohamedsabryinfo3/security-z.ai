/* ============================================================
   صفحة الفجوات بالعربي — العرض والتفاعل
   إضافة مستقلة: لا تعدّل منطق app.js أو بيانات data.js إطلاقاً
   ============================================================ */
"use strict";

(function () {

  /* ---------- تسجيل العرض في الموجّه (إضافة فقط) ---------- */
  if (typeof VIEWS !== "undefined" && !VIEWS.includes("gaps")) VIEWS.push("gaps");

  const G = GAPSDATA;
  const SRC = {};
  G.sources.forEach(s => { SRC[s.id] = s; });

  const fmtViews = n => {
    if (n === null || n === undefined) return "";
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + " مليون";
    if (n >= 1e3) return (n / 1e3).toFixed(n >= 1e4 ? 0 : 1).replace(/\.0$/, "") + " ألف";
    return String(n);
  };
  const hrs = x => x >= 3600 ? (x / 3600).toFixed(1).replace(/\.0$/, "") + " ساعة" : Math.round(x / 60) + " دقيقة";

  /* ---------- إحصائيات ---------- */
  const fills = G.groups.filter(g => g.kind === "fill");
  const deeps = G.groups.filter(g => g.kind === "deep");
  const coreVids = G.groups.flatMap(g => g.vids.filter(v => !v.opt));
  const altVids = G.groups.flatMap(g => g.vids.filter(v => v.opt)).concat(G.groups.flatMap(g => (g.alts || []).filter(v => !v.opt)));
  const deepOptVids = G.groups.flatMap(g => (g.alts || []).filter(v => v.opt));
  const coreSecs = coreVids.reduce((a, v) => a + v.d, 0);
  const usedSrcIds = new Set(G.groups.flatMap(g => g.vids.map(v => v.src)));

  /* ---------- الرأس والإحصائيات ---------- */
  $("#gaps-hero").innerHTML = `
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      ${[
        [String(G.groups.length), "أهداف مُغطاة بالعربي", `${fills.length} فجوات كاملة + ${deeps.length} أهداف جزئية`, "#059669"],
        [String(coreVids.length), "فيديو أساسي عربي أصيل", `إجمالي ${hrs(coreSecs)} مسحٍ متصل`, "#0891b2"],
        [String(usedSrcIds.size), "قناة عربية أصلية", "قنوات متخصصة تحاضر بالعربية", "#7c3aed"],
        ["100%", "عربي أصيل — بلا دبلجة", "تحققنا من لغة كل فيديو وقطته", "#b45309"],
      ].map(([n, l, sub, c]) => `
        <div class="card card-hover p-4 sm:p-5 text-center reveal">
          <div class="font-display font-black text-2xl sm:text-3xl ltr" dir="ltr" style="color:${c}">${n}</div>
          <div class="text-sm font-bold mt-1 leading-snug">${l}</div>
          <div class="text-[11px] muted mt-0.5 font-medium leading-relaxed">${sub}</div>
        </div>`).join("")}
    </div>

    <div class="card p-5 sm:p-6 mt-4 reveal">
      <p class="text-sm sm:text-[.95rem] leading-relaxed font-medium" style="color:var(--text-2)">${G.intro}</p>
      <div class="rounded-2xl px-4 py-3 mt-4 flex items-start gap-2.5" style="background:rgba(139,92,246,.07); border:1px dashed rgba(139,92,246,.35)">
        <span style="color:#7c3aed; flex:none; margin-top:2px">${IC.info}</span>
        <p class="text-xs leading-relaxed font-medium" style="color:var(--text-2)">${G.relNote}</p>
      </div>
      <p class="text-[11px] muted leading-relaxed mt-3 font-medium">التحليل والاختيار بتاريخ ${G.updated} — المدد وأعداد المشاهدات من صفحات الفيديوهات نفسها.</p>
    </div>`;

  /* ---------- منهجية الاختيار ---------- */
  $("#gaps-method").innerHTML = `
    <div class="card p-5 sm:p-6 reveal">
      <h3 class="font-display font-black text-lg mb-4 flex items-center gap-2">${IC.target} كيف اختير «الأقوى»؟ — منهجية شفافة</h3>
      <div class="grid sm:grid-cols-2 gap-3">
        ${G.method.map(([t, d], i) => `
        <div class="rounded-2xl p-4 flex items-start gap-3" style="background:color-mix(in srgb, var(--primary) 4%, transparent); border:1px solid var(--border)">
          <span class="week-num !w-9 !h-9 !rounded-xl !text-sm">${i + 1}</span>
          <div>
            <h4 class="font-bold text-sm mb-1">${t}</h4>
            <p class="text-xs muted leading-relaxed font-medium">${d}</p>
          </div>
        </div>`).join("")}
      </div>
      <div class="flex flex-wrap gap-1.5 mt-4">
        ${G.sources.filter(s => usedSrcIds.has(s.id)).map(s => `
        <a href="${s.url}" target="_blank" rel="noopener" class="chip !text-[.7rem] !py-1 !px-2.5 flex items-center gap-1.5" style="text-decoration:none; background:rgba(6,182,212,.1); color:#0891b2" title="${esc(s.desc)}">
          ${IC.film} ${esc(s.short)} ${IC.ext}
        </a>`).join("")}
      </div>
    </div>`;

  /* ---------- سطر فيديو ---------- */
  const vidRow = (v, alt) => {
    const src = SRC[v.src];
    const optBadge = v.opt ? `<span class="badge b-later !text-[.6rem] !py-0.5 !px-1.5">تعمق اختياري</span>` : "";
    const plBadge = v.pl ? `<span class="badge b-imp !text-[.6rem] !py-0.5 !px-1.5">من القوائم الخمس</span>` : "";
    const views = v.views ? `<span class="dur-chip !text-[.62rem] !px-1.5" style="cursor:default" title="عدد المشاهدات">${IC.eye} ${fmtViews(v.views)}</span>` : "";
    const why = v.why && !alt ? `<p class="text-[11px] muted leading-relaxed mt-0.5 font-medium">↳ ${esc(v.why)}</p>` : "";
    return `
    <div class="vid-row ${alt ? "!py-2" : "gf-row !py-2.5"}" style="${alt ? "opacity:.88" : ""}">
      <a class="play-btn !w-[34px] !h-[34px]" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener" title="شاهد على يوتيوب">${IC.play}</a>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium leading-relaxed" style="color:var(--text-2)">${esc(v.t)} ${optBadge} ${plBadge}</p>
        ${why}
      </div>
      <div class="flex items-center gap-1.5 flex-none">
        ${views}
        <span class="dur-chip !text-[.65rem]" style="cursor:default">${fmtDur(v.d)}</span>
        <a href="${src.url}" target="_blank" rel="noopener" class="chip !text-[.65rem] !py-0.5 !px-2 flex items-center gap-1" style="text-decoration:none; background:rgba(6,182,212,.1); color:#0891b2" title="${esc(src.name)} — ${esc(src.desc)}">${IC.film} <span class="gf-src-name">${esc(src.short)}</span></a>
      </div>
    </div>`;
  };

  /* ---------- بطاقة هدف ---------- */
  const groupCard = g => {
    const core = g.vids.filter(v => !v.opt);
    const tot = core.reduce((a, v) => a + v.d, 0);
    const alts = (g.alts || []);
    const deepOpts = g.vids.filter(v => v.opt);
    return `
    <div class="card p-5 sm:p-6" id="gap-${g.obj}" style="scroll-margin-top:96px" data-kind="${g.kind}">
      <div class="flex items-start justify-between gap-3 flex-wrap mb-2.5">
        <div class="flex items-center gap-2.5 flex-wrap">
          <span class="dom-chip d-${g.dom} ltr" dir="ltr" title="النطاق ${g.dom}">${g.obj}</span>
          <h3 class="font-display font-black text-base sm:text-lg">${esc(g.t)}</h3>
          ${g.kind === "fill"
            ? `<span class="badge b-imp !text-[.68rem] !py-1">${IC.check} فجوة كاملة — سُدَّت بمحتوى عربي أصيل</span>`
            : `<span class="badge b-med !text-[.68rem] !py-1">${IC.adjust} هدف جزئي — تعميق عربي مكمل</span>`}
        </div>
        <span class="dur-chip !text-[.68rem]" style="cursor:default">${IC.film} ${core.length} فيديو · ${fmtDur(tot)}</span>
      </div>

      <p class="text-xs muted leading-relaxed mb-4 font-medium">${IC.info} <b style="color:var(--text-1)">لماذا هو فجوة؟</b> ${esc(g.why)}</p>

      <div class="rounded-2xl p-4 mb-4" style="background:color-mix(in srgb, var(--primary) 4%, transparent); border:1px solid var(--border)">
        <h4 class="font-display font-black text-[.82rem] mb-2.5" style="color:var(--primary)">ماذا يطلب الامتحان في هذا الهدف؟</h4>
        <div class="flex flex-wrap gap-1.5">
          ${g.topics.map(t => `<span class="chip !text-[.68rem] !py-1 !px-2.5" style="cursor:default">${esc(t)}</span>`).join("")}
        </div>
      </div>

      <details class="rounded-2xl mb-4 group" style="border:1px solid var(--border)" open>
        <summary class="cursor-pointer select-none px-4 py-3 flex items-center justify-between gap-2 font-display font-black text-[.85rem]" style="color:var(--text-1)">
          <span class="flex items-center gap-2">${IC.library} الخلاصة الدراسية بالعربية — اقرأها ثم شاهد</span>
          <span class="text-[.65rem] font-bold muted group-open:hidden">اضغط للفتح</span>
        </summary>
        <div class="px-4 pb-4 pt-1 grid gap-2.5 text-sm leading-[1.9] font-medium" style="color:var(--text-2)">
          ${g.summary}
        </div>
      </details>

      <h4 class="font-display font-black text-[.85rem] mb-2 flex items-center gap-2" style="color:#059669">${IC.check} المحتوى العربي المختار — الأقوى بعد البحث والمقارنة</h4>
      <div class="grid gap-1.5 mb-3">${core.map(v => vidRow(v, false)).join("")}</div>

      ${deepOpts.length ? `
      <div class="grid gap-1.5 mb-3">${deepOpts.map(v => vidRow(v, false)).join("")}</div>` : ""}

      ${alts.length ? `
      <details class="rounded-2xl" style="border:1px dashed var(--border)">
        <summary class="cursor-pointer select-none px-4 py-2.5 text-xs font-black flex items-center gap-2" style="color:var(--text-2)">
          ${IC.plus} بدائل عربية جيدة (${alts.length}) — إن أردت شرحاً مختلفاً
        </summary>
        <div class="px-3.5 pb-3.5 pt-1 grid gap-1">${alts.map(v => vidRow(v, true)).join("")}</div>
      </details>` : ""}

      <div class="rounded-2xl px-4 py-3 mt-4 flex items-start gap-2.5" style="background:rgba(245,158,11,.07); border:1px dashed rgba(245,158,11,.4)">
        <span style="color:#b45309; flex:none; margin-top:2px">${IC.trophy}</span>
        <p class="text-xs leading-relaxed font-medium" style="color:var(--text-2)"><b style="color:#b45309">نقطة الامتحان:</b> ${esc(g.exam)}</p>
      </div>
    </div>`;
  };

  /* ---------- الفلاتر ---------- */
  let gapsFilter = "all";
  const renderList = () => {
    $("#gaps-list").innerHTML = G.groups
      .filter(g => gapsFilter === "all" || g.kind === gapsFilter)
      .map(groupCard).join("");
    $$("#gaps-filters .chip").forEach(c => c.classList.toggle("active", c.dataset.f === gapsFilter));
    observeReveals();
  };
  $("#gaps-filters").innerHTML = `
    <button class="chip active" data-f="all">الأهداف العشرة</button>
    <button class="chip" data-f="fill">الفجوات الكاملة (${fills.length})</button>
    <button class="chip" data-f="deep">الأهداف الجزئية (${deeps.length})</button>`;
  $$("#gaps-filters .chip").forEach(c => c.addEventListener("click", () => { gapsFilter = c.dataset.f; renderList(); }));

  renderList();

  /* ---------- إعادة توجيه إذا فُتح الرابط مباشرة ---------- */
  if (typeof route === "function") route();

})();
