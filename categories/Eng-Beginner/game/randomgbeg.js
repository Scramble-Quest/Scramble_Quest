let availableWords = [...words]; // ดึงคำศัพท์จาก wordgbeg.js
let currentWord = {};
let streak = 0; // Streak เริ่มต้นที่ 0
let timeLeft = 30; // กำหนดเวลาเริ่มต้น
let timer; // ตัวแปรจับเวลา
let lives = 3; // จำนวนหัวใจเริ่มต้น

let wordText, hintText, inputField, streakText, timeText, livesText;

window.onload = () => {
    wordText = document.getElementById("scrambled-word");
    hintText = document.getElementById("hint");
    inputField = document.getElementById("user-input");
    streakText = document.getElementById("streak");
    timeText = document.querySelector(".time span b"); // ดึง element ที่แสดงเวลา
    livesText = document.getElementById("lives"); // ดึง element ที่แสดงหัวใจ

    console.log("Available words:", availableWords); // 🔥 ตรวจสอบว่าคำศัพท์โหลดถูกต้อง
    initGame();
};

const initGame = () => {
    if (availableWords.length === 0) {
        availableWords = [...words]; // รีเซ็ตคำศัพท์เมื่อหมด
    }

    clearInterval(timer); // หยุดตัวจับเวลาเก่า
    timeLeft = 30; // รีเซ็ตเวลาใหม่
    updateTimerDisplay(); // แสดงเวลาเริ่มต้นใหม่
    updateLivesDisplay(); // แสดงหัวใจ
    startTimer(); // เริ่มนับเวลาถอยหลัง

    let randomIndex = Math.floor(Math.random() * availableWords.length);
    currentWord = availableWords[randomIndex];

    availableWords.splice(randomIndex, 1); // ลบคำที่ใช้ไปแล้ว

    console.log("Selected word:", currentWord); // 🔥 ตรวจสอบว่าคำถูกสุ่มจริงไหม
    wordText.innerText = scrambleWord(currentWord.word) || "Error!"; // ป้องกันค่าที่หาย
    hintText.innerText = `Hint: ${currentWord.hint}` || "No hint available"; // ป้องกันค่าที่หาย
    inputField.value = "";
    inputField.style.background = "white"; // 🔥 รีเซ็ตสีเป็นขาวเมื่อเริ่มคำใหม่
};

const startTimer = () => {
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            reduceLife(); // 🔥 เวลาหมดลดหัวใจ
        }
    }, 1000);
};

const updateTimerDisplay = () => {
    timeText.innerText = timeLeft; // อัปเดตค่าเวลาใน HTML
};

const updateLivesDisplay = () => {
    livesText.innerText = "❤️ ".repeat(lives); // อัปเดตจำนวนหัวใจใน HTML
};

const reduceLife = () => {
    lives--; // ลดจำนวนหัวใจ
    updateLivesDisplay();

    if (lives <= 0) {
        alert("💀 Game Over! คุณหมดหัวใจแล้ว!");
        resetGame(); // รีเซ็ตเกมใหม่
    } else {
        alert(`❌ คุณเสียหัวใจ! เหลือ ❤️ ${lives} ดวง`);
        initGame(); // เริ่มคำใหม่
    }
};

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if (userWord !== currentWord.word) {
        inputField.style.background = "red"; // เปลี่ยนเป็นสีแดงเมื่อผิด
        setTimeout(() => { inputField.style.background = "white"; }, 1000); // กลับเป็นสีขาวหลัง 1 วินาที
        streak = 0; // 🔥 รีเซ็ต Streak ถ้าตอบผิด
        streakText.innerText = `🔥 Streak: ${streak}`;
        reduceLife(); // 🔥 ลดหัวใจเมื่อผิด
        return;
    }

    inputField.style.background = "green"; // เปลี่ยนเป็นสีเขียวเมื่อถูก
    setTimeout(() => { inputField.style.background = "white"; }, 1000); // กลับเป็นสีขาวหลัง 1 วินาที
    streak++; // เพิ่มค่า Streak ถ้าตอบถูก
    streakText.innerText = `🔥 Streak: ${streak}`;
    alert(`ถูกต้อง! 🎉 Streak: ${streak}`);

    initGame();
};

const scrambleWord = (word) => {
    return word.split("").sort(() => Math.random() - 0.5).join("");
};

const resetGame = () => {
    streak = 0;
    lives = 3; // 🔥 รีเซ็ตหัวใจ
    availableWords = [...words]; // โหลดคำศัพท์ใหม่
    initGame(); // เริ่มเกมใหม่
};

// 🔥 ล้างค่า Streak และข้อมูลทั้งหมดเมื่อออกจากเกม
window.addEventListener("beforeunload", function () {
    streak = 0;
    lives = 3;
});
