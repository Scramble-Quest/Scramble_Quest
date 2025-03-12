let availableWords = [...words]; // ดึงคำศัพท์จาก wordgbeg.js
let currentWord = {};
let streak = 0; // Streak เริ่มต้นที่ 0
let timeLeft = 30; // กำหนดเวลาเริ่มต้น
let timer; // ตัวแปรจับเวลา
let lives = 3; // จำนวนหัวใจเริ่มต้น
let score = 0;
let totalWords = words.length;
let playedWords = 0;

// เพิ่มตัวแปรสำหรับเก็บคำที่ใช้ไปแล้ว
let usedWords = new Set();

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

// ฟังก์ชันเริ่มเกมใหม่
const initGame = () => {
    // ตรวจสอบว่าใช้คำครบทุกคำแล้วหรือไม่
    if (usedWords.size === totalWords) {
        // แสดงคะแนนสุดท้ายเมื่อเล่นครบทุกคำ
        showFinalScore();
        return;
    }

    playedWords++;
    clearInterval(timer); // ยกเลิกตัวจับเวลาเดิม
    timeLeft = 30; // ตั้งเวลาใหม่
    updateTimerDisplay(); // อัพเดทการแสดงเวลา
    updateLivesDisplay(); // อัพเดทการแสดงชีวิต
    startTimer(); // เริ่มจับเวลาใหม่

    // วนลูปจนกว่าจะได้คำที่ยังไม่เคยใช้
    let selectedWord;
    do {
        let randomIndex = Math.floor(Math.random() * words.length);
        selectedWord = words[randomIndex];
    } while (usedWords.has(selectedWord.word));

    // เพิ่มคำที่เลือกเข้าไปในชุดคำที่ใช้แล้ว
    usedWords.add(selectedWord.word);
    currentWord = selectedWord;

    // สร้างคำสลับที่ต้องไม่เหมือนคำเดิม
    let scrambledWord;
    do {
        scrambledWord = scrambleWord(currentWord.word);
    } while (scrambledWord === currentWord.word);

    wordText.innerText = scrambledWord;
    hintText.innerText = `Hint: ${currentWord.hint}` || "No hint available";
    inputField.value = "";
    inputField.style.background = "white";

    // อัพเดทความคืบหน้า
    document.getElementById('progress').innerText = 
        `คำ: ${playedWords}/${totalWords}`;
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
    lives--;
    updateLivesDisplay();

    if (lives <= 0) {
        Swal.fire({
            title: '💀 Game Over!',
            text: 'คุณหมดหัวใจแล้ว!',
            icon: 'error',
            confirmButtonText: 'เริ่มใหม่',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                resetGame();
            }
        });
    } else {
        Swal.fire({
            title: '❌ คุณเสียหัวใจ!',
            text: `เหลือ ❤️ ${lives} ดวง`,
            icon: 'warning',
            timer: 2000,
            showConfirmButton: false,
        }).then(() => {
            initGame();
        });
    }
};

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if (userWord !== currentWord.word) {
        Swal.fire({
            title: 'Incorrect! 😕',
            text: `The correct word was: ${currentWord.word}`,
            icon: 'error',
            timer: 2000,
            showConfirmButton: false
        });
        inputField.style.background = "#ffcccc";
        streak = 0; // 🔥 รีเซ็ต Streak ถ้าตอบผิด
        streakText.innerText = `🔥 Streak: ${streak}`;
        reduceLife(); // 🔥 ลดหัวใจเมื่อผิด
        return;
    }

    score++;
    streak++; // เพิ่มค่า Streak ถ้าตอบถูก
    inputField.style.background = "#ccffcc"; // เปลี่ยนเป็นสีเขียวเมื่อถูก
    streakText.innerText = `🔥 Streak: ${streak}`;
    
    Swal.fire({
        title: 'Correct! 🎉',
        html: `
            <p>Score: ${score}</p>
            <p>Streak: ${streak}🔥</p>
        `,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
    });

    initGame();
};

// ฟังก์ชันสลับตัวอักษรในคำ โดยต้องไม่เหมือนคำเดิม
const scrambleWord = (word) => {
    let scrambled;
    do {
        scrambled = word.split("")
            .sort(() => Math.random() - 0.5)
            .join("");
    } while (scrambled === word && word.length > 1);
    return scrambled;
};

// ฟังก์ชันรีเซ็ตเกม
const resetGame = () => {
    streak = 0;
    score = 0;
    lives = 3;
    playedWords = 0;
    usedWords.clear(); // ล้างชุดคำที่ใช้แล้วทั้งหมด
    document.getElementById('progress').innerText = 
        `Progress: ${playedWords}/${totalWords}`;
    initGame();
};

// 🔥 ล้างค่า Streak และข้อมูลทั้งหมดเมื่อออกจากเกม
window.addEventListener("beforeunload", function () {
    streak = 0;
    lives = 3;
});

// Add this new function for showing final score
const showFinalScore = () => {
    Swal.fire({
        title: 'จบเกม! 🎉',
        html: `
            <div class="final-score">
                <p>คะแนนของคุณ : ${score}/${totalWords}</p>
                <p>ชีวิตที่เหลือ : ${lives}❤️</p>
            </div>
        `,
        icon: 'success',
        confirmButtonText: 'เริ่มใหม่อีกครั้ง',
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            resetGame();
        }
    });
};
