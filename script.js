
const choices = document.querySelectorAll(".choice");
const resultText = document.getElementById("result");
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;


const choicesArray = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choicesArray[randomIndex];
}


function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "player";
    }
    return "computer";
}


function updateScore(winner) {
    if (winner === "player") {
        playerScore++;
        playerScoreText.textContent = playerScore;
        resultText.textContent = "You Win! 🎉";
        resultText.style.color = "green";
    } else if (winner === "computer") {
        computerScore++;
        computerScoreText.textContent = computerScore;
        resultText.textContent = "Computer Wins! 😢";
        resultText.style.color = "red";
    } else {
        resultText.textContent = "It's a Draw! 🤝";
        resultText.style.color = "black";
    }
}


function playGame(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    updateScore(winner);
}


choices.forEach(choice => {
    choice.addEventListener("click", playGame);
});
