document.addEventListener("DOMContentLoaded", function () {
    const mySong = document.getElementById("mySong");
    const icon = document.getElementById("icon");
    const volumeSlider = document.getElementById("volumeSlider");
  
    // ตรวจสอบว่ามีองค์ประกอบเพลงครบถ้วน
    if (!mySong || !icon || !volumeSlider) {
        console.error("Error: ไม่พบองค์ประกอบของเพลง!");
        return;
    }
  
    // ตั้งค่าเสียงเริ่มต้น
    mySong.volume = volumeSlider.value;
  
    // ตรวจสอบว่าไฟล์เพลงโหลดสำเร็จ
    mySong.addEventListener("canplaythrough", () => {
        console.log("🎵 เพลงโหลดสำเร็จ!");
    });
  
    // ฟังก์ชันสลับเล่น/หยุดเพลง
    icon.addEventListener("click", function () {
        if (mySong.paused || mySong.ended) {
            mySong.play().catch(error => console.error("Error: ไม่สามารถเล่นเพลงได้!", error));
            icon.src = "/img/pause.png"; // เปลี่ยนเป็นปุ่มหยุด
        } else {
            mySong.pause();
            icon.src = "/img/play.png"; // เปลี่ยนเป็นปุ่มเล่น
        }
    });
  
    // ฟังก์ชันปรับระดับเสียง
    volumeSlider.addEventListener("input", function () {
        mySong.volume = volumeSlider.value;
    });
  
    // เมื่อเพลงหยุด ให้เปลี่ยนไอคอนเป็น Play
    mySong.addEventListener("pause", function () {
        icon.src = "/img/play.png";
    });
  
    // เมื่อเพลงเริ่มเล่น ให้เปลี่ยนไอคอนเป็น Pause
    mySong.addEventListener("play", function () {
        icon.src = "/img/pause.png";
    });
  });
  