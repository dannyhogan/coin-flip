import headsOrTails from '../src/headsOrTails.js';

const winCounter = document.getElementById('win-counter');
const lossCounter = document.getElementById('loss-counter');
const coinImage = document.getElementById('coin-image');
const displayMessage = document.getElementById('display-message');
const headsRadio = document.getElementById('heads-radio');
const flipButton = document.getElementById('flip-button');

flipButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const result = headsOrTails(randomNumber);

    let guess = '';
    if(headsRadio.checked) {
        guess = 'heads';
    } else {
        guess = 'tails';
    }
    console.log(result, guess);
});