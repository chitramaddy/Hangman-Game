var placeHolder;
// wordBank Array
var wordBank = ['afghanistan','australia','brazil', 'canada','china','denmark','egypt','france','greece','germany','india','iran','jamaica','laos','mexico','norway','peru','russia','saudi arabia','united states','venezuela'];
// any references to HTML DOM Elements (reset button, area for writing stats, letter blanks)
var letterBlanks = document.getElementById("placeholder");
var guessedLetters = document.getElementById("guessed");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesleft = document.getElementById("guessesleft");

var start = document.getElementById("start");
var reset = document.getElementById("reset");
// wins/losses
var wins = 0;
var losses = 0;
var guessesleft = 10;



// NEW GAME FUNCTION
function newGame() {
  // reset guessesLeft to 10
  reWriteStats: function(rewrite) {
    guessesleft = 10;
  }
  
  // declare/reset pickedWord Placeholder array
  var pickedWordPlaceholder = [];
  // array for guessedLetters
  var guessedLetters = [];
  guessedLetters.splice();// clear out existing DOM content from previous game

  // pick our word at random from the wordBank
  var pickedWord = wordBank[Math.floor(Math.random() * 15)];
  console.log(pickedWord);
     


  // split pickedWord into an array
  var pickedWordArray = pickedWord.split('');

  
  // for loop over pickedWordArray, at each iteration, check IF pickedWordArray[i] === " ", then push in a " " to pickedWordPlaceholder, else push a "_"

  for(var i=0; i < pickedWordArray.length; i++) {
      if (pickedWordArray[i] === " "){
          (pickedWordPlaceholder).push(" ");
          
      }
      else {
        (pickedWordPlaceholder).push("-");

      }
  }

   
  // write placeholder array to DOM

  document.getElementById("placeholder").innerHTML = placedholderArray;
 

  document.onkeyup = function(event) {
    // capture event key (letter pressed)

    // if (guessedLetters.indexOf(letterGuessed) === -1)
      // Run rest of game
      // push guessedLetter into guessedLetters array
      // loop over pickedWordArray
        // if guessedLetter === arr[i]
            // replace placeholder[i] with guessedLetter
      
      // if placedholderArray.indexOf(guessedLetter) === -1
        // then it's a wrong guess
        // decrement guessesLeft
      
      // check guessesLeft up against 0
        // if yes, you lose
      

      // check to see if placeholderArray.join('') === pickedWordArray.join('')
        // if yes, you win!
  

    // else alert / write to DOM that user already guessed that letter
  }

}
