document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (!burgerBtn || !navMenu) return;

    burgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burgerBtn.classList.toggle('active');
    });

    // Закрытие меню 
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            burgerBtn.classList.remove('active');
        });
    });
});
