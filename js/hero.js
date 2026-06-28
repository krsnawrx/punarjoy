export function initHero() {
  const visual = document.getElementById('hero-visual');
  if (!visual) return;

  // Fade out on scroll down
  window.addEventListener('scroll', () => {
    // If scrolled past 150px, add fade-out class
    if (window.scrollY > 150) {
      visual.classList.add('fade-out');
    } else {
      visual.classList.remove('fade-out');
    }
  }, { passive: true });
}
