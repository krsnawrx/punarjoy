export function initBooking() {
  const form = document.getElementById('booking-form');
  const success = document.getElementById('booking-success');
  const planInput = document.getElementById('plan-input');
  const planBtns = document.querySelectorAll('.plan-toggle-btn');

  // Plan toggle
  planBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      planBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      planInput.value = btn.getAttribute('data-value');
    });
  });

  // Form submit via fetch to Formspree
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.booking-submit');
    submitBtn.textContent = 'Sending...';
    submitBtn.style.opacity = '0.6';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.hidden = true;
        success.hidden = false;
      } else {
        submitBtn.textContent = 'Something went wrong. Try again.';
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
