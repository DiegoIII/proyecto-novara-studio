const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));

const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.dot');
let current = 0;
const total = 4;
let timer;

const goTo = (index) => {
  current = (index + total) % total;
  track.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
};

const next = () => goTo(current + 1);
const prev = () => goTo(current - 1);
const resetTimer = () => { clearInterval(timer); timer = setInterval(next, 5000); };

document.getElementById('carouselNext').addEventListener('click', () => { next(); resetTimer(); });
document.getElementById('carouselPrev').addEventListener('click', () => { prev(); resetTimer(); });
dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.index); resetTimer(); }));
timer = setInterval(next, 5000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .why-item, .valor-card, .alcance-card, .stat-item, .vi-item').forEach(el => observer.observe(el));