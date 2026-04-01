// ==============================
// Highlight Active Page
// ==============================
function highlightActiveNav() {
  const links = document.querySelectorAll(".nav-links a");

  let current = window.location.pathname.split("/").pop();

  if (current === "") current = "index.html";

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (href.includes(current)) {
      link.classList.add("active");
    }
  });
}

// ==============================
// Mobile Menu
// ==============================
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// ==============================
// Contact Form
// ==============================
function initContactForm() {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (!form || !message) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const msg = document.getElementById("message")?.value.trim();

    if (!name || !email || !msg) {
      message.textContent = "Please fill all fields.";
      message.style.color = "red";
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      message.textContent = "Enter a valid email.";
      message.style.color = "red";
      return;
    }

    message.textContent = "Message submitted successfully!";
    message.style.color = "green";

    form.reset();
  });
}

// ==============================
// Navbar Shadow
// ==============================
function initNavbarEffect() {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.style.boxShadow =
      window.scrollY > 10
        ? "0 2px 10px rgba(0,0,0,0.05)"
        : "none";
  });
}

// ==============================
// INIT
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();
  initMobileMenu();
  initContactForm();
  initNavbarEffect();
});
