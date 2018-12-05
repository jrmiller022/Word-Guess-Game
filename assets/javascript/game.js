//Variables
var names = ["Mango", "Apple", "Orange", "Banana", "Strawberries"]

//Varibles to store
var lettersOfWords = [];
var randomWord = "_";
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var loss = 0;
var guessesRemaining = 9;

//functions
function Game() {

//computer creates words
randomWord = words[Math.floor(Math.random() * words.length)];

//split the words into seperate arrays
lettersofWords = randomWord.split("_");

//stored blank words
blanks = lettersofWords.length;

//creating for loops for each letter stored
for (var i = 0; i < blanks; i++) {
    blanksAndCorrect.push("_");
};

//show the inner html
document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

//console logging 
console.log(randomWord);
console.log(lettersOfWord);
console.log(blanks);
console.log(blanksAndCorrect);
};

//reset function of game
 function reset() {
   guessesRemaining = 9;
   wrongGuess = [];
   blanksAndCorrect = [];
   Game ()
 };

//check if/else statements
function checkLetters(etter) {
  var letterInWord = false;

//letters that match randomWord
for (var i = 0; i < 0; i++) {
  if(randomWord[i] === letter) {
    letterInWord = true;
  }
}



//call start game function
Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
//check to see if guess entered matches value of random word
    checkLetters(guesses);
//process wins/loss 
    complete();
//store player guess in console for reference 
    console.log(guesses);

//display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
  }
}
