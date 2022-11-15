const container = document.querySelector(".container");
const startButton = document.querySelector(".start-button");
const gamePage = document.querySelector(".game-page");
const username = document.querySelector(".username");
const playerScore = document.querySelector(".player-score");
const currentRound = document.querySelector(".current-round");
const totalRounds = document.querySelector(".total-rounds");
const computerScore = document.querySelector(".computer-score");
const userImageChoice = document.getElementsByClassName("user-image-choice");
const userChoice = document.querySelector(".user-choice");
const finalResult = document.querySelector(".final-result");
const textResult = document.querySelector(".text-result");
const continueButton = document.querySelector(".continue-button");
const restartButton = document.querySelector(".restart-button");
const computerChoose = document.querySelector(".computer-choice");
const lastScorePlayer = document.querySelector(".last-score-player");
const lastScoreComputer = document.querySelector(".last-score-computer");
const newGameButton = document.querySelector(".new-game-button");
const mediaQuery = matchMedia("(min-width: 481px)");
let iteration;

const showInformation = () => {
  const inputUsername = document.getElementById("input-username");
  const roundGame = document.getElementById("round-game");
  inputUsername.value
    ? (username.innerText = inputUsername.value)
    : (username.innerText = "Player");
  roundGame.value >= 1
    ? (totalRounds.innerText = roundGame.value)
    : (totalRounds.innerText = 5);
  inputUsername.value = "";
  roundGame.value = "";
};

const animationHandler = (logoCondition, headingCondition, playCondition) => {
  const logo = document.querySelector(".logo");
  const heading = document.querySelector(".heading");
  const playName = document.querySelector(".wellcome-sheet").lastElementChild;
  logo.style.animation = logoCondition;
  heading.style.animation = headingCondition;
  playName.style.animation = playCondition;
};

const opacityHandler = (gamePageOpacity, containerOpacity) => {
  gamePage.style.opacity = gamePageOpacity;
  container.style.opacity = containerOpacity;
};

const cursorHandler = (restart, continues) => {
  restartButton.style.cursor = restart;
  continueButton.style.cursor = continues;
};

const addEventListenerHandler = () => {
  restartButton.addEventListener("click", showLoginPage);
  continueButton.addEventListener("click", showContinueGame);
};

const conditionalResultHandler = (
  text,
  addedclass,
  removedClass,
  removeClass
) => {
  textResult.innerText = text;
  textResult.classList.add(addedclass);
  textResult.classList.remove(removeClass, removedClass);
};

const conditionalImageHandler = (userImageSrc, computerImageSrc) => {
  const computerImage = document.querySelector(".computer-image");
  const userImage = document.querySelector(".user-image");
  userImage.src = userImageSrc;
  computerImage.src = computerImageSrc;
};

const conditionalHandler = (playerChoice) => {
  const computerChoices = ["rock", "paper", "scissors"];
  const computerChoice = computerChoices[Math.floor(Math.random() * 3)];
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      conditionalResultHandler(
        "You tie",
        "tie-result",
        "win-result",
        "loose-result"
      );
      conditionalImageHandler("./Images/rock.jpg", "./Images/rock.jpg");
    } else if (computerChoice === "paper") {
      conditionalResultHandler(
        `${username.innerText} loose`,
        "loose-result",
        "win-result",
        "tie-result"
      );
      conditionalImageHandler(
        "./Images/rock-loose.png",
        "./Images/paper-win.jpg"
      );
    } else {
      conditionalResultHandler(
        `${username.innerText} win`,
        "win-result",
        "tie-result",
        "loose-result"
      );
      conditionalImageHandler(
        "./Images/rock-win.jpg",
        "./Images/scissors-lose.png"
      );
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      conditionalResultHandler(
        `${username.innerText} win`,
        "win-result",
        "tie-result",
        "loose-result"
      );
      conditionalImageHandler(
        "./Images/paper-win.jpg",
        "./Images/rock-loose.png"
      );
    } else if (computerChoice === "paper") {
      conditionalResultHandler(
        "You tie",
        "tie-result",
        "win-result",
        "loose-result"
      );
      conditionalImageHandler("./Images/paper.jpg", "./Images/paper.jpg");
    } else {
      conditionalResultHandler(
        `${username.innerText} loose`,
        "loose-result",
        "win-result",
        "tie-result"
      );
      conditionalImageHandler(
        "./Images/paper-loose.png",
        "./Images/scissors-win.png"
      );
    }
  } else {
    if (computerChoice === "rock") {
      conditionalResultHandler(
        `${username.innerText} loose`,
        "loose-result",
        "tie-result",
        "win-result"
      );
      conditionalImageHandler(
        "./Images/scissors-lose.png",
        "./Images/rock-win.jpg"
      );
    } else if (computerChoice === "paper") {
      conditionalResultHandler(
        `${username.innerText} win`,
        "win-result",
        "tie-result",
        "loose-result"
      );
      conditionalImageHandler(
        "./Images/scissors-win.png",
        "./Images/paper-loose.png"
      );
    } else {
      conditionalResultHandler(
        "You tie",
        "tie-result",
        "win-result",
        "loose-result"
      );
      conditionalImageHandler("./Images/scissors.jpg", "./Images/scissors.jpg");
    }
  }
};

const textResultHandler = () => {
  if (textResult.innerText === `${username.innerText} win`) {
    playerScore.innerText++;
  } else if (textResult.innerText === `${username.innerText} loose`) {
    computerScore.innerText++;
  }
};

const visibilityAndAnimationHandler = (
  resultGameVisibility,
  userComputerFinalChoiceAnimation
) => {
  const resultGame = document.querySelector(".result-game ");
  resultGame.style.visibility = resultGameVisibility;
  userChoice.style.animation = userComputerFinalChoiceAnimation;
  computerChoose.style.animation = userComputerFinalChoiceAnimation;
  finalResult.style.animation = userComputerFinalChoiceAnimation;
};

const conditionalBackgroundHandler = (winColor, tieColor, looseColor) => {
  if (Number(playerScore.innerText) > Number(computerScore.innerText)) {
    playerScore.style.background = winColor;
    computerScore.style.background = looseColor;
  } else if (Number(playerScore.innerText) < Number(computerScore.innerText)) {
    playerScore.style.background = looseColor;
    computerScore.style.background = winColor;
  } else {
    playerScore.style.background = tieColor;
    computerScore.style.background = tieColor;
  }
};

const removeEventListenerHandler = () => {
  continueButton.removeEventListener("click", showContinueGame);
  restartButton.removeEventListener("click", showLoginPage);
};

const resultsScoreClassHandler = (addedclass, removedClass) => {
  const resultsScore = document.querySelector(".results-score");
  resultsScore.classList.add(addedclass);
  resultsScore.classList.remove(removedClass);
};

const scoreTextHandler = () => {
  lastScorePlayer.innerText = playerScore.innerText;
  lastScoreComputer.innerText = computerScore.innerText;
};

const lastScoreDisplayHandler = (playerColor, computerColor, text) => {
  const resultTitle = document.querySelector(".result-title");
  lastScorePlayer.style.background = playerColor;
  lastScoreComputer.style.background = computerColor;
  resultTitle.innerText = text;
};

const lastScoreHandler = () => {
  if (lastScorePlayer.innerText > lastScoreComputer.innerText) {
    lastScoreDisplayHandler("#70ff38", "#ff3838", `${username.innerText} win`);
  } else if (lastScorePlayer.innerText < lastScoreComputer.innerText) {
    lastScoreDisplayHandler("#ff3838", "#70ff38", "computer win");
  } else {
    lastScoreDisplayHandler("#fcff38", "#fcff38", "You tie");
  }
};

const conditionalTotalRounds = () => {
  if (iteration > totalRounds.innerText) {
    [...userImageChoice].forEach((item) => {
      item.removeEventListener("click", showUserChoice);
      item.style.cursor = "not-allowed";
    });
    visibilityAndAnimationHandler("visible");
    removeEventListenerHandler();
    cursorHandler("not-allowed", "not-allowed");
    currentRound.innerText = totalRounds.innerText;
    opacityHandler(0.5, 0.5);
    resultsScoreClassHandler("results-score-show", "results-score-hidden");
    scoreTextHandler();
    lastScoreHandler();
  }
};

const showLoginPageHandler = () => {
  resultsScoreClassHandler("results-score-hidden", "results-score-show");
  gamePage.style.display = "none";
  container.classList.remove("none-display");
  startButton.style.display = "block";
};

const loginPageScoreHandler = () => {
  playerScore.innerText = 0;
  computerScore.innerText = 0;
  playerScore.style.background = "#fcff38";
  computerScore.style.background = "#fcff38";
};

const showGamePage = () => {
  container.classList.add("none-display");
  gamePage.style.display = "flex";
  mediaQuery.matches
    ? (gamePage.style.flexDirection = "row")
    : (gamePage.style.flexDirection = "column");
  showInformation();
  opacityHandler(1);
  iteration = 1;
  currentRound.innerText = iteration;
  startButton.style.display = "none";
  animationHandler("none", "none", "none");
  addEventListenerHandler();
  cursorHandler("pointer", "pointer");
};

const showUserChoice = (event) => {
  visibilityAndAnimationHandler("visible");
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
  conditionalHandler(event.target.alt);
};

const showContinueGame = (event) => {
  event.preventDefault();
  textResultHandler();
  [...userImageChoice].forEach((item) => {
    item.addEventListener("click", showUserChoice);
    item.style.cursor = "pointer";
  });
  visibilityAndAnimationHandler("hidden", "none");
  iteration++;
  currentRound.innerText = iteration;
  conditionalBackgroundHandler("#70ff38", "#fcff38", "#ff3838");
  conditionalTotalRounds();
};

const showLoginPage = (event) => {
  event.preventDefault();
  iteration = 1;
  currentRound.innerText = iteration;
  showLoginPageHandler();
  [...userImageChoice].forEach((item) => {
    item.addEventListener("click", showUserChoice);
    item.style.cursor = "pointer";
  });
  loginPageScoreHandler();
  visibilityAndAnimationHandler("hidden", "none");
  opacityHandler("", 1);
  animationHandler(
    "show-image 3s 1",
    "show-image 4s 1",
    "show-computer-choice 3s 1"
  );
};

startButton.addEventListener("click", showGamePage);
Array.prototype.forEach.call(userImageChoice, (item) => {
  item.addEventListener("click", showUserChoice);
});
continueButton.addEventListener("click", showContinueGame);
restartButton.addEventListener("click", showLoginPage);
newGameButton.addEventListener("click", showLoginPage);
