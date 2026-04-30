const layers = document.querySelectorAll('[data-parallax]');

const revealEls = document.querySelectorAll('.reveal');

const updateParallax = () => {
  const y = window.scrollY;

  layers.forEach((layer) => {
    const speed = Number(layer.dataset.parallax || 0);

    layer.style.transform = `translate3d(0, ${y * speed}px, 0)`;
  });
};

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.16 });

revealEls.forEach((el) => io.observe(el));

window.addEventListener('scroll', updateParallax, { passive: true });

updateParallax();
