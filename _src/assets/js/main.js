'use strict';

console.log('>> Ready :)');
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
console.log(randomNumber);

//crear una funcion handler para el boton
function testing(){
    console.log(Number(inputEl.value));
    if(Number(inputEl.value) === randomNumber){
        trackEl.innerHTML = '¡HASGANADO, CAMPEONA!';
    } else if(Number(inputEl.value) > randomNumber){
        trackEl.innerHTML = 'Demasiado alto';
    } else if(Number(inputEl.value) < randomNumber){
        trackEl.innerHTML = 'Demasiado bajo';
    }
}
//poner un listener al boton
buttonEl.addEventListener('click', testing);



  
  // Anda, chacho, píntame en la consola un número random hasta 100;
//   console.log('> ' + getRandomNumber(100));