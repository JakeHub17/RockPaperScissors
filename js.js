playerScore = 0;
computerScore = 0;

function computerPlay(){                          /*generates and returns a random value form 1-3 and then comverts them to rock, paper or scissors */
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

function playRound(playerSelection,computerSelection){              /*uses the players choice and random value to run the game of RPS */
  playerSelection = playerSelection.toLowerCase();
  

   if (playerSelection == "rock" && computerSelection == "paper"){
     computerScore++;
     return "You Lose! Paper beats Rock!";
     }
     else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        return "You Win! Rock beats Scissors!";
     }
     else if (playerSelection == "rock" && computerSelection == "rock"){
        return "Tie Game!";
     }
     else if (playerSelection == "paper" && computerSelection == "paper"){
        return "Tie Game!";
     }
     else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        return "You Lose! Scissors beats Paper";
     }
     else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        return "You Win! Paper beats Rock!";
     }
     else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        return "You Win! Scissors beats Paper"
     }
     else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return "Tie Game!";
     }
     else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        return "You Lose! Rock beats Scissors";
     }
     else{
        return "Hmm.. I don't know that one. Please enter Rock, Paper or Scissors";
     }
}

/* calls functions above and uses their returned values to display score and results 
                                                          as well as the outcome of the game*/

function game(){                                     
  for(i=0;i<5;i++){
    while (playerScore != 5 && computerScore!=5){
      playerSelection = prompt("RPS?")
      console.log(playRound(playerSelection,computerPlay()))
      console.log("Your Score: "+playerScore)
      console.log("Computers Score: "+computerScore)
    }
  }
  if (playerScore == 5){
    return "You Beat The Computer! Go Humans!!"
  }
  else if (computerScore == 5){
    return "The Computer Wins... Better luck next time!"
  }
  
}



console.log(game())

