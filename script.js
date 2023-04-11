// User selects rock, paper, or scissors
// CPU selects rock, paper, or scissors
// check if user's selection beats CPU selection:
//   if user choice === CPU choice: tie
//   if rock: win if CPU chose scissors, lose if CPU chose paper
//   if paper: win if CPU chose rock, lose if CPU chose scissors
//   if scissors: win if CPU chose paper, lose if CPU chose rock
// game reset

const rps = ["rock", "paper", "scissors"];

// let playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();

function getPlayerChoice () {
  return prompt("Choose rock, paper, or scissors").toLowerCase();
}

function getComputerChoice() {
  return rps[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  const resultMsg = "\nYou chose: " + playerSelection + "\n" + "Computer chose: " + computerSelection;
  const inputErr = "Input error. Try again."
  const rock = "Rock crushes scissors!";
  const paper = "Paper covers rock!";
  const scissors = "Scissors cut paper!";
  
  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    return inputErr;
  }
  else if (playerSelection === computerSelection) {
    return "It's a tie!" + resultMsg;
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! " + rock + resultMsg;
  } 
  else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! " + paper + resultMsg;
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! " + scissors + resultMsg;
  }
  else {
    if (computerSelection === "rock") {
      return "You lose! " + rock + resultMsg;
    }
    else if (computerSelection === "paper") {
      return "You lose! " + paper + resultMsg;
    }
    else {
      return "You lose! " + scissors + resultMsg;
    }
  }
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));