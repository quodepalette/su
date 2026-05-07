document.getElementById('year').textContent = new Date().getFullYear();

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function openNav() {
  hamburger.classList.add('open');
  navLinks.classList.add('open');
  navOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeNav() : openNav();
});
navOverlay.addEventListener('click', closeNav);
navLinks
  .querySelectorAll('a')
  .forEach((a) => a.addEventListener('click', closeNav));

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

const revealEls = document.querySelectorAll(
  '.reveal,.reveal-left,.reveal-right',
);
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
revealEls.forEach((el) => io.observe(el));

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000,
    step = 16;
  const increment = target / (duration / step);
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString();
  }, step);
}
const counterIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        counterIO.unobserve(e.target);
      }
    });
  },
  { threshold: 0.3 },
);
document.querySelectorAll('.counter').forEach((el) => counterIO.observe(el));

const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () =>
  btn.classList.toggle('visible', window.scrollY > 600),
);
btn.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' }),
);

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const b = this.querySelector('.btn-submit');
  b.textContent = 'Message Sent ✓';
  b.style.background = 'var(--navy)';
  b.style.color = 'var(--gold)';
  setTimeout(() => {
    this.reset();
    b.textContent = 'Send Message';
    b.style.background = '';
    b.style.color = '';
  }, 3000);
});
