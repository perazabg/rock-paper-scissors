function getComputerChoice(){
  let cpuChoice
  randNum = Math.floor(Math.random()*3)+1
  if(randNum == 1){
    cpuChoice = "rock";
  } else if(randNum == 2){
    cpuChoice = "paper";
  } else if(randNum == 3){
    cpuChoice = "scissors";
  }
  return cpuChoice;
}
  
function playRound(playerSelection, cpuSelection){
  cpuSelection = getComputerChoice();
  let result
  let pSelection = playerSelection.toLowerCase();
  if(pSelection == "rock" && cpuSelection == "rock"){
    result = "Tie!"
  } else if(pSelection == "rock" && cpuSelection == "paper"){
    result = "Paper beats Rock, You Lose!"
  } else if(pSelection == "rock" && cpuSelection == "scissors"){
    result = "Rock beats Scissors, You Win!"
  } else if(pSelection == "paper" && cpuSelection == "rock"){
    result = "Paper beats Rock, You Win!"
  } else if(pSelection == "paper" && cpuSelection == "paper"){
    result = "Tie!"
  } else if(pSelection == "paper" && cpuSelection == "scissors"){
    result = "Paper beats Rock, You Lose!"
  } else if(pSelection == "scissors" && cpuSelection == "rock"){
    result = "Rock beats Scissors, You Lose!"
  } else if(pSelection == "scissors" && cpuSelection == "paper"){
    result = "Scissors beats Paper, You Win!"
  } else if(pSelection == "scissors" && cpuSelection == "scissors"){
    result = "Tie"
  }
  return result;
}
  
function game(){
  for(i=0; i<5; i++){
    let userInput = prompt("Type in your selection (Rock, Paper, or Scissors): ")
    playRound();
  }
}  