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

console.log(getComputerChoice());

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
console.log(getHumanChoice())