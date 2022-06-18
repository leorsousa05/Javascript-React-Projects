const menu = document.querySelector('#burger-menu')
const navMenu = document.querySelector('nav')

menu.addEventListener("click", (e) => {
    e.preventDefault()
    navMenu.classList.toggle('activated')
})