// User selects rock, paper, or scissors
// CPU selects rock, paper, or scissors
// check if user's selection beats CPU selection:
//   if user choice === CPU choice: tie
//   if rock: win if CPU chose scissors, lose if CPU chose paper
//   if paper: win if CPU chose rock, lose if CPU chose scissors
//   if scissors: win if CPU chose paper, lose if CPU chose rock
// game reset

const rps = ["rock", "paper", "scissors"];
let playerWin = "lose";
let totalWin = 0;
let totalLose = 0;
let totalTie = 0;
let playerScore = 0;
let computerScore = 0;
const result1 = document.querySelector("#result1");
const roundResultText = document.querySelector("#roundResultText");
const playerChoice1 = document.querySelector("#playerChoice1");
const playerChoice2 = document.querySelector("#playerChoice2");
const computerChoice1 = document.querySelector("#computerChoice1");
const computerChoice2 = document.querySelector("#computerChoice2")
const result3 = document.querySelector("#result3");
const result4 = document.querySelector("#result4");
const pScore = document.querySelector("#playerScore");
const cScore = document.querySelector("#computerScore");
const gameOverMsg = document.querySelector("#gameOverMsg");


document.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    playRound(e.target.id, getComputerChoice());
  };
});

function getComputerChoice() {
  return rps[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  const pChoice1 = "You chose:";
  let pChoice2 = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  const cChoice1 = "Computer chose:";
  let cChoice2 = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
  const inputErr = "Input error. Try again."
  const rockWin = "Rock crushes Scissors";
  const rockLose = "Rock covered by Paper"
  const paperWin = "Paper covers Rock";
  const paperLose = "Paper cut by Scissors";
  const scissorsWin = "Scissors cut Paper";
  const scissorsLose = "Scissors crushed by Rock";
  const winRound = "You win the round!";
  const loseRound = "You lose the round!";

  if (playerScore < 5 && computerScore < 5) {
    result1.classList.remove("green");
    result1.classList.remove("red");
    playerChoice1.classList.remove("shaded");
    playerChoice2.classList.remove("shaded");
    playerChoice1.classList.remove("highlight");
    playerChoice2.classList.remove("highlight");
    computerChoice1.classList.remove("shaded");
    computerChoice2.classList.remove("shaded");
    computerChoice1.classList.remove("highlight");
    computerChoice2.classList.remove("highlight");
    gameOverMsg.classList.remove("win");
    gameOverMsg.classList.remove("lose");

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
      playerWin = "error";
      result1.textContent = inputErr;
      roundResultText.textContent = "";
    }
    else if (playerSelection === computerSelection) {
      playerWin = "tie";
      result1.textContent = "It's a tie!";
      roundResultText.textContent = pChoice2 + " bounces off " + cChoice2;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerWin = "win";
      playerChoice1.classList.add("highlight");
      playerChoice2.classList.add("highlight");
      computerChoice1.classList.add("shaded");
      computerChoice2.classList.add("shaded");
      result1.textContent = winRound;
      result1.classList.add("green");
      roundResultText.textContent = rockWin;
    } 
    else if (playerSelection === "paper" && computerSelection === "rock") {
      playerWin = "win";
      playerChoice1.classList.add("highlight");
      playerChoice2.classList.add("highlight");
      computerChoice1.classList.add("shaded");
      computerChoice2.classList.add("shaded");
      result1.textContent = winRound;
      result1.classList.add("green");
      roundResultText.textContent = paperWin;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerWin = "win";
      playerChoice1.classList.add("highlight");
      playerChoice2.classList.add("highlight");
      computerChoice1.classList.add("shaded");
      computerChoice2.classList.add("shaded");
      result1.textContent = winRound;
      result1.classList.add("green");
      roundResultText.textContent = scissorsWin;
    }
    else {
      playerChoice1.classList.add("shaded");
      playerChoice2.classList.add("shaded");
      computerChoice1.classList.add("highlight");
      computerChoice2.classList.add("highlight");
      playerWin = "lose";
      result1.textContent = loseRound;
      result1.classList.add("red");

      if (computerSelection === "rock") {
        roundResultText.textContent = scissorsLose;
      }
      else if (computerSelection === "paper") {
        roundResultText.textContent = rockLose;
      }
      else {
        roundResultText.textContent = paperLose;
      }
    }
    playerChoice1.textContent = pChoice1;
    playerChoice2.textContent = pChoice2;
    computerChoice1.textContent = cChoice1;
    computerChoice2.textContent = cChoice2;
    scoreTally();
  };
  
  if (playerScore === 5) {
    gameOverMsg.classList.add("win");
    gameOverMsg.textContent = "YOU WIN THE GAME!";
  }
  else if (computerScore === 5) {
    gameOverMsg.classList.add("lose");
    gameOverMsg.textContent = "YOU LOSE THE GAME!";
  }
  console.log("Player:" + playerScore, "Computer:" + computerScore, "Tie:" + totalTie);
};

function scoreTally() {
  if (playerWin === "win") {
    totalWin += 1;
    playerScore += 1;
    pScore.textContent = playerScore;
  }
  else if (playerWin === "lose") {
    totalLose += 1;
    computerScore += 1;
    cScore.textContent = computerScore;
  }
  else if (playerWin === "tie") {
    totalTie += 1;
  };
};