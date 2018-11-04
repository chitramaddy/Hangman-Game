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
var guessesleftHTML = document.getElementById("guessesleft");
var startHTML = document.getElementById("start");

// variables
var pickedWord = "";
var pickedWordPlaceholderArr = [];
var guessedLetters = [];
var incorrectLetters = [];
var gameRunning = false;
var wins = 0;
var losses = 0;
var guessesleft = 10;

function newGame() {
  gameRunning = true;
  guessedLetterBank = [];
  guessesleft = 10;

  pickedWordPlaceholderArr = [];

  //Pick a random word when a game begins and store it in pickedWord variable
  pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(pickedWord);

  //write placeholders to the length of pickeword to DOM. Write " " if there is a space between the words.
  for (var i = 0; i < pickedWord.length; i++) {
    if (pickedWord[i] === " ") {
      pickedWordPlaceholderArr.push(" ");
    } else {
      pickedWordPlaceholderArr.push("_");
    }
    pickedWordPlaceholderHTML.textContent = pickedWordPlaceholderArr.join("");
  }
}

function letterGuess(letter) {
  console.log(letter);
  if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
    guessedLetterBank.push(letter);

    guessedLettersHTML = guessedLetterBank;
    guessesleftHTML = guessesleft;

    for (var i = 0; i < pickedWord.length; i++) {
      if (pickedWord[i] === letter.toLowerCase()) {
        pickedWordPlaceholderArr[i] = pickedWord[i];
      }
    }
    pickedWordPlaceholderHTML.textContent = pickedWordPlaceholderArr.join("");

    checkIncorrect(letter);
  } else {
    if (!gameRunning) {
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
    guessesleft--;
    checkLoss();
  }
}

function checkLoss() {
  if (guessesleft === 0) {
    gameRunning = false;
    losses++;
    console.log(losses);
  }
}

startHTML.addEventListener("click", newGame);

document.onkeyup = function(event) {
  console.log(event);
  letterGuess(event.key);
};
