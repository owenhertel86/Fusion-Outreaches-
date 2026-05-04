const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll('a[href^="#"]');
const contactForm = document.querySelector(".contact-form");

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 20);
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", () => {
    alert("Thanks for reaching out. Your email app should open so you can send the message.");
  });
}
