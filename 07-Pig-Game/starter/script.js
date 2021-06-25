//Select elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, gamePlaying;

//Constants
score = [0,0];
currentScore = 0;
activePlayer = 0;
gamePlaying = true;

//Initial state function
const init = function() {
  score = [0, 0];
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  gamePlaying = true;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  diceEl.classList.add('hidden');
};

//Switching active player
const switchActivePlayer = function() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//set Initial state
init();

//Roll dice
btnRoll.addEventListener('click', function() {
  if (gamePlaying) {
    //1.Generate a random dice roll
    const dice = Math.trunc(Math.random()*6) + 1;
    //2.display the dice
    diceEl.classList.remove('hidden');
    // diceEl.setAttribute('src', `dice-${dice}.png`);
    diceEl.src = `dice-${dice}.png`;
    //3.Check for rolled 1, if yes, switch player
    if (dice !== 1) {
      //Add dice rolled value to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else {
      //Switching active player...
      switchActivePlayer();
    }
  }
});

btnHold.addEventListener('click', function() {
  if (gamePlaying) {
    //add current score to score
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
    //Check if score is grater than 20, other wise switch to next player
    if (score[activePlayer] >= 20) {
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      gamePlaying = false;
      diceEl.classList.add('hidden');
      console.log('You have won!');
    } else {
      //switch active player
      switchActivePlayer();
    }
  }
});

//Resets the game
btnNew.addEventListener('click', init);


