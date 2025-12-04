// Получаем элементы
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

// Добавляем обработчик клика
burgerBtn.addEventListener('click', () => {
    // Переключаем классы
    navMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
});

// Закрытие меню при клике на ссылку (для удобства)
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burgerBtn.classList.remove('active');
    });
});