const heroContainer = document.querySelector('.hero-container');

window.addEventListener('load', () => {
  // Animate the opacity of the hero container to show content gradually
  heroContainer.style.opacity = 1;
  heroContainer.style.transition = 'opacity 0.5s ease-in-out';
});
