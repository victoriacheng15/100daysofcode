/* eslint-disable no-use-before-define */
/* eslint-disable default-case */
/* eslint-disable prefer-const */
const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('[data-score]');

const boardWidth = grid.getBoundingClientRect().width;
const boardHeight = grid.getBoundingClientRect().height;
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
let xDirection = -2;
let yDirection = 2;

const userStart = [230, 10];
let currenPos = userStart;

const ballStart = [270, 40];
let ballCurrentPos = ballStart;

let timerId;
let score = 0;

// create block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    this.topLeft = [xAxis, yAxis + blockHeight];
  }
}

// all blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

// draw blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i += 1) {
    const block = document.createElement('div');
    const theBlock = blocks[i];
    block.classList.add('block');
    block.style.left = `${theBlock.bottomLeft[0]}px`;
    block.style.bottom = `${theBlock.bottomLeft[1]}px`;
    grid.appendChild(block);
  }
}

addBlocks();

// add user
const user = document.createElement('div');
user.classList.add('user');
// draw user
function drawUser() {
  user.style.left = `${currenPos[0]}px`;
  user.style.bottom = `${currenPos[1]}px`;
}
// user
drawUser();
grid.appendChild(user);

// move user
function moveUser(e) {
  switch (e.key) {
    case 'ArrowLeft':
      if (currenPos[0] > 0) {
        currenPos[0] -= 10;
        drawUser();
      }
      break;
    case 'ArrowRight':
      if (currenPos[0] < boardWidth - blockWidth) {
        currenPos[0] += 10;
        drawUser();
      }
      break;
  }
}

// add ball
const ball = document.createElement('div');
ball.classList.add('ball');
// draw ball
function drawBall() {
  ball.style.left = `${ballCurrentPos[0]}px`;
  ball.style.bottom = `${ballCurrentPos[1]}px`;
}
// ball
drawBall();
grid.appendChild(ball);

function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
    return;
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
  }
}

// move ball
function moveBall() {
  ballCurrentPos[0] += xDirection;
  ballCurrentPos[1] += yDirection;
  drawBall();
  checkForCollisions();
}

timerId = setInterval(moveBall, 15);

// check for collisions
function checkForCollisions() {
  // check for block collisions
  for (let i = 0; i < blocks.length; i += 1) {
    if (
      (ballCurrentPos[0] > blocks[i].bottomLeft[0]
      && ballCurrentPos[0] < blocks[i].bottomRight[0])
      && ((ballCurrentPos[1] + ballDiameter) > blocks[i].bottomLeft[1]
      && ballCurrentPos[1] < blocks[i].topLeft[1])
    ) {
      const allBlocks = [...document.querySelectorAll('.block')];
      allBlocks[i].classList.remove('block');
      blocks.splice(i, 1);
      changeDirection();
      score += 1;
      scoreDisplay.textContent = score;

      // check for win
      if (blocks.length === 0) {
        scoreDisplay.textContent = 'you win!';
        clearInterval(timerId);
        document.removeEventListener('keydown', moveBall);
      }
    }
  }

  // check for wall collisions
  if (ballCurrentPos[0] >= (boardWidth - ballDiameter)
      || ballCurrentPos[1] >= (boardWidth - ballDiameter)
      || ballCurrentPos[0] <= 0
      || ballCurrentPos[1] >= (boardHeight - ballDiameter)
  ) {
    changeDirection();
  }

  // check for user collisions
  if (
    (ballCurrentPos[0] > currenPos[0]
      && ballCurrentPos[0] < currenPos[0] + blockWidth)
      && (ballCurrentPos[1] > currenPos[1]
      && ballCurrentPos[1] < currenPos[1] + blockHeight)
  ) {
    changeDirection();
  }

  // check for game over
  if (ballCurrentPos[1] <= 0) {
    clearInterval(timerId);
    scoreDisplay.textContent = 'you lost';
    document.removeEventListener('keydown', moveBall);
  }
}

// event listener
document.addEventListener('keydown', moveUser);
