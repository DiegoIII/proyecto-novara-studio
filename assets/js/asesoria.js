    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));

    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });

    document.querySelectorAll('#espacioChips .chip').forEach(chip => {
      chip.addEventListener('click', () => chip.classList.toggle('active'));
    });
    document.querySelectorAll('#modalidadChips .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('#modalidadChips .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });

    document.getElementById('formSubmit').addEventListener('click', function() {
      this.textContent = '✓ Solicitud enviada';
      this.style.background = 'rgba(205,182,159,0.15)';
      this.style.color = 'var(--col-base)';
      this.disabled = true;
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.step, .tipo-card, .garantia-item').forEach(el => observer.observe(el));
  