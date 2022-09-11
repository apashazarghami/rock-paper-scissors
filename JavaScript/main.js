//* Variables
const container = document.querySelector(".container");
const heading = document.querySelector(".heading");
const playName = document.querySelector(".wellcome-sheet").lastElementChild;
const inputUsername = document.getElementById("input-username");
const roundGame = document.getElementById("round-game");
const startButton = document.querySelector(".start-button");
const logo = document.querySelector(".logo");
const gamePage = document.querySelector(".game-page");
const username = document.querySelector(".username");
const playerScore = document.querySelector(".player-score");
const currentRound = document.querySelector(".current-round");
const totalRounds = document.querySelector(".total-rounds");
const computerScore = document.querySelector(".computer-score");
const userImageChoice = document.getElementsByClassName("user-image-choice");
const resultGame = document.querySelector(".result-game ");
const userChoice = document.querySelector(".user-choice");
const userImage = document.querySelector(".user-image");
const finalResult = document.querySelector(".final-result");
const textResult = document.querySelector(".text-result");
const continueButton = document.querySelector(".continue-button");
const restartButton = document.querySelector(".restart-button");
const computerChoose = document.querySelector(".computer-choice");
const computerImage = document.querySelector(".computer-image");
const resultsScore = document.querySelector(".results-score");
const resultTitle = document.querySelector(".result-title");
const lastScorePlayer = document.querySelector(".last-score-player");
const lastScoreComputer = document.querySelector(".last-score-computer");
const newGameButton = document.querySelector(".new-game-button");
const mediaQuery = matchMedia("(min-width: 481px)");
let iteration;
//* Functions
const showGamePage = (event) => {
  event.preventDefault();
  container.classList.add("none-display");
  gamePage.style.display = "flex";
  mediaQuery.matches
    ? (gamePage.style.flexDirection = "row")
    : (gamePage.style.flexDirection = "column");
  inputUsername.value
    ? (username.innerText = inputUsername.value)
    : (username.innerText = "Player");
  roundGame.value >= 1
    ? (totalRounds.innerText = roundGame.value)
    : (totalRounds.innerText = 5);
  iteration = 1;
  currentRound.innerText = iteration;
  inputUsername.value = "";
  roundGame.value = "";
  startButton.style.display = "none";
  logo.style.animation = "none";
  heading.style.animation = "none";
  playName.style.animation = "none";
  gamePage.style.opacity = "1";
  restartButton.addEventListener("click", showLoginPage);
  restartButton.style.cursor = "pointer";
  continueButton.addEventListener("click", showContinueGame);
  continueButton.style.cursor = "pointer";
};

const showUserChoice = (event) => {
  const computerChoices = ["rock", "paper", "scissors"];
  const computerChoice = computerChoices[Math.floor(Math.random() * 3)];
  resultGame.style.visibility = "visible";
  [...userImageChoice].forEach((item) => {
    item.removeEventListener("click", showUserChoice);
    item.style.cursor = "not-allowed";
  });
  mediaQuery.matches
    ? (userChoice.style.animation = "show-user-choice-vertically 3s 1")
    : (userChoice.style.animation = "show-user-choice 3s 1");
  mediaQuery.matches
    ? (finalResult.style.animation = "show-computer-choice 3s 1")
    : (finalResult.style.animation = "show-image 3s 1");
  mediaQuery.matches
    ? (computerChoose.style.animation = "show-computer-choice-vertically 3s 1")
    : (computerChoose.style.animation = "show-computer-choice 3s 1");
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
      textResult.innerText = `${username.innerText} loose`;
    } else {
      textResult.classList.add("win-result");
      textResult.classList.remove("tie-result");
      textResult.classList.remove("loose-result");
      userImage.src = "../Images/rock-win.jpg";
      computerImage.src = "../Images/scissors-lose.png";
      textResult.innerText = `${username.innerText} win`;
    }
  } else if (event.target.alt === "paper") {
    if (computerChoice === "rock") {
      userImage.src = "../Images/paper-win.jpg";
      computerImage.src = "../Images/rock-loose.png";
      textResult.innerText = `${username.innerText} win`;
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
      textResult.innerText = `${username.innerText} loose`;
    }
  } else {
    if (computerChoice === "rock") {
      userImage.src = "../Images/scissors-lose.png";
      computerImage.src = "../Images/rock-win.jpg";
      textResult.innerText = `${username.innerText} loose`;
      textResult.classList.add("loose-result");
      textResult.classList.remove("tie-result");
      textResult.classList.remove("win-result");
    } else if (computerChoice === "paper") {
      textResult.classList.add("win-result");
      textResult.classList.remove("tie-result");
      textResult.classList.remove("loose-result");
      userImage.src = "../Images/scissors-win.png";
      computerImage.src = "../Images/paper-loose.png";
      textResult.innerText = `${username.innerText} win`;
    } else {
      textResult.classList.add("tie-result");
      textResult.classList.remove("win-result");
      textResult.classList.remove("loose-result");
      userImage.src = "../Images/scissors.jpg";
      computerImage.src = "../Images/scissors.jpg";
      textResult.innerText = "You tie";
    }
  }
};
const showContinueGame = (event) => {
  event.preventDefault();
  if (textResult.innerText === `${username.innerText} win`) {
    playerScore.innerText++;
  } else if (textResult.innerText === `${username.innerText} loose`) {
    computerScore.innerText++;
  }
  [...userImageChoice].forEach((item) => {
    item.addEventListener("click", showUserChoice);
    item.style.cursor = "pointer";
  });
  resultGame.style.visibility = "hidden";
  userChoice.style.animation = "none";
  computerChoose.style.animation = "none";
  finalResult.style.animation = "none";
  iteration++;
  currentRound.innerText = iteration;
  if (playerScore.innerText > computerScore.innerText) {
    playerScore.style.background = "#70ff38";
    computerScore.style.background = "#ff3838";
  } else if (playerScore.innerText < computerScore.innerText) {
    playerScore.style.background = "#ff3838";
    computerScore.style.background = "#70ff38";
  } else {
    playerScore.style.background = "#fcff38";
    computerScore.style.background = "#fcff38";
  }
  if (iteration > totalRounds.innerText) {
    [...userImageChoice].forEach((item) => {
      item.removeEventListener("click", showUserChoice);
      item.style.cursor = "not-allowed";
    });
    resultGame.style.visibility = "visible";
    continueButton.removeEventListener("click", showContinueGame);
    continueButton.style.cursor = "not-allowed";
    restartButton.removeEventListener("click", showLoginPage);
    restartButton.style.cursor = "not-allowed";
    currentRound.innerText = totalRounds.innerText;
    gamePage.style.opacity = "0.5";
    container.style.opacity = "0.5";
    resultsScore.classList.remove("results-score-hidden");
    resultsScore.classList.add("results-score-show");
    lastScorePlayer.innerText = playerScore.innerText;
    lastScoreComputer.innerText = computerScore.innerText;
    if (lastScorePlayer.innerText > lastScoreComputer.innerText) {
      lastScorePlayer.style.background = "#70ff38";
      lastScoreComputer.style.background = "#ff3838";
      resultTitle.innerText = `${username.innerText} win`;
    } else if (lastScorePlayer.innerText < lastScoreComputer.innerText) {
      lastScorePlayer.style.background = "#ff3838";
      lastScoreComputer.style.background = "#70ff38";
      resultTitle.innerText = "computer win";
    } else {
      lastScorePlayer.style.background = "#fcff38";
      lastScoreComputer.style.background = "#fcff38";
      resultTitle.innerText = "You tie";
    }
  }
};
const showLoginPage = (event) => {
  event.preventDefault();
  iteration = 1;
  currentRound.innerText = iteration;
  resultsScore.classList.remove("results-score-show");
  resultsScore.classList.add("results-score-hidden");
  gamePage.style.display = "none";
  container.classList.remove("none-display");
  startButton.style.display = "block";
  [...userImageChoice].forEach((item) => {
    item.addEventListener("click", showUserChoice);
    item.style.cursor = "pointer";
  });
  playerScore.innerText = 0;
  computerScore.innerText = 0;
  playerScore.style.background = "#fcff38";
  computerScore.style.background = "#fcff38";
  resultGame.style.visibility = "hidden";
  userChoice.style.animation = "none";
  computerChoose.style.animation = "none";
  finalResult.style.animation = "none";
  container.style.opacity = "1";
  heading.style.animation = "show-image 4s 1";
  logo.style.animation = "show-image 3s 1";
  playName.style.animation = "show-computer-choice 3s 1";
};
//* Event listener
startButton.addEventListener("click", showGamePage);
Array.prototype.forEach.call(userImageChoice, (item) => {
  item.addEventListener("click", showUserChoice);
});
continueButton.addEventListener("click", showContinueGame);
restartButton.addEventListener("click", showLoginPage);
newGameButton.addEventListener("click", showLoginPage);
