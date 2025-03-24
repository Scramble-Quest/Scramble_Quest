document.addEventListener("DOMContentLoaded", function () {
    const vocabTable = document.getElementById("vocab-list");

    function loadVocab() {
        vocabTable.innerHTML = "";

        if (!words["intermediate"]) {
            console.error("ไม่พบคำศัพท์ระดับ intermediate");
            return;
        }

        words["intermediate"].forEach(item => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.word}</td>
                <td>${item.hint}</td>
            `;
            vocabTable.appendChild(row);
        });
    }

    loadVocab();
});

function startGame() {
    window.location.href = "/categories/Css-Intermidiate/game/game-css2.html";
}
