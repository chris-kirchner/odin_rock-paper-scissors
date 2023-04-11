// User selects rock, paper, or scissors
// CPU selects rock, paper, or scissors
// check if user's selection beats CPU selection:
//   if user choice === CPU choice: tie
//   if rock: win if CPU chose scissors, lose if CPU chose paper
//   if paper: win if CPU chose rock, lose if CPU chose scissors
//   if scissors: win if CPU chose paper, lose if CPU chose rock
// game reset

const rps = ["rock", "paper", "scissors"];

let playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();

function getComputerChoice() {
  return rps[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors") {
    console.log("Input error. Did you spell something wrong, perhaps? Try again.");
    alert("Input error. Did you spell something wrong, perhaps? Try again.");
  }
  else if (playerSelection === computerSelection) {
    console.log("It's a tie!\nYou chose:", playerSelection, "Computer chose:", computerSelection);
    alert("It's a tie!\r", "You chose:", playerSelection, "Computer chose:", computerSelection);
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win!\nYou chose:", playerSelection, "Computer chose:", computerSelection);
    alert("You win!\r", "You chose:", playerSelection, "Computer chose:", computerSelection);
  } 
  else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win!\nYou chose:", playerSelection, "Computer chose:", computerSelection);
    alert("You win!\r", "You chose:", playerSelection, "Computer chose:", computerSelection);
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win!\nYou chose:", playerSelection, "Computer chose:", computerSelection);
    alert("You win!\r", "You chose:", playerSelection, "Computer chose:", computerSelection);
  }
  else {
    console.log("You lose!\nYou chose:", playerSelection, "Computer chose:", computerSelection);
    alert("You lose!\r", "You chose:", playerSelection, "Computer chose:", computerSelection);
  }
}

playRound(playerSelection, getComputerChoice());