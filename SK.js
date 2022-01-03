const p1 = {
	score: 0,
	btn: document.querySelector("#p1Button"),
	display: document.querySelector("#p1score"),
	game: 0,
	games: document.querySelector("#p1games"),
	name: "Player 1",
};
const p2 = {
	score: 0,
	btn: document.querySelector("#p2Button"),
	display: document.querySelector("#p2score"),
	game: 0,
	games: document.querySelector("#p2games"),
	name: "Player 2",
};

const resetBtn = document.querySelector("#reset");
const playTo = document.querySelector("#playTo");
const numGames = document.querySelector("#Games");
const newGame = document.querySelector("#newGame");
const announce = document.querySelector("#announce");

let winningScore = 3;
let won = false;
let noGames = 1;

function updateScores(player, opponent) {
	if (!won) {
		player.score += 1;
		player.display.textContent = player.score;
		if (player.score === winningScore) {
			player.display.classList.add("has-text-primary");
			opponent.display.classList.add("has-text-danger");
			player.btn.disabled = true;
			opponent.btn.disabled = true;
			won = true;
			player.game += 1;
			player.games.textContent = player.game;
			if (player.game + opponent.game == noGames) {
				announce.innerText = `${player.name} wins!`;
				newGame.disabled = true;
			}
		}
	}
}

p1.btn.addEventListener("click", function () {
	updateScores(p1, p2);
});

p2.btn.addEventListener("click", function () {
	updateScores(p2, p1);
});

resetBtn.addEventListener("click", reset);

function reset() {
	for (let p of [p1, p2]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove("has-text-danger", "has-text-primary");
		p.btn.disabled = false;
		p.game = 0;
		p.games.textContent = 0;
	}
	announce.innerText = "";
	newGame.disabled = false;
	won = false;
}

newGame.addEventListener("click", newG);

function newG() {
	for (let p of [p1, p2]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove("has-text-danger", "has-text-primary");
		p.btn.disabled = false;
	}
	won = false;
}

playTo.addEventListener("change", () => {
	winningScore = parseInt(playTo.value);
	reset();
});

numGames.addEventListener("change", () => {
	noGames = parseInt(numGames.value);
	reset();
});

const gameName = document.querySelector("#whichGame");
let title = document.querySelector(".card-header-title");
const img = document.querySelector("img");
const bg = document.querySelector("body");

gameName.addEventListener("change", () => {
	let name = gameName.value;
	title.innerText = `${name} Score Keeper`;
	switch (name) {
		case "Table Tennis":
			img.src =
				"https://www.experttabletennis.com/wp-content/uploads/2019/11/table-tennis-bat.jpg";
			bg.style.backgroundColor = "rgb(230, 92, 0)";
			break;
		case "Quidditch":
			img.src =
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0jZT20f4SFkKWWUT0P6RT8whN_YoTE-uCbnU5veuj_haMCfEXnx9J84Ydtx9rROqz3o&usqp=CAU";
			bg.style.backgroundColor = "#cc0044";
			break;
		case "Cricket":
			img.src =
				"https://media.istockphoto.com/photos/cricket-ball-hitting-the-stumps-picture-id1191513033?k=20&m=1191513033&s=612x612&w=0&h=WbeBrWBKfJWJQVzoJfExwVZAqw-WBPchjzqn1FjYu0A=";
			bg.style.backgroundColor = "#e60000";
			break;
		case "Tennis":
			img.src =
				"https://static.toiimg.com/thumb/msid-75239330,width-1200,height-900,resizemode-4/.jpg";
			bg.style.backgroundColor = "#99ccff";
			break;
		case "Football":
			img.src =
				"https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg";
			bg.style.backgroundColor = "#00b33c";
			break;
		default:
			img.src =
				"https://evitalyst.com/wp-content/uploads/2021/04/best-erp-in-uae.jpg";
			bg.style.backgroundColor = "rgb(100, 2, 192)";
			break;
	}
});
