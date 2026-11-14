/* =============================================================================
 * main.js — render konten, ganti bahasa, tema, animasi scroll, nav, form kontak.
 * Depends on: PORTFOLIO (assets/data/content.js)
 * ============================================================================= */
(function () {
  "use strict";

  /* ------------------------------------------------------------- utilities */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const currentLang = () => (document.documentElement.lang === "id" ? "id" : "en");

  /** Ambil teks sesuai bahasa aktif; fallback ke bahasa lain bila kosong. */
  function t(node) {
    if (node == null) return "";
    if (typeof node === "string") return node;
    return node[currentLang()] || node.id || node.en || "";
  }

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /** Teks dengan penanda **tebal** -> <strong>. HTML di-escape lebih dulu. */
  function rich(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  const ICONS = {
    github: '<path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/>',
    linkedin: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>',
    mail: '<path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 7.2 8.5-4.9H3.5l8.5 4.9ZM3 6.7v11.3h18V6.7l-9 5.2-9-5.2Z"/>',
    phone: '<path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z"/>',
    whatsapp: '<path d="M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A9.9 9.9 0 1 0 12 2Zm5.8 14.1c-.25.7-1.44 1.33-1.98 1.38-.53.05-1.03.23-3.5-.73-2.96-1.16-4.85-4.2-5-4.4-.14-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.3.58-.37.78-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.24 1.62 2 1.12.99 2.06 1.3 2.35 1.45.3.15.47.13.64-.08.17-.2.74-.86.93-1.16.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.15.5.22.57.35.07.12.07.7-.17 1.4Z"/>',
    external: '<path d="M14 3v2h3.6l-9.8 9.8 1.4 1.4L19 6.4V10h2V3h-7ZM5 5h5V3H3v18h18v-7h-2v5H5V5Z"/>'
  };

  const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.external}</svg>`;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------- language */
  function storedLang() {
    try {
      const saved = localStorage.getItem("portfolio-lang");
      if (saved === "id" || saved === "en") return saved;
    } catch (_) {}
    return "en";
  }

  function setLanguage(lang, persist) {
    document.documentElement.lang = lang;
    $$("[data-lang-opt]").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.langOpt === lang);
    });
    render();
    if (persist) {
      try { localStorage.setItem("portfolio-lang", lang); } catch (_) {}
    }
  }

  /* ---------------------------------------------------------------- theme */
  function storedTheme() {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "dark" || saved === "light") return saved;
    } catch (_) {}
    return "light";
  }

  function syncThemeLabels() {
    const theme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const ui = PORTFOLIO.ui;
    const nextLabel = theme === "light" ? t(ui.theme.dark) : t(ui.theme.light);

    $$("[data-theme-label]").forEach((el) => {
      el.textContent = nextLabel;
    });

    $$("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", nextLabel);
      btn.setAttribute("aria-pressed", String(theme === "dark"));
    });
  }

  function setTheme(theme, persist) {
    const next = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = next;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "dark" ? "#0a0a0a" : "#ffffff");

    syncThemeLabels();
    if (persist) {
      try { localStorage.setItem("portfolio-theme", next); } catch (_) {}
    }
  }

  function initTheme() {
    setTheme(storedTheme(), false);
    $$("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        setTheme(next, true);
      });
    });
  }

  function initLanguage() {
    setLanguage(storedLang(), false);
    $$("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(currentLang() === "id" ? "en" : "id", true));
    });
  }

  /* --------------------------------------------------------------- helpers */
  function socialMarkup(links) {
    return (links || [])
      .map((l) => {
        const external = /^https?:/.test(l.url) ? ' target="_blank" rel="noopener"' : "";
        return `<a href="${esc(l.url)}" title="${esc(l.label)}" aria-label="${esc(l.label)}"${external}>${icon(l.icon)}</a>`;
      })
      .join("");
  }

  /* --------------------------------------------------------------- render */
  let revealObserver = null;
  let sectionObserver = null;

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

    $$("[data-i18n-placeholder]").forEach((el) => {
      const path = el.dataset.i18nPlaceholder.split(".");
      let val = ui;
      for (const key of path) val = val && val[key];
      const text = t(val);
      if (text) el.setAttribute("placeholder", text);
    });

    /* -- judul section (data-section="aboutHeading" dst) -- */
    $$("[data-section]").forEach((el) => {
      el.textContent = t(p[el.dataset.section]);
    });

    /* -- identitas -- */
    $$("[data-brand-initials]").forEach((el) => { el.textContent = p.profile.initials + "."; });
    $$("[data-brand-name]").forEach((el) => { el.textContent = p.profile.name; });
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
    const footerName = $("#footerName");
    if (footerName) footerName.textContent = p.profile.name;

    /* -- hero -- */
    const primaryRole = p.profile.roles[0];
    const secondaryRole = p.profile.roles[1];
    const rolePrimary = $("#heroRolePrimary");
    const roleSecondary = $("#heroRoleSecondary");
    if (rolePrimary) rolePrimary.textContent = t(primaryRole);
    if (roleSecondary) {
      roleSecondary.textContent = secondaryRole ? t(secondaryRole) : "";
      roleSecondary.hidden = !secondaryRole;
    }

    const tagline = $("#heroTagline");
    if (tagline) tagline.textContent = t(p.profile.tagline);

    const location = $("#heroLocation");
    if (location) location.textContent = p.profile.location;

    const heroPhone = $("#heroPhone");
    if (heroPhone) {
      heroPhone.textContent = p.profile.phone;
      heroPhone.href = "tel:" + p.profile.phone.replace(/[^0-9+]/g, "");
    }

    const heroEmail = $("#heroEmail");
    if (heroEmail) {
      heroEmail.textContent = p.profile.email;
      heroEmail.href = "mailto:" + p.profile.email;
    }

    const heroSocial = $("#heroSocial");
    if (heroSocial) heroSocial.innerHTML = socialMarkup(p.profile.links);

    /* -- about / bio -- */
    const aboutText = $("#aboutText");
    if (aboutText) {
      aboutText.innerHTML = "";
      const lead = document.createElement("p");
      lead.className = "lead";
      lead.textContent = t(p.about.lead);
      aboutText.appendChild(lead);

      (p.about.paragraphs || []).forEach((para) => {
        const el = document.createElement("p");
        el.textContent = t(para);
        aboutText.appendChild(el);
      });
    }

    const aboutEmail = $("#aboutEmail");
    if (aboutEmail) {
      aboutEmail.textContent = t(ui.about.emailMe);
      aboutEmail.href = "mailto:" + p.profile.email;
    }

    const cv = $("#cvLink");
    if (cv) {
      if (window.CV_URL) {
        cv.href = window.CV_URL;
        cv.setAttribute("download", "");
        cv.hidden = false;
      } else {
        cv.hidden = true;
        cv.removeAttribute("href");
      }
    }

    /* -- stats / highlights -- */
    const statsGrid = $("#statsGrid");
    if (statsGrid) {
      statsGrid.innerHTML = p.about.stats
        .map(
          (s, i) => `<article class="stat-card reveal">
              <div class="stat-card__panel">
                <span class="stat-card__index">${String(i + 1).padStart(2, "0")}</span>
                <strong class="stat-card__value">${esc(s.value)}</strong>
              </div>
              <p class="stat-card__label">${esc(t(s.label))}</p>
            </article>`
        )
        .join("");
    }

    /* -- skills -- */
    const skillsGrid = $("#skillsGrid");
    if (skillsGrid) {
      skillsGrid.innerHTML = p.skills
        .map(
          (g) => `<article class="tool-card reveal">
            <h3>${esc(t(g.group))}</h3>
            <ul class="tool-card__tags">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
          </article>`
        )
        .join("");
    }

    /* -- education -- */
    const educationList = $("#educationList");
    if (educationList) {
      educationList.innerHTML = (p.education || [])
        .map(
          (e) => `<article class="edu-card reveal">
            <div class="edu-card__main">
              <h3 class="edu-card__degree">${esc(t(e.degree))}</h3>
              <p class="edu-card__school">${esc(e.school)}</p>
            </div>
            <dl class="edu-card__meta">
              <div>
                <dt class="edu-card__label">${esc(t({ id: "Lokasi", en: "Location" }))}</dt>
                <dd>${esc(e.location)}</dd>
              </div>
              <div>
                <dt class="edu-card__label">${esc(t({ id: "Periode", en: "Period" }))}</dt>
                <dd>${esc(e.period || t({ id: "—", en: "—" }))}</dd>
              </div>
              <div>
                <dt class="edu-card__label">${esc(t({ id: "Keterangan", en: "Detail" }))}</dt>
                <dd>${esc(t(e.detail))}</dd>
              </div>
            </dl>
          </article>`
        )
        .join("");
    }

    /* -- experience + certifications -- */
    const experienceList = $("#experienceList");
    if (experienceList) {
      const jobCards = p.experience.map(
        (job) => `<article class="exp-box reveal">
            <h3 class="exp-box__title">${esc(t(job.role))}</h3>
            <p class="exp-box__meta">${esc(job.company)} · ${esc(job.location)}</p>
            <p class="exp-box__meta">${job.status ? `<span class="exp-box__status">${esc(t(job.status))}</span> · ` : ""}${esc(job.period)}</p>
            ${job.scope ? `<p class="exp-box__scope">${esc(t(job.scope))}</p>` : ""}
            <ul class="exp-box__list">
              ${job.bullets
                .map((b) => {
                  const lead = b.lead ? `<strong>${esc(t(b.lead))}</strong> — ` : "";
                  return `<li>${lead}${rich(t(b))}</li>`;
                })
                .join("")}
            </ul>
            ${(job.tags || []).length ? `<ul class="exp-box__tags">${job.tags.map((tg) => `<li>${esc(tg)}</li>`).join("")}</ul>` : ""}
          </article>`
      );

      const certCard = `<article class="exp-box exp-box--certs reveal">
          <h3 class="exp-box__title">${esc(t(p.certHeading))}</h3>
          <ul class="exp-box__list exp-box__list--certs">
            ${p.certifications
              .map(
                (c) => `<li>
                    <strong>${esc(c.name)}</strong>
                    <span class="exp-box__cert-meta">${esc(c.issuer)}${c.year && c.year !== "—" ? " · " + esc(c.year) : ""}</span>
                  </li>`
              )
              .join("")}
          </ul>
        </article>`;

      experienceList.innerHTML = jobCards.concat(certCard).join("");
    }

    /* -- projects -- */
    const projectsSub = $("#projectsSub");
    if (projectsSub) projectsSub.textContent = t(p.projectsSub);

    const projectsGrid = $("#projectsGrid");
    if (projectsGrid) {
      projectsGrid.innerHTML = p.projects
        .map((pr, i) => {
          return `<article class="project-card reveal">
              <div class="project-card__top">
                <span class="project-card__index">${String(i + 1).padStart(2, "0")}</span>
                <span class="project-card__period">${esc(pr.period)}</span>
              </div>
              <h3 class="project-card__title">${esc(pr.title)}</h3>
              <p class="project-card__desc">${esc(t(pr.description))}</p>
              <ul class="project-card__stack">${pr.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
              ${
                pr.links && pr.links.length
                  ? `<div class="project-card__links">${pr.links
                      .map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${icon(l.icon)} ${esc(l.label)}</a>`)
                      .join("")}</div>`
                  : ""
              }
            </article>`;
        })
        .join("");
    }

    /* -- contact -- */
    const contactLead = $("#contactLead");
    if (contactLead) contactLead.textContent = t(p.contactLead);

    const contactMail = $("#contactMail");
    if (contactMail) {
      contactMail.textContent = p.profile.email;
      contactMail.href = "mailto:" + p.profile.email;
    }

    const contactWa = $("#contactWa");
    if (contactWa) {
      contactWa.textContent = p.profile.phone;
      contactWa.href = "https://wa.me/" + p.profile.whatsapp;
    }

    const contactLocation = $("#contactLocation");
    if (contactLocation) contactLocation.textContent = p.profile.location;

    const contactSocial = $("#contactSocial");
    if (contactSocial) contactSocial.innerHTML = socialMarkup(p.profile.links);

    const formNote = $("#formNote");
    if (formNote) {
      formNote.textContent = "";
      formNote.className = "form__note";
    }

    syncThemeLabels();
    observeReveals();
    observeSections();
  }

  /* ------------------------------------------------------ scroll reveal */
  function observeReveals() {
    if (revealObserver) {
      revealObserver.disconnect();
      revealObserver = null;
    }

    const items = $$(".reveal:not(.is-visible)");
    if (!items.length) return;

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = Number(entry.target.dataset.revealDelay || 0);
          window.setTimeout(() => entry.target.classList.add("is-visible"), delay);
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el, i) => {
      if (!el.dataset.revealDelay) el.dataset.revealDelay = String((i % 6) * 55);
      revealObserver.observe(el);
    });
  }

  /* ------------------------------------------- nav aktif saat di-scroll */
  function observeSections() {
    if (sectionObserver) {
      sectionObserver.disconnect();
      sectionObserver = null;
    }

    const links = $$('#navMenu a[href^="#"]');
    const map = new Map();

    links.forEach((a) => {
      const section = document.querySelector(a.getAttribute("href"));
      if (section) map.set(section, a);
    });

    if (!map.size || !("IntersectionObserver" in window)) return;

    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((l) => {
            l.classList.remove("is-active");
            l.removeAttribute("aria-current");
          });
          const link = map.get(entry.target);
          if (link) {
            link.classList.add("is-active");
            link.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    map.forEach((_, section) => sectionObserver.observe(section));
  }

  /* ---------------------------------------------------------------- nav */
  function initNav() {
    const bar = $("#topbar");
    const toggle = $("#navToggle");
    const rail = $("#rail");
    if (!bar || !toggle || !rail) return;

    const onScroll = () => bar.classList.toggle("is-stuck", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const close = () => {
      rail.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", currentLang() === "id" ? "Buka menu" : "Open menu");
      document.body.classList.remove("nav-open");
    };

    toggle.addEventListener("click", () => {
      const open = !rail.classList.contains("is-open");
      rail.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open
        ? (currentLang() === "id" ? "Tutup menu" : "Close menu")
        : (currentLang() === "id" ? "Buka menu" : "Open menu"));
      document.body.classList.toggle("nav-open", open);
    });

    rail.addEventListener("click", (e) => {
      if (e.target.closest("a")) close();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100) close();
    });
  }

  /* ------------------------------------------------- form kontak (AJAX) */
  function initContactForm() {
    const form = $("#contactForm");
    const note = $("#formNote");
    const btn = $("#submitBtn");
    if (!form || !note || !btn) return;

    const ui = PORTFOLIO.ui.contact;

    form.addEventListener("input", () => {
      note.textContent = "";
      note.className = "form__note";
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());

      if (!data.name || !data.email || !data.message) {
        note.textContent = t(ui.required || ui.error);
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
    initTheme();
    initLanguage();
    initNav();
    initContactForm();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
