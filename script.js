const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
let currentPlayer = "X";
let gameOver = false;

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6],           // diagonals
];

function checkWinner() {
  const values = Array.from(cells).map((cell) => cell.textContent);

  for (const [a, b, c] of winningCombos) {
    if (values[a] && values[a] === values[b] && values[a] === values[c]) {
      return values[a];
    }
  }

  if (values.every((value) => value !== "")) {
    return "draw";
  }

  return null;
}

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameOver || cell.textContent !== "") return;

    cell.textContent = currentPlayer;

    const result = checkWinner();
    if (result === "draw") {
      status.textContent = "It's a draw!";
      gameOver = true;
    } else if (result) {
      status.textContent = `${result} wins!`;
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});
