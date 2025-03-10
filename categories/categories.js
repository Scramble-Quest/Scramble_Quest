document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const gameItems = document.querySelectorAll(".game1, .game2, .game3, .htmlgame1, .htmlgame2, .htmlgame3, .cssgame1, .cssgame2, .cssgame3");

    searchBar.addEventListener("keyup", (event) => {
        const searchText = event.target.value.toLowerCase();
        let visibleCount = 0;

        gameItems.forEach((item) => {
            const textElement = item.querySelector(".text");
            const categoryElement = item.querySelector("p");

            if (textElement && categoryElement) {
                const text = textElement.textContent.toLowerCase();
                const category = categoryElement.textContent.toLowerCase();

                if (text.includes(searchText) || category.includes(searchText)) {
                    item.style.display = "block";
                    visibleCount++;
                } else {
                    item.style.display = "none";
                }
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const menuToggle = document.getElementById('menu-toggle');

    overlay.addEventListener('click', function() {
        menuToggle.checked = false;
    });
});