//Variables
var names = ["Mango", "Apple", "Orange", "Banana", "Strawberries"];

//Varibles to store
var lettersOfWords = [];
var randomWords = "_";
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;

//functions
function Game() {

    //have player press any key to get started

    //player picks a random word
    randomWords = names[Math.floor(Math.random() * names.length)];
    console.log(names);

    //split the words into seperate arrays
    lettersOfWords = randomWords.split("_");

    //stored blank words
    blanks = lettersOfWords.length;

    //creating for loops for each letter stored
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
        
    };

    //show the inner html
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console.logs
};

    //how many guesses player has left

    //Let player know how many guessed letters are wrong

    //If the player guess the right word, Tell the player that they won

    //End game if player loses and runs out of guesses. 