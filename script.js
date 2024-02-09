const list = ["Rock", "Paper", "Scissors"];
let wins = 0, draws = 0, losses = 0;
let games = 0;

function playGame(choice) {
	const oppChoice = list[Math.floor(Math.random() * list.length)];
	games += 1;

	// Update Choice Announcements
	document.getElementById("choiceAnnouncePlayer").textContent = "You chose: " + choice;
	document.getElementById("choiceAnnounceOpponent").textContent = "Opponent chose: " + oppChoice;

	// Game Logic and Results:
	if (choice === oppChoice) {
		document.getElementById("result").textContent = "It's a draw!";
		draws += 1;
	}
	else if (choice === "Rock" && oppChoice === "Paper") {
		document.getElementById("result").textContent = "Paper beats Rock. You lose!";
		losses += 1;
	}	
	else if (choice === "Rock" && oppChoice === "Scissors") {
		document.getElementById("result").textContent = "Rock beats Scissors. You win!";
		wins += 1;
	}	
	else if (choice === "Paper" && oppChoice === "Scissors") {
		document.getElementById("result").textContent = "Scissors beats Paper. You lose!";
		losses += 1;
	}	
	else if (choice === "Paper" && oppChoice === "Rock") {
		document.getElementById("result").textContent = "Paper beats Rock. You win!";
		wins += 1;
	}	
	else if (choice === "Scissors" && oppChoice === "Rock") {
		document.getElementById("result").textContent = "Rock beats Scissors. You lose!";
		losses += 1;
	}	
	else if (choice === "Scissors" && oppChoice === "Paper") {
		document.getElementById("result").textContent = "Scissors beats Paper. You Win!";
		wins += 1;
	}
}

function printScores(w, d, l) {
	// Updates the scores to the webpage.
	const numbers = [w, d, l];
	const outcomes = ["wins", "draws", "losses"];
	outcomes.forEach((element, index, array) => {
		document.getElementById(element).textContent = numbers[index];
	});
}
// Calculate % of wins and updates webpage.	
function calcWins(w, g) {
	let winPercent = (w / g) * 100;
	document.getElementById("winRate").textContent = "Win Rate: " + winPercent + "%";
	document.getElementById("totalGames").textContent = "Total Games Played: " + g;
}

// Get all elements with class "choice" to maintain a single event listener.
document.querySelectorAll(".choice").forEach(button => {
	button.addEventListener("click", function() {
		playGame(button.textContent);
		printScores(wins, draws, losses);
		calcWins(wins, games);		
	});
});