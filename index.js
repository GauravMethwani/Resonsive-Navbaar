var mobile_menu = document.querySelector(".btn")
var header = document.querySelector(".header")
const togglemenu = () => {
    header.classList.toggle("active")
}

mobile_menu.addEventListener("click", () => togglemenu())