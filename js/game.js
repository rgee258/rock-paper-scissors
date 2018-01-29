let playerScore = 0;
let computerScore = 0;

function computerPlay() {

	let choiceVal = Math.floor(Math.random() * (2.999));

	switch (choiceVal) {
		case 0:
			let computerRock = document.querySelector(".computer-btn-rock");
			computerRock.classList.add("selected");
			return "rock";
			break;
		case 1:
			let computerPaper = document.querySelector(".computer-btn-paper");
			computerPaper.classList.add("selected");
			return "paper";
			break;
		case 2:
			let computerScissors = document.querySelector(".computer-btn-scissors");
			computerScissors.classList.add("selected");
			return "scissors";
			break;
		default:
			console.log("Computer play error.");
	}
}

function playRound(playerSelection, computerSelection) {

	if (playerSelection === "rock") {
		if (computerSelection === "rock") {
			return "draw";
		}
		else if (computerSelection === "paper") {
			return "loss";
		}
		else {
			return "win";
		}
	}
	else if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			return "win";
		}
		else if (computerSelection === "paper") {
			return "draw";
		}
		else {
			return "loss";
		}
	}
	else if (playerSelection === "scissors") {
		if (computerSelection === "rock") {
			return "loss";
		}
		else if (computerSelection === "paper") {
			return "win";
		}
		else {
			return "draw";
		}
	}
	else {
		return "Invalid player input.";
	}
}

function newRound() {

	let selectedButtons = document.querySelectorAll(".selected");
	selectedButtons.forEach(selected => selected.classList.remove("selected"));
	document.getElementById('round-btn').style.visibility = 'hidden';

	let playerButtons = document.querySelectorAll(".player-btn");
	playerButtons.forEach(button => button.classList.add("unselected"));

	let playRock = document.querySelector(".player-btn-rock");
	let playPaper = document.querySelector(".player-btn-paper");
	let playScissors = document.querySelector(".player-btn-scissors");

	let newRock = playRock.cloneNode(true);
	let newPaper = playPaper.cloneNode(true);
	let newScissors = playScissors.cloneNode(true);

	playRock.addEventListener("click", function() {

		// Clone all of the unselected buttons and replace them, which removes events
		playRock.parentNode.replaceChild(newRock, playRock);
		playPaper.parentNode.replaceChild(newPaper, playPaper);
		playScissors.parentNode.replaceChild(newScissors, playScissors);

		let newButtons = document.querySelectorAll(".player-btn");
		newButtons.forEach(button => button.classList.remove("unselected"));
		newRock.classList.add("selected");
		score(playRound("rock", computerPlay()));
	});

	playPaper.addEventListener("click", function selectPaper() {

		// Clone all of the unselected buttons and replace them, which removes events
		playRock.parentNode.replaceChild(newRock, playRock);
		playPaper.parentNode.replaceChild(newPaper, playPaper);
		playScissors.parentNode.replaceChild(newScissors, playScissors);

		let newButtons = document.querySelectorAll(".player-btn");
		newButtons.forEach(button => button.classList.remove("unselected"));
		newPaper.classList.add("selected");
		score(playRound("paper", computerPlay()));
	});

	playScissors.addEventListener("click", function selectScissors() {

		// Clone all of the unselected buttons and replace them, which removes events
		playRock.parentNode.replaceChild(newRock, playRock);
		playPaper.parentNode.replaceChild(newPaper, playPaper);
		playScissors.parentNode.replaceChild(newScissors, playScissors);

		let newButtons = document.querySelectorAll(".player-btn");
		newButtons.forEach(button => button.classList.remove("unselected"));
		newScissors.classList.add("selected");
		score(playRound("scissors", computerPlay()));
	});
}

function score(results) {

	if (results === "win") {
		playerScore++;
		document.querySelector(".player-score").innerHTML = playerScore;
	}
	else if (results === "loss") {
		computerScore++;
		document.querySelector(".computer-score").innerHTML = computerScore;
	}
	else {}

	if (playerScore === 5 || computerScore === 5) {
		gameEnd();
	}
	else {
		let nextButton = document.querySelector("#round-btn");
		nextButton.addEventListener("click", function() {
			newRound();
		});
		document.getElementById('round-btn').style.visibility = "visible";
	}

}

function gameEnd() {

	let playerResults = document.getElementById('game-end');
	playerResults.style.display = "block";

	if (playerScore === 5) {
		playerResults.innerHTML = "You win!";
	}
	else if (computerScore === 5) {
		playerResults.innerHTML = "You lost...";
	}
	else {
		playerResults.innerHTML = "Error with calculating game end."
	}

	let endButton = document.getElementById('round-btn');
	endButton.innerHTML = "Play again?";
	endButton.addEventListener("click", function() {
		location.reload();
	});
	endButton.style.backgroundColor = "#43f976";
	endButton.style.visibility = "visible";

}

// Add event listener to execute when DOM has fully loaded, similar to $(document).ready() in jQuery
document.addEventListener("DOMContentLoaded", function() {
    newRound();
}, false);