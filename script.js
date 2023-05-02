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
const gameOverScore = document.querySelector("#gameOverScore");


document.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    playRound(e.target.id, getComputerChoice());
  };
});

// function getPlayerChoice() {
  // return prompt("Choose rock, paper, or scissors").toLowerCase();
// };

function getComputerChoice() {
  return rps[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  const pChoice1 = "You chose:";
  let pChoice2 = playerSelection;
  const cChoice1 = "Computer chose:";
  let cChoice2 = computerSelection;
  const inputErr = "Input error. Try again."
  const rockWin = "Rock crushes scissors";
  const paperWin = "Paper covers rock";
  const scissorsWin = "Scissors cut paper";
  const winRound = "You win the round! ";
  const loseRound = "You lose the round! ";

  if (playerScore < 5 && computerScore < 5) {
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
      playerWin = "error";
      result1.textContent = inputErr;
      roundResultText.textContent = "";
    }
    else if (playerSelection === computerSelection) {
      playerWin = "tie";
      result1.textContent = "It's a tie!";
      roundResultText.textContent = "";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerWin = "win";
      result1.textContent = winRound;
      roundResultText.textContent = rockWin;
    } 
    else if (playerSelection === "paper" && computerSelection === "rock") {
      playerWin = "win";
      result1.textContent = winRound;
      roundResultText.textContent = paperWin;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerWin = "win";
      result1.textContent = winRound;
      roundResultText.textContent = scissorsWin;
    }
    else {
      playerWin = "lose";
      if (computerSelection === "rock") {
        result1.textContent = loseRound;
        roundResultText.textContent = rockWin;
      }
      else if (computerSelection === "paper") {
        result1.textContent = loseRound;
        roundResultText.textContent = paperWin;
      }
      else {
        result1.textContent = loseRound;
        roundResultText.textContent = scissorsWin;
      }
    }
    playerChoice1.textContent = pChoice1;
    playerChoice2.textContent = pChoice2;
    computerChoice1.textContent = cChoice1;
    computerChoice2.textContent = cChoice2;
    scoreTally();
  };
  
  if (playerScore === 5) {
    gameOverScore.textContent = "YOU WIN THE GAME!";
  }
  else if (computerScore === 5) {
    gameOverScore.textContent = "YOU LOSE THE GAME!";
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


// function game(n) {
//   // console.log("Playing " + n + " games! Here we go!");
//   let totalWin = 0;
//   let totalLose = 0;
//   let totalTie = 0;
//   for (let i = 0; i < n; i++) {
//     if (playerWin === "win") {
//       totalWin += 1;
//     }
//     else if (playerWin === "lose") {
//       totalLose += 1;
//     }
//     else if (playerWin === "tie") {
//       totalTie += 1;
//     }
//   }
//   if (totalWin > totalLose) {
//     return (
//       "You won " + totalWin + " of " + n + " games.\n" +
//       "The computer won " + totalLose + " of " + n + " games.\n" +
//       "You tied " + totalTie + " of " + n + " games.\n" +
//       "*****YOU WIN!*****"
//     );
//   }
//   else if (totalWin < totalLose) {
//     return (
//       "You won " + totalWin + " of " + n + " games.\n" +
//       "The computer won " + totalLose + " of " + n + " games.\n" +
//       "You tied " + totalTie + " of " + n + " games.\n" +
//       "*****YOU LOSE!*****"
//     );
//   }
//   else {
//     return (
//       "You won " + totalWin + " of " + n + " games.\n" +
//       "The computer won " + totalLose + " of " + n + " games.\n" +
//       "You tied " + totalTie + " of " + n + " games.\n" +
//       "*****YOU TIED!*****"
//     );
//   };
// };

// console.log(game(5));