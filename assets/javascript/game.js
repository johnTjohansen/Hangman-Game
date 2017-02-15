/* */

  var answers = ["HAMBURGER", "CHEESE", "GRAPES", "BUTTER",
  "CHUTNEY", "MARGARINE", "PORKCHOP", "CELERY", "CARROTS",
  "BATTERIES", "BUTTERMILK", "CHOCOLATE", "CHICKEN", "CAULIFLOWER", 
  "BROCCOLI", "TOMATO", "LEMON", "KETCHUP", "MUSTARD",
  "MAYONNAISE", "YOGURT", "AVOCADO", "HUMMUS", "SALSA"];
  var numWins = 0;
  var turnsRem = 8;
  var guessedLet = [];
  var wrongLet = [];
  var numBlanks = 0;
  var currentWord = [];
  var progressWord = [];

  startGame();
  document.onkeyup = function(event) {
  var guess = String.fromCharCode(event.keyCode).toUpperCase();
  guessCheck(guess);
  roundComplete();


function guessCheck(g) {
/*	Check player's guess to see if letter is in the currentWord.
	Replace the guess into the word layout - overlaying underscores
	Or add guess to wrong guess list and decrease turns remaining.*/
/*    validateGuess(guess);*/ 
    var found = false;

    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === g) {
            found = true;
        }
    }

	if (found) {
		for (var i = 0; i < currentWord.length; i++) {
			if (currentWord[i] === g) {
				progressWord[i] = g;
			}
		    else {
		      turnsRem--;
			  wrongLet.push = g;
			}  
		}
	}
}

function = startGame() {
/* Pick a word and setup the current word line with '_' placeholders */

  turnsRem = 8;
  progressWord = [];
  wrongLet = [];	

  /* choose a word from list*/
  currentWord = answers[Math.floor(Math.random() * answers.length)];
  /* set up answer underlines */
  for (var i = 0; i < currentWord.length; i++) {
       progressWord.push = "_";
  }

  document.getElementById('guessesLeft').innerHTML = turnsRem;
  document.getElementById('currWord').innerHTML = progressWord.join;

}

/*function startGame() {
*//* class example
1. select word at random
2. want to break up that random word into letters and replace them with underscores
3. want to add those underscores to the HTML
4. initialize maxGuesses and wrongGuesses and progressWord
*/
/*  turnsRem = 10;
  progressWord = [];
  wrongLet = [];

  currentWord = answers[Math.floor(Math.random() * answers.length)];
*/  /* split converts string to array */
/*  lettersInChosenWord = currentWord.split();
  numBlanks = lettersInChosenWord.length;
*/
/*  for(var i = 0; i < currentWord.length; i++) {
  	progressWord.push("_");
  }

  document.getElementById('guessesLeft').innerHTML = turnsRem;
  /* .join gets rid of commas within array - converts to string*/
/*  document.getElementById('currWord').innerHTML = progressWord.join;
} */

/*function checkLetters(letter) {*/
/* class example
1. compare the guessed letter to match letters in word
2. conditional statement to determine if the guess is in the word do this else do that
3. if guess is wrong, decrease numGuesses by 1
*/
/*
	var letterInWord = false;

	for(var i = 0; i < numBlanks; i++) {
		if(currentWord[i] === letter) {
			letterInWord = true;
		}
	}
	if (letterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if (currentWord[i] === letter) {
				progressWord[i] = letter;
			}
		} else
			turnsRem--;
			wrongLet.push(letter);
	}
}*/

function roundComplete() {
/* 
1. update the HTML withe letters that are in the word
2. update the HTML with guess we have left
3. update the HTML to show the wrong guesses
4. determine if game won or not
*/
	document.getElementById('currWord').innerHTML = progressWord.join(" ");
	document.getElementById('guessesLeft').innerHTML = numGuesses.join(" ");
	document.getElementById('triedLetters').innerHTML = wrongLet.join(" ");
	document.getElementById('gamesWon').innerHTML = numWins;
/*	if progressWord.indexOf(letter >= 1) {
		console.log(letter);
	}*/
	if (progressWord.join(" ") === currentWord.join(" ")) {
		numWins++;
		alert("you win");
		document.getElementById("gamesWon").innerHTML = numWins;
		startGame();
	} else {
		document.getElementById("you lost").innerHTML = numLosses;
		startGame();
	}

}

/*startGame();
document.onkeyup = function(event) {
	var guess = String.fromCharCode(event.keyCode).toUpperCase();
	checkLetters(guess);
	roundComplete();*/
/* 

*/
}