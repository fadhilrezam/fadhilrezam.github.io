/* =============================================================================
 * main.js — render konten, ganti bahasa, animasi scroll, nav, form kontak.
 * Depends on: PORTFOLIO (assets/data/content.js)
 * ============================================================================= */
(function () {
  "use strict";

  /* ------------------------------------------------------------- utilities */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const currentLang = () => document.documentElement.lang === "id" ? "id" : "en";

  /** Ambil teks sesuai bahasa aktif; fallback ke bahasa lain bila kosong. */
  function t(node) {
    if (node == null) return "";
    if (typeof node === "string") return node;
    return node[currentLang()] || node.id || node.en || "";
  }

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICONS = {
    github: '<path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/>',
    linkedin: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>',
    mail: '<path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 7.2 8.5-4.9H3.5l8.5 4.9ZM3 6.7v11.3h18V6.7l-9 5.2-9-5.2Z"/>',
    phone: '<path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z"/>',
    whatsapp: '<path d="M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A9.9 9.9 0 1 0 12 2Zm5.8 14.1c-.25.7-1.44 1.33-1.98 1.38-.53.05-1.03.23-3.5-.73-2.96-1.16-4.85-4.2-5-4.4-.14-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.3.58-.37.78-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.24 1.62 2 1.12.99 2.06 1.3 2.35 1.45.3.15.47.13.64-.08.17-.2.74-.86.93-1.16.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.15.5.22.57.35.07.12.07.7-.17 1.4Z"/>',
    external: '<path d="M14 3v2h3.6l-9.8 9.8 1.4 1.4L19 6.4V10h2V3h-7ZM5 5h5V3H3v18h18v-7h-2v5H5V5Z"/>'
  };
  const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.external}</svg>`;

  /* ------------------------------------------------------------- language */
  function setLanguage(lang, persist) {
    document.documentElement.lang = lang;
    $$("#langSwitch .lang-switch__opt").forEach((el) => {
      el.classList.toggle("is-active", el.textContent.trim().toLowerCase() === lang);
    });
    render();
    if (persist) {
      try { localStorage.setItem("portfolio-lang", lang); } catch (_) {}
    }
  }

  function storedLang() {
    try {
      const saved = localStorage.getItem("portfolio-lang");
      if (saved === "id" || saved === "en") return saved;
    } catch (_) {}
    return "en"; // default: English (ubah ke "id" bila ingin Bahasa Indonesia)
  }

  /* --------------------------------------------------------------- render */
  function render() {
    const p = PORTFOLIO;
    const ui = p.ui;

    /* -- elemen statis berlabel (data-i18n="nav.about" dst) -- */
    $$("[data-i18n]").forEach((el) => {
      const path = el.dataset.i18n.split(".");
      let val = ui;
      for (const key of path) val = val && val[key];
      const text = t(val);
      if (text) el.textContent = text;
    });

    /* -- judul section (data-section="aboutHeading" dst) -- */
    $$("[data-section]").forEach((el) => {
      el.textContent = t(p[el.dataset.section]);
    });

    /* -- hero -- */
    $("#brandInitials").textContent = p.profile.initials;
    $("#heroRoles").textContent = p.profile.roles.map(t).join("  |  ");
    $("#heroTagline").textContent = t(p.profile.tagline);
    $("#heroLocation").textContent = p.profile.location;
    const heroPhone = $("#heroPhone");
    heroPhone.textContent = p.profile.phone;
    heroPhone.href = "tel:" + p.profile.phone.replace(/[^0-9+]/g, "");
    const heroEmail = $("#heroEmail");
    heroEmail.textContent = p.profile.email;
    heroEmail.href = "mailto:" + p.profile.email;

    $("#heroSocial").innerHTML = p.profile.links
      .map((l) => `<a href="${esc(l.url)}" title="${esc(l.label)}" aria-label="${esc(l.label)}" target="_blank" rel="noopener">${icon(l.icon)}</a>`)
      .join("");

    /* -- about -- */
    const aboutText = $("#aboutText");
    aboutText.innerHTML = "";
    const lead = document.createElement("p");
    lead.className = "lead";
    lead.textContent = t(p.about.lead);
    aboutText.appendChild(lead);
    p.about.paragraphs.forEach((para) => {
      const el = document.createElement("p");
      el.textContent = t(para);
      aboutText.appendChild(el);
    });

    $("#aboutStats").innerHTML = p.about.stats
      .map(
        (s) => `<div class="stat">
                  <div class="stat__value">${esc(s.value)}</div>
                  <div class="stat__label">${esc(t(s.label))}</div>
                </div>`
      )
      .join("");

    const cv = $("#cvLink");
    if (window.CV_URL) {
      cv.href = window.CV_URL;
      cv.setAttribute("download", "");
      cv.classList.remove("is-hidden");
    } else {
      cv.remove();
    }
    const aboutEmail = $("#aboutEmail");
    aboutEmail.textContent = t(ui.about.emailMe);
    aboutEmail.href = "mailto:" + p.profile.email;

    /* -- skills -- */
    $("#skillsGrid").innerHTML = p.skills
      .map(
        (g) => `<article class="skill-group reveal">
                  <h3>${esc(t(g.group))}</h3>
                  <ul class="skill-tags">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
                </article>`
      )
      .join("");

    /* -- experience -- */
    $("#experienceList").innerHTML = p.experience
      .map(
        (job) => `<article class="job reveal">
            <div class="job__top">
              <h3 class="job__role">${esc(t(job.role))}</h3>
              <span class="job__period">${esc(job.period)}</span>
            </div>
            <p class="job__company">${esc(job.company)} · ${esc(job.location)}</p>
            <ul class="job__bullets">
              ${job.bullets.map((b) => `<li>${esc(t(b))}</li>`).join("")}
            </ul>
            <ul class="job__tags">${(job.tags || []).map((tg) => `<li>${esc(tg)}</li>`).join("")}</ul>
          </article>`
      )
      .join("");

    /* -- projects -- */
    $("#projectsSub").textContent = t(p.projectsSub);
    $("#projectsGrid").innerHTML = p.projects
      .map(
        (pr) => `<article class="card reveal">
            <div class="card__head">
              <h3 class="card__title">${esc(pr.title)}</h3>
              <span class="card__period">${esc(pr.period)}</span>
            </div>
            <p class="card__desc">${esc(t(pr.description))}</p>
            <ul class="card__stack">${pr.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
            ${
              pr.links && pr.links.length
                ? `<div class="card__links">${pr.links
                    .map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${icon(l.icon)} ${esc(l.label)}</a>`)
                    .join("")}</div>`
                : ""
            }
          </article>`
      )
      .join("");

    /* -- education -- */
    $("#educationList").innerHTML = p.education
      .map(
        (e) => `<article class="edu reveal">
            <h3 class="edu__degree">${esc(t(e.degree))}</h3>
            <p class="edu__school">${esc(e.school)} · ${esc(e.location)}</p>
            <div class="edu__meta">
              ${e.period ? `<span>${esc(e.period)}</span>` : ""}
              <span>${esc(t(e.detail))}</span>
            </div>
          </article>`
      )
      .join("");

    /* -- certifications -- */
    $("#certList").innerHTML = p.certifications
      .map(
        (c) => `<li>
            <span class="cert__icon">${icon("external").replace("<svg ", "<svg width='15' height='15' ")}</span>
            <span>
              <span class="cert__name">${esc(c.name)}</span><br />
              <span class="cert__issuer">${esc(c.issuer)}${c.year && c.year !== "—" ? " · " + esc(c.year) : ""}</span>
            </span>
          </li>`
      )
      .join("");

    /* -- contact -- */
    $("#contactLead").textContent = t(p.contactLead);
    $("#contactMail").textContent = p.profile.email;
    $("#contactMail").href = "mailto:" + p.profile.email;
    $("#contactWa").textContent = p.profile.phone;
    $("#contactWa").href = "https://wa.me/" + p.profile.whatsapp;
    $("#contactLocation").textContent = p.profile.location;
    $("#footerName").textContent = p.profile.name;
    $("#formNote").textContent = "";

    observeReveals();
    observeSections();
  }

  /* ------------------------------------------------------ scroll reveal */
  let revealObserver = null;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const delay = Number(entry.target.dataset.revealDelay || 0);
            setTimeout(() => entry.target.classList.add("is-visible"), delay);
            revealObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
    }
    $$(".reveal:not(.is-visible)").forEach((el, i) => {
      if (!el.dataset.revealDelay) {
        const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal")) : [];
        el.dataset.revealDelay = String(Math.min(siblings.indexOf(el), 5) * 70);
      }
      revealObserver.observe(el);
    });
  }

  /* ------------------------------------------- nav aktif saat di-scroll */
  function observeSections() {
    const links = $$('#navMenu a[href^="#"]');
    const map = new Map();
    links.forEach((a) => {
      const section = document.querySelector(a.getAttribute("href"));
      if (section) map.set(section, a);
    });
    if (!map.size || !("IntersectionObserver" in window)) return;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((l) => l.classList.remove("is-active"));
          const link = map.get(entry.target);
          if (link) link.classList.add("is-active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    map.forEach((_, section) => spy.observe(section));
  }

  /* ---------------------------------------------------------------- nav */
  function initNav() {
    const nav = $("#nav");
    const toggle = $("#navToggle");
    const menu = $("#navMenu");

    const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    menu.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* -------------------------------------------------------------- theme */
  function initTheme() {
    const btn = $("#themeToggle");
    let theme;
    try { theme = localStorage.getItem("portfolio-theme"); } catch (_) {}
    // Default: "dark" atau "light". Mengikuti pilihan yang disimpan, jika ada.
    if (theme !== "light" && theme !== "dark") theme = "dark";
    document.documentElement.dataset.theme = theme;

    btn.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("portfolio-theme", next); } catch (_) {}
    });
  }

  /* ------------------------------------------------- form kontak (AJAX) */
  function initContactForm() {
    const form = $("#contactForm");
    const note = $("#formNote");
    const btn = $("#submitBtn");
    const ui = PORTFOLIO.ui.contact;

    form.addEventListener("input", () => (note.textContent = ""));

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (!data.name || !data.email || !data.message) {
        note.textContent = t(ui.error);
        note.className = "form__note is-error";
        return;
      }

      const endpoint = (window.FORMSPREE_ENDPOINT || "").trim();
      if (!endpoint || endpoint.startsWith("xxxxxxxx") || !/^https?:/.test(endpoint)) {
        // Belum dikonfigurasi -> buka aplikasi email pengguna
        note.textContent = t(ui.fallback);
        note.className = "form__note";
        const subject = data.subject || (currentLang() === "id" ? "Pesan dari portofolio" : "Message from portfolio");
        window.location.href =
          "mailto:" + PORTFOLIO.profile.email +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(`${data.name} <${data.email}>\n\n${data.message}`);
        return;
      }

      btn.disabled = true;
      btn.textContent = t(ui.sending);
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form)
        });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        note.textContent = t(ui.success);
        note.className = "form__note is-success";
      } catch (_) {
        note.textContent = t(ui.error);
        note.className = "form__note is-error";
      } finally {
        btn.disabled = false;
        btn.textContent = t(ui.submit);
      }
    });
  }

  /* ----------------------------------------------------------------- init */
  function init() {
    $("#year").textContent = new Date().getFullYear();

    $("#langSwitch").addEventListener("click", () => {
      setLanguage(currentLang() === "id" ? "en" : "id", true);
    });

    initTheme();
    initNav();
    initContactForm();
    setLanguage(storedLang(), false);
  }

  document.addEventListener("DOMContentLoaded", init);
})();