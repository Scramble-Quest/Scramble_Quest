document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const menuToggle = document.getElementById('menu-toggle');

    overlay.addEventListener('click', function() {
        menuToggle.checked = false;
    });
});