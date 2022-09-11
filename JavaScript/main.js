//* Variables
const container = document.querySelector(".container");
const username = document.getElementById("username");
const roundGame = document.getElementById("round-game");
const startButton = document.querySelector(".button");
const gamePage = document.querySelector(".game-page");
const userName = document.querySelector(".username");
const totalRounds = document.querySelector(".total-rounds");
const mediaQuery = matchMedia("(min-width: 481px");
const userImageChoice = document.getElementsByClassName("user-image-choice");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userImage = document.querySelector(".user-image");
const computerImage = document.querySelector(".computer-image");
const textResult = document.querySelector(".text-result");
const resultGame = document.querySelector(".result-game ");
const continueButton = document.querySelector(".continue-button");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const currentRound = document.querySelector(".current-round");
const roundsIteration = document.querySelector(".rounds-iteration");
const lastScorePlayer = document.querySelector(".last-score-player");
const lastScoreComputer = document.querySelector(".last-score-computer");
const resultsScore = document.querySelector(".results-score");
const resultTitle = document.querySelector(".result-title");
const newGame = document.querySelector(".new-game");
const restartButton = document.querySelector(".restart-button");
const userChoice = document.querySelector(".user-choice");
const computerChoose = document.querySelector(".computer-choice");
const finalResult = document.querySelector(".final-result");
const heading = document.querySelector(".heading");
const logo = document.querySelector(".logo");
let iteration;





const showGamePage = event => {
    
    iteration = 1;
    currentRound.innerText = iteration;
    event.preventDefault();
    gamePage.style.display = "flex";
    mediaQuery.matches ? gamePage.style.flexDirection = "row" : gamePage.style.flexDirection = "column";
    container.classList.add("none-display");
    username.value ? userName.innerText = username.value : userName.innerText = "Player";
    (roundGame.value >=1) ? totalRounds.innerText = roundGame.value : totalRounds.innerText = 5;
    username.value = "";
    roundGame.value = "";
    startButton.style.display = "none";
    gamePage.style.opacity = "1";
    restartButton.addEventListener("click", showLoginPage);
    continueButton.addEventListener("click", showContinueGame);
}

const showUserChoice = event => {
    const computerChoices = ["rock", "paper", "scissors"];
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];

    Array.prototype.forEach.call(userImageChoice, item => {
        item.removeEventListener("click", showUserChoice);
    });
    logo.style.animation = "none";
    heading.style.animation = "none";
    resultGame.style.visibility = "visible";
    mediaQuery.matches ? finalResult.style.animation = "show-computer-choice 3s 1" : finalResult.style.animation = "show-image 3s 1";
    mediaQuery.matches ? userChoice.style.animation = "show-user-choice-vertically 3s 1" : userChoice.style.animation = "show-user-choice 3s 1";
    mediaQuery.matches ? computerChoose.style.animation = "show-computer-choice-vertically 3s 1" : computerChoose.style.animation = "show-computer-choice 3s 1";
    // mediaQuery.matches ? resultGame.style.flexDirection = "column" : resultGame.style.flexDirection = "row";
    // mediaQuery.matches ? resultGame.style.justifyContent = "center" : resultGame.style.justifyContent = "space-between";
    // mediaQuery.matches ? resultGame.style.alignItems = "space-between" : resultGame.style.alignItems = "center";
    if (event.target.alt === "rock") {
        if (computerChoice === "rock") {
            userImage.src = "../Images/rock.jpg";
            computerImage.src = "../Images/rock.jpg";
            textResult.innerText = "You tie";
            textResult.classList.add("tie-result");
            textResult.classList.remove("win-result");
            textResult.classList.remove("loose-result");
        } else if (computerChoice === "paper") {
            textResult.classList.add("loose-result");
            textResult.classList.remove("win-result");
            textResult.classList.remove("tie-result");
            userImage.src = "../Images/rock-loose.png";
            computerImage.src = "../Images/paper-win.jpg";
            textResult.innerText = `${userName.innerText} loose`;
        } else {
            textResult.classList.add("win-result");
            textResult.classList.remove("tie-result");
            textResult.classList.remove("loose-result");
            userImage.src = "../Images/rock-win.jpg";
            computerImage.src = "../Images/scissors-lose.png";
            textResult.innerText = `${userName.innerText} win`;
        }
    } else if (event.target.alt === "paper") {
        if (computerChoice === "rock") {
            userImage.src = "../Images/paper-win.jpg";
            computerImage.src = "../Images/rock-loose.png";
            textResult.innerText = `${userName.innerText} win`;
            textResult.classList.add("win-result");
            textResult.classList.remove("tie-result");
            textResult.classList.remove("loose-result");
        } else if (computerChoice === "paper") {
            textResult.classList.add("tie-result");
            textResult.classList.remove("win-result");
            textResult.classList.remove("loose-result");
            userImage.src = "../Images/paper.jpg";
            computerImage.src = "../Images/paper.jpg";
            textResult.innerText = "You tie";
        } else {
            textResult.classList.add("loose-result");
            textResult.classList.remove("win-result");
            textResult.classList.remove("tie-result");
            userImage.src = "../Images/paper-loose.png";
            computerImage.src = "../Images/scissors-win.png";
            textResult.innerText = `${userName.innerText} loose`;
        }
    } else {
        if (computerChoice === "rock") {
            userImage.src = "../Images/scissors-lose.png";
            computerImage.src = "../Images/rock-win.jpg";
            textResult.innerText = `${userName.innerText} loose`;
            textResult.classList.add("loose-result");
            textResult.classList.remove("tie-result");
            textResult.classList.remove("win-result");
        } else if (computerChoice === "paper") {
            textResult.classList.add("win-result");
            textResult.classList.remove("tie-result");
            textResult.classList.remove("loose-result");
            userImage.src = "../Images/scissors-win.png";
            computerImage.src = "../Images/paper-loose.png";
            textResult.innerText = `${userName.innerText} win`;
        } else {
            textResult.classList.add("tie-result");
            textResult.classList.remove("win-result");
            textResult.classList.remove("loose-result");
            userImage.src = "../Images/scissors.jpg";
            computerImage.src = "../Images/scissors.jpg";
            textResult.innerText = "You tie";
        }
    }
}

const showContinueGame = event => {
    event.preventDefault();
    if (textResult.innerText === `${userName.innerText} win`) {
        playerScore.innerText++;
    } else if (textResult.innerText === `${userName.innerText} loose`) {
        computerScore.innerText++;
    }
    Array.prototype.forEach.call(userImageChoice, item => {
        item.addEventListener("click", showUserChoice);
    });
    
    resultGame.style.visibility = "hidden";
    userChoice.style.animation = "none";
    computerChoose.style.animation = "none";
    finalResult.style.animation = "none";
    iteration++;
    currentRound.innerText = iteration;
    if(playerScore.innerText > computerScore.innerText) {
        playerScore.style.background = "#70ff38";
        computerScore.style.background ="#ff3838";
    } else if (playerScore.innerText < computerScore.innerText) {
        playerScore.style.background = "#ff3838";
        computerScore.style.background ="#70ff38";
    } else {
        playerScore.style.background = "#fcff38";
        computerScore.style.background ="#fcff38";
    };
    if(iteration > totalRounds.innerText) {
        Array.prototype.forEach.call(userImageChoice, item => {
            item.removeEventListener("click", showUserChoice);
        });
        resultGame.style.visibility = "visible";
        continueButton.removeEventListener("click", showContinueGame);
        restartButton.removeEventListener("click", showLoginPage);
        currentRound.innerText = totalRounds.innerText;
        gamePage.style.opacity = "0.5";
        container.style.opacity = "0.5";
        resultsScore.style.display = "flex";
        resultsScore.style.flexDirection = "column";
        resultsScore.style.justifyContent = "center";
        resultsScore.style.alignItems = "center";
        lastScorePlayer.innerText = playerScore.innerText;
        lastScoreComputer.innerText = computerScore.innerText;
        if(lastScorePlayer.innerText > lastScoreComputer.innerText) {
            lastScorePlayer.style.background = "#70ff38";
            lastScoreComputer.style.background = "#ff3838";
            resultTitle.innerText = `${userName.innerText} win`;
        } else if(lastScorePlayer.innerText < lastScoreComputer.innerText) {
            lastScorePlayer.style.background = "#ff3838";
            lastScoreComputer.style.background = "#70ff38";
            resultTitle.innerText = "computer win";
        } else {
            lastScorePlayer.style.background = "#fcff38";
            lastScoreComputer.style.background = "#fcff38";
            resultTitle.innerText = "You tie";
        }
    }
}

const showLoginPage = event => {
    iteration = 1;
    currentRound.innerText = iteration;
    event.preventDefault();
    resultsScore.style.display = "none";
    gamePage.style.display = "none";
    container.classList.remove("none-display");
    startButton.style.display = "block";
    // resultGame.style.visibility = "visible";
    Array.prototype.forEach.call(userImageChoice, item => {
        item.addEventListener("click", showUserChoice);
    });
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    playerScore.style.background ="#fcff38";
    computerScore.style.background ="#fcff38";
    resultGame.style.visibility = "hidden";
    userChoice.style.animation = "none";
    computerChoose.style.animation = "none";
    finalResult.style.animation = "none";
    container.style.opacity = "1";
    heading.style.animation = "show-image 4s 1";
    logo.style.animation = "show-image 3s 1";
}

newGame.addEventListener("click", showLoginPage);

restartButton.addEventListener("click", showLoginPage);

continueButton.addEventListener("click", showContinueGame);

startButton.addEventListener("click", showGamePage);

Array.prototype.forEach.call(userImageChoice, item => {
    item.addEventListener("click", showUserChoice);
});