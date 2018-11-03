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
  }
  pickedWordPlaceholderHTML.textContent = pickedWordPlaceholderArr.join("");
}

document.onkeyup = function(event) {
  console.log(event);
  pickedWordPlaceholderHTML.textContent = event.key;
};

startHTML.addEventListener("click", newGame);
