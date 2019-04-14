'use strict';

const countEl = document.querySelector('.count');
const inputEl = document.querySelector('#number');
const buttonResetEl = document.querySelector('.btn-reset');
const buttonTryEl = document.querySelector('.btn-try');
const trackEl = document.querySelector('.track');
const photoEl = document.querySelector('.photo');
const emblemEl = document.querySelectorAll('.emblem');
const buttonInfoEl = document.querySelector('.btn-info');
const infoEl = document.querySelector('.pop-up');
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
  if(inputNumber < 0 ){
    printFeedback('La ira de los siete caerá sobre tí si no pones un número entre 0 y 100.');
  } else if(inputNumber > 100 ){
    printFeedback('La ira de los siete caerá sobre tí si no pones un número entre 0 y 100.')
  }  else if (inputNumber === '') {
    printFeedback('Pon un número');
    return;
  } else if (inputNumber === randomNumber) {
    printFeedback('¡HAS GANADO, CAMPEONA! Que los hombres sin rostro te protejan');
    return;
  } else if (inputNumber > randomNumber) {
    printFeedback('Demasiado alto para el Dios R\'hllor');
  } else if (inputNumber < randomNumber) {
    printFeedback('Demasiado bajo para los antiguos Dioses');
  }
}

function counterAttempts(){
  let countValue = Number(countEl.innerHTML);
  countValue += 1;
  countEl.innerHTML = countValue;
}

function theQueenKing(){
  if(countEl.innerHTML >= '5'){
    photoEl.src = "/assets/images/220px-Cersei_Lannister-Lena_Headey.jpg";
    emblemEl[0].src = "/assets/images/emblema casa Lannister.jpg";
    emblemEl[1].src = "/assets/images/emblema casa Lannister.jpg";
  } else  if(countEl.innerHTML >= '3'){
    photoEl.src = "/assets/images/0808d8de5dfea8746f8387bf68191a7e.jpg";
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

function handlerTextInfo(){
  infoEl.classList.toggle('hidden');
}

function handlerResetAll(){
  countEl.innerHTML = 0;
  inputEl.value = '';
  trackEl.innerHTML = 'Escribe un número y dale a enter';
  photoEl.src = "/assets/images/jon.jpg";
  emblemEl[0].src = "/assets/images/Emblema casa Stark.jpg";
  emblemEl[1].src = "/assets/images/Emblema casa Stark.jpg";
  getRandomNumber(100);
}

buttonResetEl.addEventListener('click', handlerResetAll);
buttonTryEl.addEventListener('click', handlerTestingNumber);
buttonInfoEl.addEventListener('click', handlerTextInfo);
