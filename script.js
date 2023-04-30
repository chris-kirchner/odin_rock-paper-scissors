// User selects rock, paper, or scissors
// CPU selects rock, paper, or scissors
// check if user's selection beats CPU selection:
//   if user choice === CPU choice: tie
//   if rock: win if CPU chose scissors, lose if CPU chose paper
//   if paper: win if CPU chose rock, lose if CPU chose scissors
//   if scissors: win if CPU chose paper, lose if CPU chose rock
// game reset

const rps = ["rock", "paper", "scissors"];

document.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    playRound(e.target.id, getComputerChoice());
  };
});

function getPlayerChoice() {
  // return prompt("Choose rock, paper, or scissors").toLowerCase();
};


function getComputerChoice() {
  return rps[Math.floor(Math.random() * 3)];
}

let playerWin = "lose";
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const result3 = document.querySelector("#result3");


function playRound(playerSelection, computerSelection) {
  const playerChoice = "You chose: " + playerSelection;
  const computerChoice = "Computer chose: " + computerSelection;
  const inputErr = "Input error. Try again."
  const rockWin = "Rock crushes scissors!";
  const paperWin = "Paper covers rock!";
  const scissorsWin = "Scissors cut paper!";
  
  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    playerWin = "error";
    result1.textContent = inputErr;
  }
  else if (playerSelection === computerSelection) {
    playerWin = "tie";
    result1.textContent = "It's a tie!";
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWin = "win";
    result1.textContent = "You win! " + rockWin;
  } 
  else if (playerSelection === "paper" && computerSelection === "rock") {
    playerWin = "win";
    result1.textContent = "You win! " + paperWin;
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerWin = "win";
    result1.textContent = "You win! " + scissorsWin;
  }
  else {
    playerWin = "lose";
    if (computerSelection === "rock") {
      result1.textContent = "You lose! " + rockWin;
    }
    else if (computerSelection === "paper") {
      result1.textContent = "You lose! " + paperWin;
    }
    else {
      result1.textContent = "You lose! " + scissorsWin;
    }
  }
  result2.textContent = playerChoice;
  result3.textContent = computerChoice;
}

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

// console.log(game(1));