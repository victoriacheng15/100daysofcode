const displayComputerChoice = document.getElementById('computer-choice');
const displayUserChoice = document.getElementById('user-choice');
const displayResult = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

function getResult() {
  // eslint-disable-next-line default-case
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rocksicssors':
    case 'paperrock':
      result = 'you win!';
      break;
    case 'papersicssors':
    case 'scissorsrock':
    case 'rockpaper':
      result = 'you lost!';
      break;
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
      result = 'it is a draw!';
      break;
  }

  // if (computerChoice === userChoice) {
  //   result = 'its a draw!';
  // }
  // if (computerChoice === 'rock' && userChoice === 'paper') {
  //   result = 'you win!';
  // }
  // if (computerChoice === 'rock' && userChoice === 'scissors') {
  //   result = 'you lost!';
  // }
  // if (computerChoice === 'paper' && userChoice === 'scissors') {
  //   result = 'you win!';
  // }
  // if (computerChoice === 'paper' && userChoice === 'rock') {
  //   result = 'you lose!';
  // }
  // if (computerChoice === 'scissors' && userChoice === 'rock') {
  //   result = 'you win!';
  // }
  // if (computerChoice === 'scissors' && userChoice === 'paper') {
  //   result = 'you lose!';
  // }

  displayResult.textContent = result;
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 300);

  switch (randomNumber % 3) {
    case 0:
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice = 'scissors';
      break;
    default:
      computerChoice = 'paper';
      break;
  }

  // if (randomNumber % 3 === 0) {
  //   computerChoice = 'rock';
  // } else if (randomNumber % 3 === 1) {
  //   computerChoice = 'scissors';
  // } else {
  //   computerChoice = 'paper';
  // }

  displayComputerChoice.textContent = computerChoice;
}

function displayUserDecision(e) {
  userChoice = e.target.id;
  displayUserChoice.textContent = userChoice;
}

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    displayUserDecision(e);
    generateComputerChoice();
    getResult();
  })
);
