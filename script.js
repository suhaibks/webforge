// ==============================
// Highlight Active Nav
// ==============================
function highlightActiveNav() {
  const links = document.querySelectorAll(".nav-links a");

  let current = window.location.pathname.split("/").pop();

  if (current === "") current = "index.html";

  links.forEach(link => {
    if (link.getAttribute("href").includes(current)) {
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
}

// ==============================
// Mega Menu Mobile Toggle
// ==============================
function initMegaMenu() {
  const megaParent = document.querySelector(".mega-parent");

  if (!megaParent) return;

  megaParent.addEventListener("click", function(e) {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      megaParent.classList.toggle("active");
    }
  });
}

// ==============================
// Contact Form
// ==============================
function initContactForm() {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMessage");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    msg.textContent = "Message sent!";
    msg.style.color = "green";

    form.reset();
  });
}

// ==============================
// INIT
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();
  initMobileMenu();
  initMegaMenu();
  initContactForm();
});
