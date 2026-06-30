export function initPriceToggle() {
  const cards = document.querySelectorAll('.plan-card');

  cards.forEach(card => {
    const monthly = card.getAttribute('data-monthly');
    const yearly = card.getAttribute('data-yearly');
    const priceEl = card.querySelector('.plan-card__price');
    const labelEl = card.querySelector('.plan-card__price-label');
    const toggleBtns = card.querySelectorAll('.toggle-btn');

    if (!priceEl || !toggleBtns.length) return;

    // Set initial state — monthly active
    priceEl.textContent = monthly;
    if (labelEl) labelEl.textContent = 'per month';

    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const plan = btn.getAttribute('data-plan');

        if (plan === 'monthly') {
          priceEl.textContent = monthly;
          if (labelEl) labelEl.textContent = 'per month';
        } else {
          priceEl.textContent = yearly;
          if (labelEl) labelEl.textContent = 'per year';
        }
      });
    });
  });
}

export function initSlideshows() {
  const slideshows = document.querySelectorAll('.plan-card__slideshow');

  slideshows.forEach(slideshow => {
    const track = slideshow.querySelector('.slideshow-track');
    const dots = slideshow.querySelectorAll('.slideshow-dot');
    const prevBtn = slideshow.querySelector('.slideshow-btn--prev');
    const nextBtn = slideshow.querySelector('.slideshow-btn--next');
    const count = parseInt(slideshow.getAttribute('data-count'));

    if (!track || count <= 1) return;

    let current = 0;

    function goTo(index) {
      if (index < 0) index = count - 1;
      if (index >= count) index = 0;
      current = index;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

    let autoplay = setInterval(() => goTo(current + 1), 4000);

    slideshow.addEventListener('mouseenter', () => clearInterval(autoplay));
    slideshow.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => goTo(current + 1), 4000);
    });

    let touchStartX = 0;
    slideshow.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    slideshow.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        diff > 0 ? goTo(current + 1) : goTo(current - 1);
      }
    }, { passive: true });
  });
}
