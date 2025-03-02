document.getElementById('searchBar').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    
    // ค้นหาเกมทั้งหมด
    let games = document.querySelectorAll('.game > div, .htmlgame > div, .cssgame > div');
    
    games.forEach(game => {
        let gameText = game.querySelector('.text').textContent.toLowerCase();
        
        // แสดงหรือซ่อนเกมตามข้อความที่ค้นหา
        if (gameText.includes(searchQuery)) {
            game.style.display = 'block'; // แสดงถ้าตรงกับคำค้นหา
        } else {
            game.style.display = 'none'; // ซ่อนถ้าไม่ตรงกับคำค้นหา
        }
    });
});
