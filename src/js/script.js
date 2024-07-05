const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// Change navbar background on scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-gray-800", "shadow-md");
    } else {
        navbar.classList.add("bg-gray-800", "shadow-md");
        navbar.classList.remove("bg-transparent");
    }
});