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

/*
function getPlayerPlay() {
    let playerOut;
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");

    rock.textContent = "rock";
    paper.textContent = "paper";
    scissors.textContent = "scissors";

    // add rock/paper/scissors buttons to div?
    
    rock.addEventListener("click", () => {
        playerOut = "rock"
    });
    paper.addEventListener("click", () => {
        playerOut = "paper"
    });
    scissors.addEventListener("click", () => {
        playerOut = "scissors"
    });
    return playerOut;
}
*/

function roundResult(playerPlay, computerPlay) {

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

/*
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
*/
const body = document.querySelector("body");
const compScore = document.querySelector("#compScore");
const playScore = document.querySelector("#playScore");

compScore.textContent = `computer score: ${playerScore}`;
playScore.textContent = `player score: ${computerScore}`;

const playBtn = document.querySelector("#playBtn");
playBtn.addEventListener("click", () => {
    let playerOut;
    let computerOut;
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");

    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);

    rock.textContent = "rock";
    paper.textContent = "paper";
    scissors.textContent = "scissors";

    // add rock/paper/scissors buttons to div?
    
    rock.addEventListener("click", () => {
        playerOut = "rock";
        computerOut = getComputerPlay();

        console.log(roundResult(computerOut, playerOut));
        /*
        const res = document.createElement("h3");
        res.textContent = 
        body.appendChild(res);
        */
       body.removeChild(rock);
       body.removeChild(paper);
       body.removeChild(scissors);

       compScore.textContent = `computer score: ${computerScore}`;
       playScore.textContent = `player score: ${playerScore}`;
       
    });
    paper.addEventListener("click", () => {
        playerOut = "paper";
        computerOut = getComputerPlay();

        console.log(roundResult(computerOut, playerOut));

        body.removeChild(rock);
        body.removeChild(paper);
        body.removeChild(scissors);

        compScore.textContent = `computer score: ${computerScore}`;
        playScore.textContent = `player score: ${playerScore}`;
        
    });
    scissors.addEventListener("click", () => {
        playerOut = "scissors";
        computerOut = getComputerPlay();

        console.log(roundResult(computerOut, playerOut));

        body.removeChild(rock);
        body.removeChild(paper);
        body.removeChild(scissors);

        compScore.textContent = `computer score: ${computerScore}`;
        playScore.textContent = `player score: ${playerScore}`;
        
    });
});

