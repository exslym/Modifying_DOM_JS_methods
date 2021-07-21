
let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    answer = document.getElementById('prompt'),

    menuItemLi = document.createElement('li');


    menu.insertBefore(menuItem[2], menuItem[1]);

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
title.textContent = 'Мы продаем только подлинную технику Apple';
adv.remove();
let yourOpinion = prompt('Ваше отношение к технике Apple');
answer.textContent = yourOpinion;

// Находим элементы из документа по селекторам, классам, id.
// Меняем местами пункты меню.
// Создаем новый элемент списка.