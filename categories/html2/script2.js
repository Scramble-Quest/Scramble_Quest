document.addEventListener("DOMContentLoaded", function() {
    const vocabTable = document.getElementById("vocab-list");

    // ✅ ตรวจสอบว่ามีคำศัพท์สำหรับ Beginner หรือไม่
    if (!words || !words['advanced']) {
        console.error("❌ Error: ไม่พบคำศัพท์สำหรับ Beginner");
        return;
    }

    // ✅ แสดงคำศัพท์ระดับ Beginner
    words['advanced'].forEach(item => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.word}</td>
            <td>${item.hint}</td> 
        `;
        vocabTable.appendChild(row);
    });
});

// ✅ ฟังก์ชันเริ่มเกม → ส่งระดับไปที่ `game-english-beginner.html`
function startGame() {
    window.location.href = "/categories/html2/game/game.html";
}