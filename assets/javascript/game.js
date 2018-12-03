//Variables
var names = ["Mango", "Apple", "Orange", "Banana", "Strawberries"]

//Varibles to store
var lettersofWords = [];
var randomWord = "";
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var loss = 0;
var guessesRemaining = 9;

//functions
function Game() {
randomWord = words[Math.floor(Math.random() * words.length)];

lettersofWords = randomWord.split("");

blanks = lettersofWords.length;

//for loops

for (var i = 0; i < blanks; i++) {
    blanksAndCorrect.push("_");
}

document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

//console logging 
console.log(randomWord);
console.log(lettersOfWord)
console.log(blanks)
console.log(blanksAndCorrect)
}


