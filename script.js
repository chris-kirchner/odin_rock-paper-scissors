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

let playerWin = "lose";

function playRound(playerSelection, computerSelection) {
  const resultMsg = "\nYou chose: " + playerSelection + "\n" + "Computer chose: " + computerSelection;
  const inputErr = "Input error. Try again."
  const rockWin = "Rock crushes scissors!";
  const paperWin = "Paper covers rock!";
  const scissorsWin = "Scissors cut paper!";
  
  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    playerWin = "error";
    return inputErr;
  }
  else if (playerSelection === computerSelection) {
    playerWin = "tie";
    return "It's a tie!" + resultMsg;
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWin = "win";
    return "You win! " + rockWin + resultMsg;
  } 
  else if (playerSelection === "paper" && computerSelection === "rock") {
    playerWin = "win";
    return "You win! " + paperWin + resultMsg;
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerWin = "win";
    return "You win! " + scissorsWin + resultMsg;
  }
  else {
    playerWin = "lose";
    if (computerSelection === "rock") {
      return "You lose! " + rockWin + resultMsg;
    }
    else if (computerSelection === "paper") {
      return "You lose! " + paperWin + resultMsg;
    }
    else {
      return "You lose! " + scissorsWin + resultMsg;
    }
  }
}

// console.log(playerWin);
// console.log(playRound(getPlayerChoice(), getComputerChoice()));

function game(n) {
  console.log("Playing " + n + " games! Here we go!");
  let totalWin = 0;
  let totalLose = 0;
  let totalTie = 0;
  for (let i = 0; i < n; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    if (playerWin === "win") {
      totalWin += 1;
    }
    else if (playerWin === "lose") {
      totalLose += 1;
    }
    else if (playerWin === "tie") {
      totalTie += 1;
    }
  }
  if (totalWin > totalLose) {
    return (
      "You won " + totalWin + " of " + n + " games.\n" +
      "The computer won " + totalLose + " of " + n + " games.\n" +
      "You tied " + totalTie + " of " + n + " games.\n" +
      "*****YOU WIN!*****"
    );
  }
  else if (totalWin < totalLose) {
    return (
      "You won " + totalWin + " of " + n + " games.\n" +
      "The computer won " + totalLose + " of " + n + " games.\n" +
      "You tied " + totalTie + " of " + n + " games.\n" +
      "*****YOU LOSE!*****"
    );
  }
  else {
    return (
      "You won " + totalWin + " of " + n + " games.\n" +
      "The computer won " + totalLose + " of " + n + " games.\n" +
      "You tied " + totalTie + " of " + n + " games.\n" +
      "*****YOU TIED!*****"
    );
  }
}

console.log(game(5));