document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const gameItems = document.querySelectorAll(".game1, .game2, .game3, .game4, .htmlgame1, .htmlgame2, .htmlgame3, .htmlgame4, .cssgame1");

    searchBar.addEventListener("keyup", (event) => {
        const searchText = event.target.value.toLowerCase();
        let visibleCount = 0;

        gameItems.forEach((item) => {
            const text = item.querySelector(".text").textContent.toLowerCase();
            const category = item.querySelector("p").textContent.toLowerCase();

            if (text.includes(searchText) || category.includes(searchText)) {
                item.style.display = "block"; // แสดงบล็อก
                visibleCount++;
            } else {
                item.style.display = "none"; // ซ่อนบล็อก
            }
        });
    });
});

