burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')

rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.navlist')


burger.addEventListener('click',()=> {
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-class');
    
    rightnav.classList.toggle('v-class');
})