/* eslint-disable func-names */
const squares = document.querySelectorAll('.square');
const timeLeft = document.querySelector('[data-time]');
const score = document.querySelector('[data-score]');

let result = 0;
let hitPosition;
let timerId = null;
let currentTime = 60;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove('mole');
  });

  const randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');
  hitPosition = randomPosition.id;
}

squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      result += 1;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

// update timer
function countDown() {
  currentTime -= 1;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert(`your final score is ${result}`);
  }
}

const countDownTimerId = setInterval(countDown, 500);

// move mole
(function () {
  timerId = setInterval(randomSquare, 500);
}());
