document.addEventListener("DOMContentLoaded", function () {
    const vocabTable = document.getElementById("vocab-list");

    function loadVocab() {
        vocabTable.innerHTML = "";

        if (!words["advanced"]) {
            console.error("ไม่พบคำศัพท์ระดับ advanced");
            return;
        }

        words["advanced"].forEach(item => {
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
    window.location.href = "/categories/Eng-Advanced/Game-Advanced/gadv.html";
}
