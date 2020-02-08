// ResponsiveMenu
const handle = () => {
    const burger = document.querySelector('.burger');
    const sideNav = document.querySelector('.nav-links');
    const line = document.querySelector('.line');
    
    burger.addEventListener( 'click', () => {
        sideNav.classList.toggle('slide');
        burger.classList.toggle('active');
        line.classList.toggle('vanish');
    });
}
handle();
// TeamSelectionHandling
const mario = document.querySelector('.card:nth-child(1)');
const contra = document.querySelector('.card:nth-child(2)');
const pacman = document.querySelector('.card:nth-child(3)');
const roadrash = document.querySelector('.card:nth-child(4)');
const sonic = document.querySelector('.card:nth-child(5)');
const tekken = document.querySelector('.card:nth-child(6)');

mario.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/teams/mario/';
});
contra.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/teams/contra/';
});
pacman.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/teams/pacman/';
});
roadrash.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/teams/roadrash/';
});
sonic.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/teams/sonic/';
});
tekken.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/teams/tekken/';
});