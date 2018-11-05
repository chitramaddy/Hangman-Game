// wordBank Array
var wordBank = [
  "afghanistan",
  "australia",
  "brazil",
  "canada",
  "china",
  "denmark",
  "egypt",
  "france",
  "greece",
  "germany",
  "india",
  "iran",
  "jamaica",
  "laos",
  "mexico",
  "norway",
  "peru",
  "russia",
  "saudi arabia",
  "united states",
  "venezuela"
];

// any references to HTML DOM Elements (reset button, area for writing stats, letter blanks)
var pickedWordPlaceholderHTML = document.getElementById("placeholder");
var guessedLettersHTML = document.getElementById("guessed");
var winsHTML = document.getElementById("wins");
var lossesHTML = document.getElementById("losses");
var guessesLeftHTML = document.getElementById("guessesLeft");
var startHTML = document.getElementById("start");

// variables
var pickedWord = "";
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLettersBank = [];
var gameRunning = false;
var wins = 0;
var losses = 0;
var guessesLeft = 10;

function newGame() {
  gameRunning = true;
  guessedLetterBank = [];
  incorrectLettersBank = [];
  guessesLeft = 10;

  pickedWordPlaceholderArr = [];

  //Pick a random word when a game begins and store it in pickedWord variable
  pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  //write placeholders to the length of pickeword to DOM. Write " " if there is a space between the words.
  for (var i = 0; i < pickedWord.length; i++) {
    if (pickedWord[i] === " ") {
      pickedWordPlaceholderArr.push(" ");
    } else {
      pickedWordPlaceholderArr.push("_");
    }
  }
  guessesLeftHTML.textContent = guessesLeft;
  pickedWordPlaceholderHTML.textContent = pickedWordPlaceholderArr.join("");
  guessedLettersHTML.textContent = guessedLetterBank;
}

function letterGuess(letter) {
  console.log(letter);
  if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
    guessedLetterBank.push(letter);

    guessedLettersHTML.textContent = incorrectLettersBank;
    guessesLeftHTML.textContent = guessesLeft;

    for (var i = 0; i < pickedWord.length; i++) {
      if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
        pickedWordPlaceholderArr[i] = pickedWord[i];
      }
    }
    pickedWordPlaceholderHTML.textContent = pickedWordPlaceholderArr.join("");

    checkIncorrect(letter);
  } else {
    if (gameRunning === false) {
      alert("The game is not running. Press Start to begin the game.");
    } else {
      alert("You already guessed this letter!");
    }
  }
}

function checkIncorrect(letter) {
  if (
    pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 &&
    pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1
  ) {
    guessesLeft--;
    incorrectLettersBank.push(letter);
    guessedLettersHTML.textContent = incorrectLettersBank.join(",");
    guessesLeftHTML.textContent = guessesLeft;
  }
  checkLoss();
}

function checkLoss() {
  if (guessesLeft === 0) {
    gameRunning = false;
    losses++;
    lossesHTML.textContent = losses;
    console.log(losses);
    pickedWordPlaceholderHTML.textContent = pickedWord;
  }
  checkWin();
}

function checkWin() {
  if (
    pickedWord.toLowerCase() === pickedWordPlaceholderArr.join("").toLowerCase()
  ) {
    gameRunning = false;
    wins++;
    winsHTML.textContent = wins;
  }
}

startHTML.addEventListener("click", newGame);

document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    letterGuess(event.key);
  }
};
