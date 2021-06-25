'use strict';

/*Create a random number that player will have to guess*/
let score, highScore,secretNumber;
secretNumber = Math.trunc(Math.random() * 20)+1;
score = 20;
highScore = 0;

/*Function that decreases and displays score*/
const decreaseScore = function() {
  score--
  document.querySelector('.score').textContent = score;
};

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

/*Add a click event listner to the check button, to read the number set by the player*/
document.querySelector('.check').addEventListener('click',function() {
  const guess  = Number(document.querySelector('.guess').value);

  //Checks if the input has a value, and display 'No number'
  if (!guess) {
    displayMessage('No number!');
    
    //When the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number');
    document.querySelector('body').classList.add('won');
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore =  score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if(guess !== secretNumber){
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? `Too high!` : `Too low!`;
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      decreaseScore();
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

});


/*Reset Game*/
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20)+1;
  
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').classList.remove('won');
  document.querySelector('.number').style.width = '15rem';
});

