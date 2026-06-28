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
