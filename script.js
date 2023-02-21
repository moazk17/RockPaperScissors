function getComputerSelection() {
    let choice =Math.floor(Math.random() * 3);
    let options = ['rock', 'paper', 'scissors'];
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player == computer) {
        return "It's a tie!";
    } else if (player == 'rock') {
        if (computer == 'paper') {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    } else if (player == 'paper') {
        if (computer == 'scissors') {
            return "You lose! Scissors beats Paper";
        } else {
            return "You win! Paper beats Rock";
        }
    } else if (player == 'scissors') {
        if (computer == 'rock') {
            return "You lose! Rock beats Scissors";
        } else {
            return "You win! Scissors beats Paper";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let computerSelection = getComputerSelection();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
}
}

game();