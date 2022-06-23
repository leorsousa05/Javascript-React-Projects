const menu = document.querySelector('#burger-menu')
const navMenu = document.querySelector('.nav-menu-list')

menu.onclick = () => {
    navMenu.classList.toggle('activated')
}