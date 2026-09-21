document.getElementById("year").textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll(".section-content, .portrait-wrap");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("has-motion");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach((target) => observer.observe(target));
}
