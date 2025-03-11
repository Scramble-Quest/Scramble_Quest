document.addEventListener("DOMContentLoaded", function () {
    const vocabTable = document.getElementById("vocab-list");
    const levelSelect = document.getElementById("level-select");

    // ฟังก์ชันโหลดคำศัพท์จาก `words` (มาจาก wordgbeg.js)
    function loadVocab(level) {
        vocabTable.innerHTML = ""; // เคลียร์ตารางเก่า

        if (!words[level]) {
            console.error("Error: ไม่พบระดับคำศัพท์", level);
            return;
        }

        words[level].forEach(item => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.word}</td>
                <td>${item.meaning}</td>
            `;
            vocabTable.appendChild(row);
        });
    }

    // โหลดคำศัพท์เริ่มต้น (Beginner)
    loadVocab("begin");

    // เมื่อเปลี่ยนระดับ
    levelSelect.addEventListener("change", function () {
        let selectedLevel = levelSelect.value;
        loadVocab(selectedLevel);
    });
});

// ฟังก์ชันเริ่มเกม
function startGame() {
    let selectedLevel = document.getElementById("level-select").value;
    window.location.href = `game/gbeg.html?level=${selectedLevel}`;
}
