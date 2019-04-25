import headsOrTails from '../src/headsOrTails.js';

const winCounter = document.getElementById('win-counter');
const lossCounter = document.getElementById('loss-counter');
const coinImage = document.getElementById('coin-image');
const displayMessage = document.getElementById('display-message');
const headsRadio = document.getElementById('heads-radio');
const flipButton = document.getElementById('flip-button');

let wins = 0;
let losses = 0;

flipButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const result = headsOrTails(randomNumber);

    let guess = '';
    if(headsRadio.checked) {
        guess = 'heads';
    } else {
        guess = 'tails';
    }

    const correctGuess = guess === result;

    if(correctGuess) {
        wins++;
        winCounter.textContent = 'Wins: ' + wins;
        displayMessage.textContent = 'You won!';
        displayMessage.classList.add('win');
        displayMessage.classList.remove('loss');
    } else {
        losses++;
        lossCounter.textContent = 'Losses: ' + losses;
        displayMessage.textContent = 'You lost!';
        displayMessage.classList.add('loss');
        displayMessage.classList.remove('win');
    }

});