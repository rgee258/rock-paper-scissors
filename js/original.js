// Original JS code for playing from the console using typed inputs

function computerPlay() {

	let choiceVal = Math.floor(Math.random() * (2.999));

	switch (choiceVal) {
		case 0:
			return "rock";
			break;
		case 1:
			return "paper";
			break;
		case 2:
			return "scissors";
			break;
		default:
			console.log("Computer play error.");
	}
}

function playerPlay() {

	let input = prompt("Rock, paper, or scissors?");

	if (input == null) {
		return "end";
	}
	else if (!(input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissors")) {
		return -555;
	}
	else {
		return input.toLowerCase();
	}

}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === "end") {
		return "end";
	}
	else if (playerSelection === "rock") {
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

function game() {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 1; i < 6; i++) {
		let results = playRound(playerPlay(), computerPlay());
		if (results === "end") {
			return console.log("Player canceled the game.");
		}
		if (results === "win") {
			playerScore++;
		}
		else if (results === "loss") {
			computerScore++;
		}
		else if (results === "draw") {}
		else {
			return console.log("Invalid player input detected. Game terminating.");
		}
		console.log("Round " + i + ": " + results);
		console.log("Player: " + playerScore + " | Computer: " + computerScore);
	}
	if (playerScore > computerScore) {
		console.log("You win!");
	}
	else if (playerScore < computerScore) {
		console.log("You lose.");
	}
	else {
		console.log("It's a draw!")
	}
}

game();