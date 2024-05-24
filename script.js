// Computer choice function

function getComputerChoice() {
    let computerRoll = Math.random() * 100;
    if (computerRoll <= 33) {
        return "rock"
    } else if (computerRoll <= 66 & computerRoll > 33) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Human choice function

function getHumanChoice() {
    let choice = prompt("Rock Paper or Scissors?").toLowerCase();
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    } else {
        alert("Input a valid answer");
        return getHumanChoice();
    }
}

// Declare players score variables

let humanScore = 0;
let computerScore = 0;

// Playing a round function

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") {
            return `You lose! Score is now Computer:${++computerScore} and Human:${humanScore}`;
    }else if (humanChoice === "rock" && computerChoice === "scissors" ||
              humanChoice === "paper" && computerChoice === "rock" ||
              humanChoice === "scissors" && computerChoice === "paper") {
                  return `You win! Score is now Computer:${computerScore} and Human:${++humanScore}`;
    }else {
        return `It's a tie! Score is now Computer:${computerScore} and Human:${humanScore}`
    }
}
// Play game 5 times

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    if (humanScore > computerScore) {
        return "Player wins";
    } else if (computerScore > humanScore) {
        return "Computer wins";
    } else {
        return "It's a tie"
    }
}

// Execute

console.log(playGame());