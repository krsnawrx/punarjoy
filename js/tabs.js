export function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Smooth scroll to target section
      const targetId = btn.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) {
        const navHeight = document.getElementById('navbar').offsetHeight;
        const tabsHeight = document.getElementById('service-tabs').offsetHeight;
        const offset = navHeight + tabsHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Auto-update active tab on scroll
  const sections = ['pgs', 'rooms'];
  window.addEventListener('scroll', () => {
    const navHeight = document.getElementById('navbar').offsetHeight;
    const tabsHeight = document.getElementById('service-tabs').offsetHeight;
    const offset = navHeight + tabsHeight + 10;

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom > offset) {
        tabBtns.forEach(b => b.classList.remove('active'));
        const activeBtn = document.querySelector(`.tab-btn[data-target="${id}"]`);
        if (activeBtn) activeBtn.classList.add('active');
      }
    });
  });
}
