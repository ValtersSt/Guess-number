'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 17;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const dispalyMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    dispalyMessage('❌ No number provided!');

    // When player wins
  } else if (guess === secretNumber) {
    dispalyMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Highscore implementation
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      dispalyMessage(
        guess > secretNumber
          ? '☝️ The number is too high!'
          : '👇 The number is too low!'
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dispalyMessage('🤯 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  // Set score to 20
  score = 20;
  document.querySelector('.score').textContent = score;
  // Reset secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  // Clear input, restore message and backround color
  document.querySelector('.guess').value = '';
  dispalyMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
});
