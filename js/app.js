'use strict'

let headerButton = document.querySelector('.header__button');
headerButton.addEventListener('click', function (event) {
    if (headerButton.nextElementSibling.style.display == '' || headerButton.nextElementSibling.style.display == 'none') {
        headerButton.nextElementSibling.style.display = 'block';
    }
    else {
        headerButton.nextElementSibling.style.display = 'none';
    }
    event.stopPropagation();
});

document.addEventListener('click', function () {
    headerButton.nextElementSibling.style.display = 'none';
})

document.querySelector('.header__nav').addEventListener('click', function (event) {
    event.stopPropagation();
})

let navigationHeight = document.querySelector('.brand').style.height;
console.log(navigationHeight);

let inputField = document.querySelector('.header__search');
inputField.addEventListener('click', function (event) {
    inputField.placeholder = '';
    event.stopPropagation();
});

document.addEventListener('click', function () {
    inputField.placeholder = 'Tap to search...';
})