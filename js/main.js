/*
 * Global JavaScript for Assessoria Acadêmica website.
 *
 * Handles the mobile navigation toggle and accordion behaviour in
 * the FAQ sections. These interactivity enhancements improve the
 * user experience on smaller screens and allow visitors to easily
 * expand or collapse answers to frequently asked questions.
 */

// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (question && answer) {
      question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';
        // close all other answers
        faqItems.forEach((other) => {
          const otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) {
            otherAnswer.style.display = 'none';
          }
        });
        // toggle current answer
        answer.style.display = isOpen ? 'none' : 'block';
      });
    }
  });
});