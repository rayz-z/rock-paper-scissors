let computerScore = 0;
let playerScore = 0;

function getComputerPlay() {
    let compOut = Math.random();
    if (compOut < 0.34) {
        return "rock";
    }
    else if ((compOut >= 0.34) && (compOut < 0.66)) {
        return "paper";
    }
    else {
        return "scissors";
    }
};

function getPlayerPlay() {
    let playerOut = prompt("Please choose rock, paper or scissors: ");
    playerOut.toLowerCase();
    return playerOut;
}

function playRound() {
    let computerPlay = getComputerPlay();
    let playerPlay = getPlayerPlay();

    if (playerPlay == computerPlay) {
        console.log("computer play: ", computerPlay);
        console.log("player play: ", playerPlay);
        return "tie"
    }    
    
    else if ((playerPlay == "rock") && (computerPlay == "scissors")) {
        console.log("computer play: ", computerPlay);
        console.log("player play: ", playerPlay);
        playerScore++;
        return "You Win!!"
    }

    else if ((playerPlay == "paper") && (computerPlay == "rock")) {
        console.log("computer play: ", computerPlay);
        console.log("player play: ", playerPlay);
        playerScore++;
        return "You Win!!"
    }

    else if ((playerPlay == "scissors") && (computerPlay == "paper")) {
        console.log("computer play: ", computerPlay);
        console.log("player play: ", playerPlay);
        playerScore++;
        return "You Win!!"
    }

    else if ((playerPlay == "scissors") && (computerPlay == "rock")) {
        console.log("computer play: ", computerPlay);
        console.log("player play: ", playerPlay);
        computerScore++;
        return "You Lose :("
    }

    else if ((playerPlay == "rock") && (computerPlay == "paper")) {
        console.log("computer play: ", computerPlay);
        console.log("player play: ", playerPlay);
        computerScore++;
        return "You Lose :("
    }

    else if ((playerPlay == "paper") && (computerPlay == "scissors")) {
        console.log("computer play: ", computerPlay);
        console.log("player play: ", playerPlay);
        computerScore++;
        return "You Lose :("
    }
}

function getScore() {
    console.log("Player score:", playerScore);
    console.log("Computer score", computerScore);
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    console.log("Scores reset")
}

function playGame() {
    for (let i=0; i < 5; i++) {
        playRound();
    }
    if (computerScore > playerScore) {
        console.log("You Lose!!");
        getScore();
    }
    else {
        console.log("You Win!!");
        getScore();
    }
    resetScore();
}