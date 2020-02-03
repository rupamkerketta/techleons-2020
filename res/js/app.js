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