let availableWords = [...words]; 
let currentWord = {};
let streak = 0;
let timeLeft = 30;
let timer;
let lives = 3;

let wordText, hintText, inputField, streakText, timeText, livesText;

window.onload = () => {
    wordText = document.getElementById("scrambled-word");
    hintText = document.querySelector(".hint span");
    inputField = document.getElementById("user-input");
    streakText = document.getElementById("streak");
    timeText = document.querySelector(".time span b");
    livesText = document.getElementById("lives");

    document.querySelector(".refresh-word").addEventListener("click", initGame);
    document.querySelector(".check-word").addEventListener("click", checkWord);

    console.log("Available words:", availableWords);
    initGame();
};

const initGame = () => {
    if (availableWords.length === 0) {
        availableWords = [...words];
    }

    clearInterval(timer);
    timeLeft = 30;
    updateTimerDisplay();
    updateLivesDisplay();
    startTimer();

    let randomIndex = Math.floor(Math.random() * availableWords.length);
    currentWord = availableWords[randomIndex] || {};

    if (!currentWord.word) {
        console.error("Error: Word data is missing!");
        initGame();
        return;
    }

    availableWords.splice(randomIndex, 1);
    
    console.log("Selected word:", currentWord);
    wordText.innerText = scrambleWord(currentWord.word) || "Error!";
    hintText.innerText = currentWord.hint || "No hint available";
    inputField.value = "";
    inputField.style.background = "white";
};

const startTimer = () => {
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            reduceLife();
        }
    }, 1000);
};

const updateTimerDisplay = () => {
    timeText.innerText = timeLeft;
};

const updateLivesDisplay = () => {
    livesText.innerText = "❤️ ".repeat(lives);
};

const reduceLife = () => {
    lives--;
    updateLivesDisplay();

    if (lives <= 0) {
        alert("💀 Game Over! คุณหมดหัวใจแล้ว!");
        resetGame();
    } else {
        alert(`❌ คุณเสียหัวใจ! เหลือ ❤️ ${lives} ดวง`);
        initGame();
    }
};

const checkWord = () => {
    let userWord = inputField.value.trim().toLowerCase();
    if (userWord !== currentWord.word.toLowerCase()) {
        inputField.style.background = "red";
        setTimeout(() => { inputField.style.background = "white"; }, 1000);
        streak = 0;
        streakText.innerText = `🔥 Streak: ${streak}`;
        reduceLife();
        return;
    }

    inputField.style.background = "green";
    setTimeout(() => { inputField.style.background = "white"; }, 1000);
    streak++;
    streakText.innerText = `🔥 Streak: ${streak}`;
    alert(`ถูกต้อง! 🎉 Streak: ${streak}`);

    initGame();
};

const scrambleWord = (word) => {
    return word.split("").sort(() => Math.random() - 0.5).join("");
};

const resetGame = () => {
    streak = 0;
    lives = 3;
    availableWords = [...words];
    initGame();
};

window.addEventListener("beforeunload", function () {
    streak = 0;
    lives = 3;
});
