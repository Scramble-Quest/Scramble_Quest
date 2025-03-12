window.onload = function () {
    var mySong = document.getElementById("mySong");
    var icon = document.getElementById("icon");
    var volumeSlider = document.getElementById("volumeSlider");

    // เล่น / หยุดเพลงเมื่อกดรูป
icon.onclick = function () {
    if (mySong.paused) {
        mySong.play();
        icon.src = "/img/pause.png"; // เปลี่ยนเป็นไอคอนหยุด
    } else {
        mySong.pause();
        icon.src = "/img/play.png"; // เปลี่ยนเป็นไอคอนเล่น
    }
};

// ปรับระดับเสียง
volumeSlider.addEventListener("input", function () {
        var volume = parseFloat(volumeSlider.value); // แปลงค่าเป็นตัวเลข
        mySong.volume = volume;
        console.log("Volume:", mySong.volume); // ตรวจสอบค่าที่อัปเดต
    });
};
    
document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".input"); // ดึง input
    const checkButton = document.querySelector(".check-word"); // ดึงปุ่ม Check
    
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
        // ตรวจสอบว่ากด Enter
        event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ (ถ้ามีฟอร์ม)
        checkButton.click(); // กดปุ่ม Check อัตโนมัติ
        }
    });
});

// แก้ไขส่วนของ preloader
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector(".loader");
    const preloader = document.querySelector("#preloader");
    const mySong = document.getElementById("mySong");
    
    // หยุดเพลงและเกมไว้ก่อน
    mySong.pause();
    window.gameStarted = false; // สร้างตัวแปร global สำหรับควบคุมสถานะเกม

    function startGame() {
        // ซ่อน preloader
        preloader.style.display = "none";
        loader.style.display = "none";
        
        // เริ่มเกมและเพลง
        window.gameStarted = true; // อนุญาตให้เกมเริ่มได้
        initGame(); // เริ่มเกมใหม่
        mySong.play();
    }

    // ตรวจสอบว่าเป็นมือถือหรือไม่
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        setTimeout(startGame, 1500);
    } else {
        setTimeout(startGame, 3000);
    }
});

// Update the volume control
volumeSlider.addEventListener("input", function () {
    var volume = parseFloat(volumeSlider.value);
    mySong.volume = volume;
    // Also update sound effects volume
    correctSound.volume = volume;
    wrongSound.volume = volume;
    gameOverSound.volume = volume;
});