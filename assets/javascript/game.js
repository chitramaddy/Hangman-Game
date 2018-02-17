// wordBank Array
var wordBank = ['afghanistan', 'australia', 'brazil', 'canada', 'china', 'denmark', 'egypt', 'france', 'greece', 'germany', 'india', 'iran', 'jamaica', 'laos', 'mexico', 'norway', 'peru', 'russia', 'saudi arabia', 'united states', 'venezuela'];
console.log(wordBank);

// any references to HTML DOM Elements (reset button, area for writing stats, letter blanks)
var pickedWordPlaceholderHTML = document.getElementById("placeholder");
var guessedLettersHTML = document.getElementById("guesses");
var winsHTML = document.getElementById("wins");
var lossesHTML = document.getElementById("losses");
var guessesleftHTML = document.getElementById("guessesleft");
var startHTML = document.getElementById("start");
// wins/losses

var wins = 0;
var losses = 0;
var guessesleft;



// NEW GAME FUNCTION
function newGame() {
        guessesleft = 10;
        console.log(guessesleft);
  
      // declare/reset pickedWord Placeholder array
      var pickedWordPlaceholder = [];
      // array for guessedLetters
      var guessedLetters = [];
      //guessedLetters.splice();// clear out existing DOM content from previous game

      // pick our word at random from the wordBank
      var pickedWord = wordBank[Math.floor(Math.random() * 21)];
      console.log(pickedWord);

      // split pickedWord into an array
      var pickedWordArray = [];
      
      pickedWordArray = pickedWord.split('');

      console.log(pickedWordArray);
      // for loop over pickedWordArray, at each iteration, check IF pickedWordArray[i] === " ", then push in a " " to pickedWordPlaceholder, else push a "_"
      function blanks() {
        for (var i = 0; i < pickedWordArray.length; i++) {
          if (pickedWordArray[i] === "") {
            var blanks = pickedWordPlaceholder.push("-");
            console.log(blanks);

          }
          return blanks;
        }
      }


      // write placeholder array to DOM

      document.getElementById("placeholder").innerHTML = blanks();


      placeholder.onkeyup = function (event) {
        // capture event key (letter pressed)

        var letterGuessed = document.getElementById(used);

        letterGuessed.textContent = event.key;


        if (guessedLetters.indexOf(letterGuessed) === -1) {
          // Run rest of game

          // push guessedLetter into guessedLetters array
          (guessedLetters).push(letterGuessed);

        }

        // replace placeholder[i] with guessedLetter

        for (var i = 0; i < pickedWordArray.length; i++) {

          if (guessedLetter === pickedWordArray[i]) {
            pickedWordArray[i] = pickedWordPlaceholder[i].replace(guessedLetter);
          }

        }


          if (placedholderArray.indexOf(guessedLetter) === -1) {
            // then it's a wrong guess
            // decrement guessesLeft
            guessesleft--;

            // check guessesLeft up against 0
            // if yes, you lose
            if (guessesleft = 0) {
              losses++;

              document.getElementById("lead").innerHTML = "You Lost! Press reset to try again!";
            }

          }


          // check to see if placeholderArray.join('') === pickedWordArray.join('')
          // if yes, you win!
          if ((placeholderArray).join('') === pickedWordArray.join('')) {
            wins++;
            document.getElementById("lead").innerHTML = "You Won! The country is " + pickedWord;

          } else {
            alert("already used " + user.key);
          }

        }
          

      }
      
      document.getElementById("start").addEventListener("click", function() {
        newGame();
        });
     