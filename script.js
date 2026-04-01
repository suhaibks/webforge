// ==============================
// Smooth Scroll to Contact
// ==============================
function scrollToContact() {
  const contactSection = document.getElementById("contact");

  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// ==============================
// Mobile Navigation Toggle
// ==============================
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a link (better UX)
  const links = navLinks.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// ==============================
// Contact Form Handling
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

    // Basic validation
    if (!name || !email || !msg) {
      message.textContent = "Please fill all fields.";
      message.style.color = "red";
      return;
    }

    // Email format validation
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      message.textContent = "Enter a valid email address.";
      message.style.color = "red";
      return;
    }

    // Success state
    message.textContent = "Message submitted successfully!";
    message.style.color = "green";

    // Reset form
    form.reset();
  });
}

// ==============================
// Optional: Navbar Shadow on Scroll
// ==============================
function initNavbarEffect() {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
}

// ==============================
// Init All Scripts
// ==============================
function initApp() {
  initMobileMenu();
  initContactForm();
  initNavbarEffect();
}

// Run after DOM loads
document.addEventListener("DOMContentLoaded", initApp);
