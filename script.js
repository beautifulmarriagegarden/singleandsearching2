const mobileToggle = document.querySelector(".mobile-toggle");
const mainNav = document.querySelector(".main-nav");
const toast = document.getElementById("toast");

mobileToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  mobileToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    mobileToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

document.getElementById("assessmentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("Assessment form is ready to connect to your email/quiz platform.");
});

document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("Newsletter signup is ready to connect to your email provider.");
});

document.querySelectorAll("[data-link]").forEach(button => {
  button.addEventListener("click", (e) => {
    const type = button.dataset.link;
    const href = button.getAttribute("href");

    if (!href || href === "#") {
      e.preventDefault();
      if (type === "paperback") {
        showToast("Replace this button with your paperback purchase link.");
      } else {
        showToast("Replace this button with your audiobook purchase link.");
      }
    }
  });
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = [...document.querySelectorAll(".main-nav a[href^='#']")];

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (window.scrollY >= top) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});
