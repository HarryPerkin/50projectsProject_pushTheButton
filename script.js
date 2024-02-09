// Define variabes.
const list = ["Rock", "Paper", "Scissors"];
let wins = 0, draws = 0, losses = 0;
let games = 0;
const responseTypes = {
	good: [
		"Wow! You are really good at this!",
		"No fair!",
		"You must get a lot of practice at this!"
	],
	middle: [
		"It's all to play for!",
		"Say your prayers!",
		"Watch me take the lead!"
	],
	bad: [
		"You suck!",
		"I think you need more practice",
		"Get ready to lose!"
	]
};
// Define functions:
function checkScore() {
	if (wins > draws && wins > losses) { // Player is winning
		let index = Math.floor(Math.random() * responseTypes.good.length);
		return responseTypes.good[index];
	}
	else if (losses > draws && losses > wins) {
		let index = Math.floor(Math.random() * responseTypes.bad.length);
		return responseTypes.bad[index];
	}
	else if (draws >= wins || draws >= losses) {
		let index = Math.floor(Math.random() * responseTypes.middle.length);
		return responseTypes.middle[index];
	}
	else {
		return "Keep playing";
	}
};

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

// Listen for button click:
document.querySelectorAll(".choice").forEach(button => {
	button.addEventListener("click", function() {
		playGame(button.textContent);
		printScores(wins, draws, losses);
		calcWins(wins, games);	
		document.getElementById("enemyChat").textContent = checkScore();
	});
});