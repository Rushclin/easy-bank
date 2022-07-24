/* 
const navId = document.getElementById("nav-menu"),
    toggleBtnId = document.getElementById('toggle-btn'),
    closeBtnId = document.getElementById('menu-close-btn');


/** Afficher et cacher le menu */
/* toggleBtnId.addEventListener("click", () => {
    navId.classList.add("show")
})

closeBtnId.addEventListener("click", () => {
    navId.classList.remove("show")
}) */

console.log("jkjk")

const nav = document.getElementById('nav'),
    open = document.getElementById('open'),
    close = document.getElementById('close')

open.addEventListener('click', (e) => {
    nav.classList.add('show')
    open.style.display = 'none'
    close.style.display = 'block'
})

close.addEventListener('click', (e) => {
    nav.classList.remove('show')
    close.style.display = 'none'
    open.style.display = 'block'
})

