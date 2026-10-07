// Shanmugapriya M - Portfolio Interactive Logic
document.addEventListener('DOMContentLoaded', () => {
  console.log("Shanmugapriya M Portfolio loaded successfully.");

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when clicking outside or clicking any nav link
    document.querySelectorAll('#navMenu a').forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          menuToggle.textContent = '☰';
        }
      });
    });
  }

  // Active Link Highlight based on current path (supports clean URLs)
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const cleanCurrent = currentPath.replace(/\.html$/, '') || 'index';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const cleanHref = href.split('/').pop().replace(/\.html$/, '');
    if (cleanHref === cleanCurrent || ((cleanCurrent === 'index' || cleanCurrent === '') && (cleanHref === 'index' || cleanHref === ''))) {
      link.classList.add('active');
    }
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill in all required fields.';
        formStatus.style.color = '#ef4444';
        formStatus.style.display = 'block';
        return;
      }

      // Format mailto link
      const mailtoLink = `mailto:shanmugapriyas727@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${subject}`
      )}&body=${encodeURIComponent(
        `Hi Shanmugapriya,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      formStatus.className = 'form-status success';
      formStatus.innerHTML = `✓ Thank you, ${name}! Opening your email client to send message...`;
      formStatus.style.display = 'block';

      // Open email client
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 600);
    });
  }
});