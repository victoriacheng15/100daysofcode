/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
const cardArray = [
  {
    name: 'coffee 1',
    img: 'images/coffee-1.webp',
  },
  {
    name: 'coffee 2',
    img: 'images/coffee-2.webp',
  },
  {
    name: 'coffee 3',
    img: 'images/coffee-3.webp',
  },
  {
    name: 'coffee 4',
    img: 'images/coffee-4.webp',
  },
  {
    name: 'coffee 5',
    img: 'images/coffee-5.webp',
  },
  {
    name: 'coffee 6',
    img: 'images/coffee-6.webp',
  },
  {
    name: 'coffee 7',
    img: 'images/coffee-7.webp',
  },
  {
    name: 'coffee 8',
    img: 'images/coffee-8.webp',
  },
  {
    name: 'coffee 1',
    img: 'images/coffee-1.webp',
  },
  {
    name: 'coffee 2',
    img: 'images/coffee-2.webp',
  },
  {
    name: 'coffee 3',
    img: 'images/coffee-3.webp',
  },
  {
    name: 'coffee 4',
    img: 'images/coffee-4.webp',
  },
  {
    name: 'coffee 5',
    img: 'images/coffee-5.webp',
  },
  {
    name: 'coffee 6',
    img: 'images/coffee-6.webp',
  },
  {
    name: 'coffee 7',
    img: 'images/coffee-7.webp',
  },
  {
    name: 'coffee 8',
    img: 'images/coffee-8.webp',
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const displayResult = document.querySelector('#result');
let pickedCard = [];
let pickedCardId = [];
const cardsWon = [];

function flipCard() {
  const cardId = this.getAttribute('data-id');
  pickedCardId.push(cardId);
  pickedCard.push(cardArray[cardId].name);
  this.setAttribute('src', cardArray[cardId].img);
  if (pickedCard.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll('.grid img');
  const optionOneId = pickedCardId[0];
  const optionTwoId = pickedCardId[1];

  const sameCardOne = pickedCard[0];
  const sameCardTwo = pickedCard[1];

  if (sameCardOne === sameCardTwo) {
    alert('you found a match!');
    cards[optionOneId].setAttribute('src', 'images/match.png');
    cards[optionTwoId].setAttribute('src', 'images/match.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(pickedCard);
  } else {
    alert('sorry try again!');
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
  }
  displayResult.textContent = cardsWon.length;
  pickedCard = [];
  pickedCardId = [];

  if (cardsWon.length === (cardArray.length / 2)) {
    displayResult.textContent = 'Congratulation you found them all!';
  }
}

// create game board
(function () {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  }
}());
