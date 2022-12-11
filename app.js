const toggleList = document.querySelector('.header .navigation-bar .nav-list .toggle-nav-list');
const mobile_menu = document.querySelector('.header .navigation-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .navigation-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

toggleList.addEventListener('click', () => {
    toggleList.classList.toggle('open');
    mobile_menu.classList.toggle('open');
});

document.addEventListener('scroll', ()=>{
    let scroll_position = window.scrollY;
    if (scroll_position > 150) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent'
    }
})

menu_item.forEach(item => {
    item.addEventListener('click', () => {
        toggleList.classList.toggle('open');
        mobile_menu.classList.toggle('open');
    });
});