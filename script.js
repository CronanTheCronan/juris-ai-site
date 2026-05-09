const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const scrollProgress = document.querySelector("[data-scroll-progress]");

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 8);
};

const setScrollProgress = () => {
  if (!scrollProgress) return;

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable <= 0 ? 0 : Math.min(window.scrollY / scrollable, 1);
  scrollProgress.style.transform = `scaleX(${progress})`;
};

const closeNavigation = () => {
  if (!navLinks || !navToggle) return;
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
};

setHeaderState();
setScrollProgress();
window.addEventListener("scroll", () => {
  setHeaderState();
  setScrollProgress();
}, { passive: true });
window.addEventListener("resize", setScrollProgress, { passive: true });

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

const tabButtons = document.querySelectorAll("[data-tab-button]");
const tabPanels = document.querySelectorAll("[data-tab-panel]");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTab = button.getAttribute("data-tab-button");

    tabButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.getAttribute("data-tab-panel") === selectedTab);
    });
  });
});
