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
