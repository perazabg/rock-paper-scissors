let playerScore = 0;
let computerScore = 0;

// Function to get the computer's choice for the round
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a round of the game
function playRound() {
  const playerSelection = prompt("Type in your selection (Rock, Paper, or Scissors): ").toLowerCase();
  const computerSelection = getComputerChoice();
  let result;

  if (playerSelection === computerSelection) {
    result = "Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "You lose!";
    computerScore++;
  }

  console.log(result);
  console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);

  checkWin();
}

// Function to check if a player has reached the winning score
function checkWin() {
  if (playerScore === 5) {
    console.log("CPU defeated! You win!");
  } else if (computerScore === 5) {
    console.log("You lose! Game over!");
  } else {
    playRound();
  }
}

// Start the game
playRound();
