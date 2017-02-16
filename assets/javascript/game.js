/* */

  var answers = ["HAMBURGER", "CHEESE", "GRAPES", "BUTTER",
  "CHUTNEY", "MARGARINE", "PORKCHOP", "CELERY", "CARROTS",
  "BATTERIES", "BUTTERMILK", "CHOCOLATE", "CHICKEN", "CAULIFLOWER", 
  "BROCCOLI", "TOMATO", "LEMON", "KETCHUP", "MUSTARD",
  "MAYONNAISE", "YOGURT", "AVOCADO", "HUMMUS", "SALSA"];
  var numWins = 0;
  var totGames = 0;
  var turnsRem = 8;
  var wrongLet = [];
  var numBlanks = 0;
  var currentWord = [];
  var progressWord = [];

  startGame();
  document.onkeyup = function(event) {
    var guess = String.fromCharCode(event.keyCode).toUpperCase();
    guessCheck(guess);
    roundComplete();
  };


function startGame() {
/* Pick a word and setup the current word line with '_' placeholders */

  turnsRem = 8;
  progressWord = [];
  wrongLet = [];	

  console.log("in startGame function");

  /* choose a word from list*/
  currentWord = answers[Math.floor(Math.random() * answers.length)];
  /* set up answer underlines */
  for (var i = 0; i < currentWord.length; i++) {
       progressWord.push("_");
  };
  console.log(currentWord);
  console.log(progressWord);

  document.getElementById('guessesLeft').innerHTML = turnsRem;
  document.getElementById('currWord').innerHTML = progressWord.join(" ");
  document.getElementById('triedLetters').innerHTML = wrongLet;

/* end function */
};

function guessCheck(g) {
/*	Check player's guess to see if letter is in the currentWord.
	Replace the guess into the word layout - overlaying underscores
	Or add guess to wrong guess list and decrease turns remaining.*/
    console.log("in guessCheck function");

    var found = false;
    var repeat = false;

/*	Check player's guess to see if letter is in the currentWord.*/
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === g) {
            found = true;
        }
    };
/* Check player's guess to see if it's already guessed */
    for (var i = 0; i < wrongLet.length; i++) {
        if (wrongLet[i] === g) {
            repeat = true;
        }
    };
    console.log(repeat);
/*  If the guess is a new letter and is in the word, replace it into
    the screen word layout - overlaying underscores.  If not in word
    decrease turnsRemaining and add guess to wrongLetter array. */
    if (repeat !== true) { 
	    if (found) {
			for (var i = 0; i < currentWord.length; i++) {
				if (currentWord[i] === g) {
					progressWord[i] = g;
				};
			};
			console.log("hitting the trigger" + progressWord)
			document.getElementById('currWord').innerHTML = progressWord.join(" ");
		}	
		else {
			turnsRem--;
			wrongLet.push(g);
		};
	};
/* end function */
};

function roundComplete() {
/* 1. update the HTML and determine if game over */
  console.log("in roundComplete function");

	document.getElementById('currWord').innerHTML = progressWord.join(" ");
	document.getElementById('guessesLeft').innerHTML = turnsRem;
	document.getElementById('triedLetters').innerHTML = wrongLet.join(" ");

/* if word has been completely guessed, process win and setup new game */	
	if (progressWord.join("") === currentWord) {
		numWins++;
		totGames++;
		document.getElementById("gamesWon").innerHTML = numWins;
		document.getElementById("totGames").innerHTML = totGames;
		alert("You win!");
		startGame();
	};

/* when turnsRemaining counter runs out, process loss and setup new game */	
	if (turnsRem === 0) {
		totGames++;
		document.getElementById("totGames").innerHTML = totGames;
	    alert("Sorry, you lose");
		startGame();
	};
/* end function */
};
