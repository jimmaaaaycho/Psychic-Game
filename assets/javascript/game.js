var userText = document.getElementById("user-text");


function randomString() {
	var rnum = Math.floor((Math.random() * 26) +1);
	console.log("rnum: " + rnum);
	var randomChar = chars[rnum - 1];
	return randomChar;
}
		var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var winNum = 0;
		var lossNum = 0; 
		var guessLeft = 9;
		var guessCount = 0;
		var randomLetter = randomString();
		var guessHistory = [];
		console.log(randomLetter);


document.onkeyup = function(event) {
        // console.log(event)
        userText.textContent = event.key;
        // Determines which key was pressed.
      	var userGuess = event.key;	


		if (guessLeft > 0) {

			if (chars.indexOf(userGuess) !== -1) {

			if(userGuess == randomLetter){
				alert("You are Psychic!");
				winNum++;
				guessLeft = 9;
				guessCount = 0;
				randomLetter = randomString();
				console.log(randomLetter);
				guessHistory = [];


			} else {
				guessLeft--;
				guessCount++;
				guessHistory[guessCount] = userGuess;	 
				if (guessLeft == 0) {
					alert("Sorry you lose");
					guessLeft = 9;
					guessCount = 0;
					randomLetter = randomString();
					console.log(randomLetter);
					guessHistory = [];
					lossNum++;
				}
			}
		} else {
			alert("Please press choose a letter in the alphabet");
		}
	}

	document.getElementById('winscore').innerHTML = winNum;
    document.getElementById('lossscore').innerHTML = lossNum;
    document.getElementById('guessleft').innerHTML = guessLeft;
    document.getElementById('guesshistory').innerHTML = guessHistory.join(" ");

}