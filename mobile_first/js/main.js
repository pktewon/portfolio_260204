const toggleBtn = document.querySelector('.menu-toggleBTN')
const nav = document.querySelector('nav')

 toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open')
 })