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
  var resultsMsg = document.getElementById("winLose");
  var resultsImg = document.getElementById("winLoseImg");

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

/* choose a word from list*/
  currentWord = answers[Math.floor(Math.random() * answers.length)];
/* set up answer underlines */
  for (var i = 0; i < currentWord.length; i++) {
       progressWord.push("_");
  };

  document.getElementById('guessesLeft').innerHTML = turnsRem;
  document.getElementById('currWord').innerHTML = progressWord.join(" ");
  document.getElementById('triedLetters').innerHTML = wrongLet;

/* end function */
};

function guessCheck(g) {
/*	Check player's guess to see if letter is in the currentWord.
	Replace the guess into the word layout - overlaying underscores
	Or add guess to wrong guess list and decrease turns remaining.*/

    var found = false;
    var repeat = false;
/* Re-hide the win/lose image & message */
    resultsMsg.style.visibility = "hidden";
	resultsImg.style.visibility = "hidden";


/*	Check player's guess to see if letter is in the currentWord.*/
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === g) {
            found = true;
        }
    };

/* Check player's guess to see if it's already been guessed */
    for (var i = 0; i < wrongLet.length; i++) {
        if (wrongLet[i] === g) {
            repeat = true;
        }
    };

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
/* update the HTML and determine if game round is finished */
	document.getElementById('currWord').innerHTML = progressWord.join(" ");
	document.getElementById('guessesLeft').innerHTML = turnsRem;
	document.getElementById('triedLetters').innerHTML = wrongLet.join(" ");

/* if word has been completely guessed, process win and setup new game. 
	Make WIN image & message visible. */	
	if (progressWord.join("") === currentWord) {
		numWins++;
		totGames++;
		document.getElementById("gamesWon").innerHTML = numWins;
		document.getElementById("totGames").innerHTML = totGames;
		resultsMsg.style.visibility = "visible";
		resultsMsg.innerHTML = "You won!";
		resultsImg.style.visibility = "visible";
		resultsImg.src = "assets/images/win.jpg";
		startGame();
	};

/* when turnsRemaining counter runs out, process loss and setup new game.
	Make LOSE image & message visible. */	
	if (turnsRem === 0) {
		totGames++;
		document.getElementById("totGames").innerHTML = totGames;
		resultsMsg.style.visibility = "visible";
		resultsMsg.innerHTML = "Nope, sorry";
		resultsImg.style.visibility = "visible";
		resultsImg.src = "assets/images/lose.jpg";
		startGame();
	};
/* end function */
};
