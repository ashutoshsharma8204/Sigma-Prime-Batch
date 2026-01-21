let random, max;
let streak = localStorage.getItem("streak") || 0;
let highScore = localStorage.getItem("highScore") || 0;
let soundOn = true;

const winSound = new Audio("sounds/win.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

updateStats();
restoreTheme();

function startGame() {
  max = +document.getElementById("difficulty").value;
  random = Math.floor(Math.random() * max) + 1;

  document.getElementById("guess").disabled = false;
  document.getElementById("guessBtn").disabled = false;
  hideMessage();
  setMessage("🎯 Game Started! Guess the number");
}

function checkGuess() {
  const guess = +document.getElementById("guess").value;
  if (!guess) return;

  if (guess === random) {
    handleWin();
  } else {
    handleWrong(guess);
  }
}

function handleWin() {
  if (soundOn) winSound.play();
  streak++;
  highScore = Math.max(highScore, streak);
  saveData();
  setMessage(`🎉 Correct! Number was ${random}`);
}

function handleWrong(guess) {
  if (soundOn) wrongSound.play();
  streak = 0;
  saveData();

  const diff = Math.abs(random - guess);
  const hint =
    diff <= 3 ? "🔥 Very Hot!" :
    diff <= 7 ? "🌡️ Warm" :
    diff <= 15 ? "❄️ Cold" :
    "🧊 Very Cold";

  shakeCard();
  setMessage(`Wrong Guess! ${hint}`);
}

function setMessage(text) {
  const msg = document.getElementById("message");
  msg.textContent = text;
  msg.style.display = "block";
}

function hideMessage() {
  document.getElementById("message").style.display = "none";
}

function shakeCard() {
  const card = document.querySelector(".game-card");
  card.classList.add("shake");
  setTimeout(() => card.classList.remove("shake"), 300);
}

function toggleSound() {
  soundOn = !soundOn;
}

function changeTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}

function saveData() {
  localStorage.setItem("streak", streak);
  localStorage.setItem("highScore", highScore);
  updateStats();
}

function updateStats() {
  document.getElementById("streak").textContent = streak;
  document.getElementById("highScore").textContent = highScore;
}

function restoreTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) document.body.className = theme;
}

/* ENTER KEY SUPPORT */
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && !document.getElementById("guess").disabled) {
    checkGuess();
  }
});
