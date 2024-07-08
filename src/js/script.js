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
        navbar.classList.remove("bg-darkbgText");
    } else {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-darkbgText");
    }
});
