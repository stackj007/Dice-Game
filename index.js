// create variable for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// create variables to store references to the necessary Dom nodes
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

function showDisplayBtn() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Score += randomNumber;
    player1Scoreboard.innerText = player1Score;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.innerText = "player 2 turn";
  } else {
    player2Score += randomNumber;
    player2Scoreboard.innerText = player2Score;
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.innerText = "player 1 turn";
  }

  if (player1Score >= 20) {
    message.innerText = "player 1 has won";
    showDisplayBtn();
  } else if (player2Score >= 20) {
    message.innerText = "player 2 has won";
    showDisplayBtn();
  }

  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", function () {
  resetGame();
});

function resetGame() {
  message.innerText = "player 1 turn";
  player1Score = 0;
  player1Scoreboard.innerText = player1Score;
  player2Score = 0;
  player2Scoreboard.innerText = player2Score;
  player1Dice.textContent = " ";
  player2Dice.textContent = " ";
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
  player1Turn = true;
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
}
