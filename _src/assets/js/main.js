'use strict';

const countEl = document.querySelector('.count');
const inputEl = document.querySelector('#number');
const buttonResetEl = document.querySelector('.btn-reset');
const buttonTryEl = document.querySelector('.btn-try');
const trackEl = document.querySelector('.track');
const photoEl = document.querySelector('.photo');
const emblemEl = document.querySelectorAll('.emblem');
let randomNumber = getRandomNumber(100);

console.log('Este es el número random -> ' + randomNumber);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function printFeedback(textFeedback){
  trackEl.innerHTML = textFeedback;
}

function feedback(){
  let inputNumber = parseInt(inputEl.value);
  if(inputNumber <'1' >'100'){
    printFeedback('La ira de los siete caerá sobre tí si no pones un número entre 1 y 100.')
  }  else if (inputNumber === '') {
    printFeedback('Pon un número');
    return;
  } else if (inputNumber === randomNumber) {
    printFeedback('¡HAS GANADO, CAMPEONA!');
    return;
  } else if (inputNumber > randomNumber) {
    printFeedback('Demasiado alto');
  } else if (inputNumber < randomNumber) {
    printFeedback('Demasiado bajo');
  }
}

function counterAttempts(){
  let countValue = Number(countEl.innerHTML);
  countValue += 1;
  countEl.innerHTML = countValue;
}

function theQueenKing(){
  if(countEl.innerHTML >= '5'){
    photoEl.src = "/assets/images/emblema casa Lannister.jpg";
    emblemEl[0].src = "/assets/images/emblema casa Lannister.jpg";
    emblemEl[1].src = "/assets/images/emblema casa Lannister.jpg";
  } else  if(countEl.innerHTML >= '3'){
    photoEl.src = "/assets/images/emblema casa targaryen.jpg";
    emblemEl[0].src = "/assets/images/emblema casa targaryen.jpg";
    emblemEl[1].src = "/assets/images/emblema casa targaryen.jpg";
  }
}

function handlerTestingNumber(event) {
  event.preventDefault();
  feedback();
  counterAttempts();
  theQueenKing();
}

function handlerResetAll(){
  countEl.innerHTML = 0;
  inputEl.value = '';
  trackEl.innerHTML = 'Escribe un número y dale a enter';
  photoEl.src = "/assets/images/Emblema casa Stark.jpg";
  emblemEl[0].src = "/assets/images/Emblema casa Stark.jpg";
  emblemEl[1].src = "/assets/images/Emblema casa Stark.jpg";
  getRandomNumber(100);
}

buttonResetEl.addEventListener('click', handlerResetAll);
buttonTryEl.addEventListener('click', handlerTestingNumber);
