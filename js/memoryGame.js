const cards = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐙",
  "🦑",
];

let flippedCards = [];
let matchedCards = [];
let currentPlayer = 1;

const grid = document.querySelector(".grid");
const turnDisplay = document.querySelector(".turn");
const restartBtn = document.querySelector(".restart-btn");

// Shuffle the cards array using the Fisher-Yates algorithm
const shuffleCards = (array) => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// Create a new card element with a given value
const createCardElement = (value) => {
  const card = document.createElement("div");
  card.classList.add("card", "hidden");
  card.dataset.value = value;
  card.innerText = value;
  card.addEventListener("click", handleCardClick);
  return card;
};

// Initialize the game board
const initGameBoard = () => {
  const shuffledCards = shuffleCards([...cards, ...cards]);
  for (let i = 0; i < shuffledCards.length; i++) {
    const card = createCardElement(shuffledCards[i]);
    grid.appendChild(card);
  }
  turnDisplay.innerText = `Player ${currentPlayer}'s turn`;
};

// Handle card click event
const handleCardClick = (event) => {
  const card = event.target;
  // Do nothing if the card is already flipped or matched
  if (flippedCards.includes(card) || matchedCards.includes(card)) {
    return;
  }
  // Flip the card
  card.classList.add("flipped");
  flippedCards.push(card);
  // Check if two cards have been flipped
  if (flippedCards.length === 2) {
    // Disable clicking on other cards while two are flipped
    grid.classList.add("no-click");
    // Check if the two flipped cards match
    if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
      // Add the cards to the matchedCards array
      matchedCards.push(...flippedCards);
      flippedCards = [];
      // Check if the game is over
      if (matchedCards.length === cards.length * 2) {
        turnDisplay.innerText = `Player ${currentPlayer} wins!`;
        // Disable clicking on cards after the game is over
        grid.classList.add("no-click");
      } else {
        // Enable clicking on other cards after a match
        grid.classList.remove("no-click");
      }
    } else {
      // If the cards don't match, wait for 1 second and then flip them back over
      setTimeout(() => {
        flippedCards.forEach((card) => card.classList.remove("flipped"));
        flippedCards = [];
        // Switch to the other player's turn
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        turnDisplay.innerText = `Player ${currentPlayer}'s turn`;
        // Enable clicking on other cards after flipping back
        grid.classList.remove("no-click");
      }, 1000);
    }
  }
};

// Handle restart button click event
const handleRestartClick = () => {
  // Clear the game board
  grid.innerHTML = "";
  // Reset game variables
  flippedCards = [];
  matchedCards = [];
  currentPlayer = 1;
  // Initialize the game board again
  initGameBoard();
};

// Add event listener to the restart button
restartBtn.addEventListener("click", handleRestartClick);

// Start the game by initializing the game board
initGameBoard();
