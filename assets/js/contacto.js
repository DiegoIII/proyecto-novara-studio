    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));

    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });

    document.querySelectorAll('#motivoChips .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('#motivoChips .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });

    document.getElementById('formSubmit').addEventListener('click', function () {
      const form = document.getElementById('contactoForm');
      const success = document.getElementById('formSuccess');
      form.querySelectorAll('.form-group, .form-row, .form-submit').forEach(el => {
        el.style.display = 'none';
      });
      success.classList.add('visible');
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.info-block, .dato-item, .contacto-form-wrap, .contacto-info').forEach(el => observer.observe(el));