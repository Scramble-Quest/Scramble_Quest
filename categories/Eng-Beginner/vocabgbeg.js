document.addEventListener("DOMContentLoaded", function() {
    const vocabTable = document.getElementById("vocab-list");

    vocabList.forEach(item => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.word}</td>
            <td>${item.meaning}</td>
            
        `;
        vocabTable.appendChild(row);
    });
});

function startGame() {
    window.location.href = "game/gbeg.html" // ลิงก์ไปยังหน้าเล่นเกม
}
