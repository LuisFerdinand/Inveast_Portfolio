const btn = document.getElementById("hamburger");
const menu = document.querySelector(".mobile-menu");
const closeBtn = document.getElementById("closeBtn");

btn.addEventListener("click", () => {
    menu.classList.remove("hidden");
    btn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    closeBtn.classList.add("flex");
});

document.addEventListener("click", (event) => {
    const target = event.target;
    const isClickInsideButton = target.closest("#hamburger");
    const isClickInsideMenu = target.closest(".mobile-menu");

    // If click is not inside button or menu, hide the menu
    if (!isClickInsideButton && !isClickInsideMenu) {
        menu.classList.add("hidden");
        btn.classList.remove("hidden");
        closeBtn.classList.remove("flex");
        closeBtn.classList.add("hidden");
    }
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

// Get the button
const backToTopButton = document.getElementById("backToTop");

// Add event listener to the window to show/hide the button
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

// Add event listener to the button to scroll to the top
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


