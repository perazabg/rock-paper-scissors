function getComputerChoice(){
    let cpuChoice
    randNum = Math.floor(Math.random()*(3-1+1))+1
    if(randNum = 1){
      cpuChoice = "rock";
    } else if(randNum = 2){
      cpuChoice = "paper";
    } else if(randNum = 3){
      cpuChoice = "scissors";
    }
    
    return cpuChoice;
}
  
  function playRound(playerSelection, cpuSelection){
    cpuSelection = getComputerChoice();
    let result
    if(playerSelection == "rock" && cpuSelection == "rock"){
      result = "Tie!"
    } else if()
  }

  
  