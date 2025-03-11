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
const loader = document.querySelector(".loader");
const preloader = document.querySelector("#preloader");
window.addEventListener("load", function(){
    preloader.style.display = "none"
    loader.style.display = "none"
})