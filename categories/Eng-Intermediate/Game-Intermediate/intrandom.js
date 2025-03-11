let availableWords = []; // ดึงคำศัพท์จากระดับที่เลือก
let usedWords = []; // เก็บคำที่เคยใช้แล้ว
let currentWord = {};
let streak = 0; // Streak เริ่มต้นที่ 0
let timeLeft = 30; // กำหนดเวลาเริ่มต้น
let timer; // ตัวแปรจับเวลา
let lives = 3; // จำนวนหัวใจเริ่มต้น
let selectedLevel = "begin"; // ค่าเริ่มต้น

let wordText, hintText, inputField, streakText, timeText, livesText, wordsLeftText, wordProgressText;

window.onload = () => {
    wordText = document.getElementById("scrambled-word");
    hintText = document.getElementById("hint");
    inputField = document.getElementById("user-input");
    streakText = document.getElementById("streak");
    timeText = document.querySelector(".time span b");
    livesText = document.getElementById("lives");
    wordsLeftText = document.getElementById("words-left");
    wordProgressText = document.getElementById("word-progress"); // ดึง UI จำนวนคำ

    // ดึงค่าระดับจาก URL
    let params = new URLSearchParams(window.location.search);
    let level = params.get("level") || "begin"; // ถ้าไม่มีค่า ใช้ "begin" เป็นค่าเริ่มต้น
    setLevel(level);
};

const setLevel = (level) => {
    selectedLevel = level;
    availableWords = [...words[selectedLevel]];
    usedWords = [];
    console.log(`🔹 เลือกระดับ: ${selectedLevel}`);
    initGame();
};

const initGame = () => {
    console.log("Loaded words:", words);

    if (availableWords.length === 0) {
        alert("🎉 มึงเล่นครบทุกคำแล้ว! ระบบรีเซ็ตคำศัพท์ใหม่นะไอโง่");
        availableWords = [...words[selectedLevel]];
        usedWords = [];
    }

    let randomIndex;
    let selectedWord;

    do {
        randomIndex = Math.floor(Math.random() * availableWords.length);
        selectedWord = availableWords[randomIndex];
    } while (usedWords.includes(selectedWord.word) && availableWords.length > usedWords.length);

    currentWord = selectedWord;

    if (!currentWord.word) {
        console.error("Error: Word data is missing!");
        initGame();
        return;
    }

    usedWords.push(currentWord.word);
    availableWords.splice(randomIndex, 1);

    console.log("Selected word:", currentWord);
    wordText.innerText = scrambleWord(currentWord.word) || "Error!";
    hintText.innerText = `Hint: ${currentWord.hint}` || "No hint available";
    inputField.value = "";
    inputField.style.background = "white";

    updateWordsLeftDisplay();
    updateWordProgress(); // 🔥 อัปเดตจำนวนคำปัจจุบัน/ทั้งหมด
    clearInterval(timer);
    timeLeft = 30;
    updateTimerDisplay();
    updateLivesDisplay();
    startTimer();
};

// 🔥 อัปเดต UI จำนวนคำที่เหลือ
const updateWordsLeftDisplay = () => {
    if (wordsLeftText) {
        wordsLeftText.innerText = `📖 คำที่เหลือ: ${availableWords.length}`;
    } else {
        console.error("❌ Error: ไม่พบ #words-left ใน HTML");
    }
};

// 🔥 อัปเดตจำนวนคำปัจจุบัน / ทั้งหมด
const updateWordProgress = () => {
    if (wordProgressText) {
        wordProgressText.innerText = `Word: ${usedWords.length} / ${usedWords.length + availableWords.length}`;
    }
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
        alert(" มึงตายแล้วไอโง่ 💀 ");
        resetGame();
    } else {
        alert(`❌ ไอโง่ตอบดีๆหน่อยสิวะ มึงเหลือ ❤️ ${lives} ดวง!`);
        initGame();
    }
};

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
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
    alert(`🎉 Streak: ${streak}  เก่งมากไอโง่ไปกันต่อ!`);

    initGame();
};

const scrambleWord = (word) => {
    return word.split("").sort(() => Math.random() - 0.5).join("");
};

const resetGame = () => {
    streak = 0;
    lives = 3;
    availableWords = [...words[selectedLevel]];
    usedWords = [];
    initGame();
};

// 🔥 ล้างค่า Streak และข้อมูลทั้งหมดเมื่อออกจากเกม
window.addEventListener("beforeunload", function () {
    streak = 0;
    lives = 3;
});
