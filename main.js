const projectCards = document.querySelectorAll(".project");

projectCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 120}ms`;
});

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        projectObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

projectCards.forEach((card) => projectObserver.observe(card));
