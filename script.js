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
        return "Input a valid answer"
    }
}

// Declare players score variables

let humanScore = 0;
let computerScore = 0;

// Playing a round function

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") {
            return "You lose! lol!";
    }else if (humanChoice === "rock" && computerChoice === "scissors" ||
              humanChoice === "paper" && computerChoice === "rock" ||
              humanChoice === "scissors" && computerChoice === "paper") {
                  return "You win!";
    }else {
        return "It's a tie!"
    }
    

}

console.log(playRound())
