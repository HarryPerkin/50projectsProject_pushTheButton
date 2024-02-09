const list = ["Rock", "Paper", "Scissors"];

function playGame(choice) {
	const oppChoice = list[Math.floor(Math.random() * list.length)]
	if (choice === oppChoice) {
		document.getElementById("result").textContent = "It's a draw!";
	}
	else if (choice === "Rock" && oppChoice === "Paper") {
		document.getElementById("result").textContent = "Paper beats Rock. You lose!";
	}	
	else if (choice === "Rock" && oppChoice === "Scissors") {
		document.getElementById("result").textContent = "Rock beats Scissors. You win!";
	}	
	else if (choice === "Paper" && oppChoice === "Scissors") {
		document.getElementById("result").textContent = "Scissors beats Paper. You lose!";
	}	
	else if (choice === "Paper" && oppChoice === "Rock") {
		document.getElementById("result").textContent = "Paper beats Rock. You win!";
	}	
	else if (choice === "Scissors" && oppChoice === "Rock") {
		document.getElementById("result").textContent = "Rock beats Scissors. You lose!";
	}	
	else if (choice === "Scissors" && oppChoice === "Paper") {
		document.getElementById("result").textContent = "Scissors beats Paper. You Win!";
	}
}

// Get all elements with class "choice" to maintain a single event listener.
document.querySelectorAll(".choice").forEach(button => {
	button.addEventListener("click", function() {
		playGame(button.textContent);
	});
});