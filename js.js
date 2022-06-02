function computerPlay(){
  let choice = Math.floor(Math.random()*3) +1
  if (choice == 1){
    return "rock";
  }
  else if (choice == 2){
    return "paper";
  }
  else if (choice == 3){
    return "scissors"
  } 
}

function playRound(playerSelection,computerSelection){
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection == "rock" && computerSelection == "paper"){
    return "You Lose! Paper beats Rock!"
  }
  else if (playerSelection == "rock" && computerSelection == "scissors"){
    return "You Win! Rock beats Scissors!"
  }
  else if (playerSelection == "rock" && computerSelection == "rock"){
    return "Tie Game!"
  }
  else if (playerSelection == "paper" && computerSelection == "paper"){
    return "Tie Game!"
  }
  else if (playerSelection == "paper" && computerSelection == "scissors"){
    return "You Lose! Scissors beats Paper"
  }
  else if (playerSelection == "paper" && computerSelection == "rock"){
    return "You Win! Paper beats Rock!"
  }
  else if (playerSelection == "scissors" && computerSelection == "paper"){
    return "You Win! Scissors beats Paper"
  }
  else if (playerSelection == "scissors" && computerSelection == "scissors"){
    return "Tie Game!"
  }
  else if (playerSelection == "scissors" && computerSelection == "rock"){
    return "You Lose! Rock beats Scissors"
  }

}

playerSelection = prompt("Rock, Paper or Scissors?")

console.log(playRound(playerSelection,computerPlay()));

