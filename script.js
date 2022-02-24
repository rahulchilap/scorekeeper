const p1BTN = document.getElementById("p1BTN");
const p2BTN = document.getElementById("p2BTN");
const p1Display = document.getElementById("p1Display");
const p2Display = document.getElementById("p2Display");
const resetButton = document.getElementById("reset");
let winningScoreSelector = document.getElementById("score");
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

//Onclick Player 1 button
p1BTN.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
  }
  if (p1Score == winningScore) {
    isGameOver = true;
    p1Display.style.color = "Green";
    p2Display.style.color = "red";
  }
  p1Display.textContent = p1Score;
});

//Onclick Player 2 button
p2BTN.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
  }
  if (p2Score == winningScore) {
    isGameOver = true;
    p2Display.style.color = "Green";
    p1Display.style.color = "red";
  }
  p2Display.textContent = p2Score;
});

//Onclick reset button
function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  isGameOver = false;
}
resetButton.addEventListener("click", reset);

//secection from select input
winningScoreSelector.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
