// Animación de scroll para mostrar secciones suavemente y mejoras visuales
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');

  // Animación de aparición al hacer scroll
  function revealSections() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
        section.style.filter = 'blur(0)';
      } else {
        section.style.opacity = 0;
        section.style.transform = 'translateY(40px)';
        section.style.filter = 'blur(2px)';
      }
    });
  }

  // Resalta el menú activo según la sección visible
  function highlightMenu() {
    let index = sections.length;
    while (--index && window.scrollY + 120 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) navLinks[index].classList.add('active');
  }

  // Inicializa estilos de las secciones
  sections.forEach(section => {
    section.style.transition = 'opacity 0.7s, transform 0.7s, filter 0.7s';
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
    section.style.filter = 'blur(2px)';
  });

  window.addEventListener('scroll', () => {
    revealSections();
    highlightMenu();
  });

  revealSections();
  highlightMenu();

  // Efecto en los botones al hacer click
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'scale(0.97)';
      btn.style.boxShadow = '0 4px 16px rgba(30,60,114,0.18)';
    });
    btn.addEventListener('mouseup', () => {
      btn.style.transform = '';
      btn.style.boxShadow = '';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.boxShadow = '';
    });
  });

  // Animación de barra de habilidades
  document.querySelectorAll('.bar').forEach(bar => {
    bar.style.width = '0';
    setTimeout(() => {
      let percent = '90%';
      if (bar.classList.contains('html')) percent = '90%';
      if (bar.classList.contains('css')) percent = '85%';
      if (bar.classList.contains('js')) percent = '80%';
      if (bar.classList.contains('react')) percent = '75%';
      if (bar.classList.contains('node')) percent = '70%';
      if (bar.classList.contains('mongodb')) percent = '65%';
      if (bar.classList.contains('github')) percent = '80%';
      bar.style.transition = 'width 1.2s cubic-bezier(.77,0,.18,1)';
      bar.style.width = percent;
    }, 400);
  });

  // Scroll suave para los enlaces del navbar
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});