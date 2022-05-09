const menuButton = document.getElementById("menu")
const closeButton = document.getElementById("closeMenu")
const nav = document.getElementById("nav")

menuButton.addEventListener("click", () => {
    nav.style.display = "flex";
})

closeButton.addEventListener("click", () => {
    nav.style.display = "none";
})

