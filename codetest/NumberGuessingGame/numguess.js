let randomNumber = Math.floor((Math.random() * 500) + 1);
let guesses = document.getElementsByClassName('guesses');
let lastResult = document.getElementsByClassName('lastResult');
let lowOrHigh = document.getElementsByClassName('lowOrHigh');
let guessSubmit = document.getElementsByClassName('guessSubmit');
let guessField = document.getElementsByClassName('guessField');
let guessCount = 1;
let resetButton;

 
function checkGuess() {
    let userGuess = Number(guessField);
    if(guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    guesses.style.backgroundColor = 'blue';
    
    if(userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    } else if(guessCount === 10) {
        lastResult.textContent = '!!! GAME OVER !!!';
        lowOrHigh.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHigh.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
            lowOrHigh.textContent = 'Last guess was too high!';
        }
    }
    guessCount++;
    guessField.innerHTML = '';
}

guessSubmit.addEventListener('click', checkGuess);
console.log(guessField);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = '#22aaff;'
    guesses.style.backgroundColor = '#22aaff;'

    randomNumber = Math.floor(Math.random() * 500) + 1;
}
