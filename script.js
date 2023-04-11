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
  
  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    console.log(inputErr);
    alert(inputErr);
  }
  else if (playerSelection === computerSelection) {
    console.log("It's a tie!" + resultMsg);
    alert("It's a tie!" + resultMsg);
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win!" + resultMsg);
    alert("You win!" + resultMsg);
  } 
  else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win!" + resultMsg);
    alert("You win!" + resultMsg);
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win!" + resultMsg);
    alert("You win!" + resultMsg);
  }
  else {
    console.log("You lose!" + resultMsg);
    alert("You lose!" + resultMsg);
  }
}

playRound(getPlayerChoice(), getComputerChoice());