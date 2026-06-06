const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));

const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

const filterBtns = document.querySelectorAll('.filter-btn');
const allCards = document.querySelectorAll('.cat-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    
    allCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
    });
    
    document.querySelectorAll('.paquete-tier').forEach(tier => {
      const visible = [...tier.querySelectorAll('.cat-card')].some(c => c.style.display !== 'none');
      tier.style.display = visible ? '' : 'none';
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });

document.querySelectorAll('.cat-card, .tier-header').forEach(el => observer.observe(el));