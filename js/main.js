
// Бургер
document.querySelector('.header__burger').onclick = function() {

    // добавляем\убираем клас .active
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header__menu').classList.toggle('active');

    // запрещаем прокрутку странице при активном бургере 
   document.querySelector('body').classList.toggle('lock');     
 }


 
 