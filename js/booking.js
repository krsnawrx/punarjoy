export function initBooking() {
  const form = document.getElementById('booking-form');
  const success = document.getElementById('booking-success');
  const planInput = document.getElementById('plan-input');
  const planBtns = document.querySelectorAll('.plan-toggle-btn');
  const roomSelect = document.getElementById('room_type');
  const priceDisplay = document.getElementById('room-price-display');
  const priceAmount = document.getElementById('room-price-amount');

  // Pricing data — monthly and yearly per room type
  const PRICES = {
    'Double Sharing':          { monthly: '₹15,000/month', yearly: '₹1,50,000/year' },
    'Single Sharing':          { monthly: '₹20,000/month', yearly: '₹2,00,000/year' },
    'Double Sharing Premium':  { monthly: '₹17,000/month', yearly: '₹1,70,000/year' },
    'Single Sharing Premium':  { monthly: '₹22,000/month', yearly: '₹2,20,000/year' },
    'Normal Room':             { monthly: '₹11,000/month', yearly: '₹1,00,000/year' },
    'Premium Room':            { monthly: '₹13,000/month', yearly: '₹1,20,000/year' },
  };

  // Track current plan — default monthly
  let currentPlan = 'Monthly';

  // Update price display based on current room + plan
  function updatePriceDisplay() {
    const roomVal = roomSelect.value;
    if (!roomVal || !PRICES[roomVal]) {
      priceDisplay.hidden = true;
      return;
    }
    const planKey = currentPlan === 'Monthly' ? 'monthly' : 'yearly';
    priceAmount.textContent = PRICES[roomVal][planKey];
    priceDisplay.hidden = false;
  }

  // Plan toggle buttons
  planBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      planBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPlan = btn.getAttribute('data-value');
      planInput.value = currentPlan;
      updatePriceDisplay();
    });
  });

  // Room type change
  if (roomSelect) roomSelect.addEventListener('change', updatePriceDisplay);

  // Form submit
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.booking-submit');

    submitBtn.textContent = 'Sending...';
    submitBtn.style.opacity = '0.6';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);

      // Formspree free plan: file uploads require multipart — use fetch with FormData
      // Do NOT set Content-Type header manually; let the browser set multipart boundary
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
        // NOTE: do NOT add Content-Type here — browser sets it with boundary automatically
      });

      if (response.ok) {
        form.hidden = true;
        success.hidden = false;
      } else {
        const data = await response.json().catch(() => ({}));
        const msg = data.errors ? data.errors.map(e => e.message).join(', ') : 'Something went wrong.';
        submitBtn.textContent = msg + ' Try again.';
        submitBtn.style.opacity = '1';
        submitBtn.disabled = false;
      }
    } catch (err) {
      submitBtn.textContent = 'Network error. Try again.';
      submitBtn.style.opacity = '1';
      submitBtn.disabled = false;
    }
  });
}
