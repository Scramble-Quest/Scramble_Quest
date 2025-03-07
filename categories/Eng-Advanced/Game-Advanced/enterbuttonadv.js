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
  