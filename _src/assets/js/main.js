'use strict';

//recoger todos los elementos necesarios del html
const countEl = document.querySelector('.count');
const inputEl = document.querySelector('#number');
const buttonEl = document.querySelector('.btn');
const trackEl = document.querySelector('.track');

//la función de random number se ejecuta al entran en la pag
// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);
console.log('Este es el número random -> ' + randomNumber);

//crear una funcion handler para el boton 
function testing() {
    console.log(Number(inputEl.value));
    if (inputEl.value === '') {
        trackEl.innerHTML = 'Pon un número';
        return;
    } else if (Number(inputEl.value) === randomNumber) {
        trackEl.innerHTML = '¡HAS GANADO, CAMPEONA!';
        return;
    } else if (Number(inputEl.value) > randomNumber) {
        trackEl.innerHTML = 'Demasiado alto';
    } else if (Number(inputEl.value) < randomNumber) {
        trackEl.innerHTML = 'Demasiado bajo';
    }
    let countValue = Number(countEl.innerHTML);

    //bucle para el contador
    for (let i = 0; i < 1; i++) {
        countValue = countValue + 1;
        countEl.innerHTML = countValue;
    }
}

//poner un listener al boton
buttonEl.addEventListener('click', testing);
