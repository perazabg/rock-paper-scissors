let playerScore = 0;
let computerScore = 0;

// Function to get the computer's choice for the round
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a round of the game
function playRound(playerSelection) {
  
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

  //console.log(result);
  //console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
  updateScore(playerScore, computerScore, result);
  checkWin();
}

// this function updates the score displayed on the screen
function updateScore(playerScore, computerScore, roundResult){
  const pScore = document.getElementById('player-score');
  const cpuScore = document.getElementById('computer-score');
  const result = document.getElementById('result');
  
  pScore.innerHTML = playerScore;
  cpuScore.innerHTML = computerScore;
  result.innerHTML = roundResult;
}
// Function to check if a player has reached the winning score
function checkWin() {
  if (playerScore === 5) {
    //console.log("CPU defeated! You win!");
    return endGame(); 
  } else if (computerScore === 5) {
    //console.log("You lose! Game over!");
    return endGame(); 
  }
}

// removes the buttons at the end of the game and adds option to restart game
function endGame(){
  rockBtn.remove();
  paperBtn.remove();
  scissorsBtn.remove();
  
  const scoreContainer = document.getElementById('scoreContainer');
  
  const endMsg = document.createElement('button');
  endMsg.classList.add('endMsg');
  endMsg.setAttribute('id', 'restartBtn');
  endMsg.textContent = 'Click to play again!'
  scoreContainer.appendChild(endMsg);
  
  endMsg.addEventListener('click', e => {
    location.reload();
  });
 
  
}

// start of game
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

function btnHandler(event){
  const playerSelection = event.target.innerHTML;
  playRound(playerSelection);
}

rockBtn.addEventListener('click', btnHandler);
paperBtn.addEventListener('click', btnHandler);
scissorsBtn.addEventListener('click', btnHandler); 
