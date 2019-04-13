'use strict';

const countEl = document.querySelector('.count');
const inputEl = document.querySelector('#number');
const buttonEl = document.querySelector('.btn-try');
const buttonResetEl = document.querySelector('.btn-reset');
const trackEl = document.querySelector('.track');
let randomNumber = getRandomNumber(100);
console.log('Este es el número random -> ' + randomNumber);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// function printFeedback(){

// }

function feedback(){
  const inputNumber = Number(inputEl.value);
  if (inputEl.value === '') {
    trackEl.innerHTML = 'Pon un número';
    return;
  } else if (inputNumber === randomNumber) {
    trackEl.innerHTML = '¡HAS GANADO, CAMPEONA!';
    return;
  } else if (inputNumber > randomNumber) {
    trackEl.innerHTML = 'Demasiado alto';
  } else if (inputNumber < randomNumber) {
    trackEl.innerHTML = 'Demasiado bajo';
  }
}

function counterAttempts(){
  let countValue = Number(countEl.innerHTML);
  countValue += 1;
  countEl.innerHTML = countValue;
}

function handlerTestingNumber() {
  feedback();
  counterAttempts();
}

function handlerResetAll(){
  countEl.innerHTML = 0;
  inputEl.value = '';
  trackEl.innerHTML = 'Escribe un número y dale a prueba';
  getRandomNumber(100);
}

buttonEl.addEventListener('click', handlerTestingNumber);
buttonResetEl.addEventListener('click', handlerResetAll);
inputEl.addEventListener('', handlerTestingNumber);
