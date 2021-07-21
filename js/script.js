// Находим элементы из документа по селекторам, классам, id:
let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    answer = document.getElementById('prompt'),
// Создаем новый элемент списка:
    menuItemLi = document.createElement('li');

// Меняем местами пункты меню:
    menu.insertBefore(menuItem[2], menuItem[1]);

// Добавляем класс новому элементу списка:
menuItemLi.classList.add('menu-item');
// Добавляем текст новому элементу списка:
menuItemLi.textContent = 'Пятый пункт';
// Добавляем новый элемент списка в конец списка:
menu.appendChild(menuItemLi);

// Меняем фон страницы:
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
// Меняем текст элемента:
title.textContent = 'Мы продаем только подлинную технику Apple';
// Удаляем элемент:
adv.remove();
// Запрос ответа от пользователя:
let yourOpinion = prompt('Ваше отношение к технике Apple');
// Добавляем в элемент ответ от пользователя:
answer.textContent = yourOpinion;
