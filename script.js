(() => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = [...document.querySelectorAll("main section[id]")];
  const backToTop = document.querySelector(".back-to-top");
  const year = document.querySelector("#year");
  const copyButton = document.querySelector(".copy-email");
  const copyStatus = document.querySelector(".copy-status");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Abrir menu");
    navLinks?.classList.remove("open");
  };

  navToggle?.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navToggle.setAttribute("aria-label", expanded ? "Abrir menu" : "Fechar menu");
    navLinks?.classList.toggle("open", !expanded);
  });

  navAnchors.forEach((anchor) => anchor.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const updateScrollUI = () => {
    const y = window.scrollY;
    header?.classList.toggle("scrolled", y > 12);
    backToTop?.classList.toggle("visible", y > 500);
  };
  updateScrollUI();
  window.addEventListener("scroll", updateScrollUI, { passive: true });

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

    sections.forEach((section) => sectionObserver.observe(section));

    if (!reducedMotion) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
    } else {
      document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
    }
  } else {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
  }

  copyButton?.addEventListener("click", async () => {
    const email = copyButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      if (copyStatus) copyStatus.textContent = "E-mail copiado para a área de transferência.";
    } catch {
      if (copyStatus) copyStatus.textContent = `Copie este endereço: ${email}`;
    }
  });
})();
