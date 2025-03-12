document.addEventListener("DOMContentLoaded", function() {
    // Audio elements initialization
    const mySong = document.getElementById("mySong");
    const icon = document.getElementById("icon");
    const volumeSlider = document.getElementById("volumeSlider");
    const correctSound = document.getElementById("correctSound");
    const wrongSound = document.getElementById("wrongSound");
    const gameOverSound = document.getElementById("gameOverSound");

    // Set initial state
    let isAudioInitialized = false;

    // Initialize audio on first user interaction
    function initializeAudio() {
        if (!isAudioInitialized) {
            mySong.volume = volumeSlider.value;
            correctSound.volume = volumeSlider.value;
            wrongSound.volume = volumeSlider.value;
            gameOverSound.volume = volumeSlider.value;
            isAudioInitialized = true;
        }
    }

    // Play/Pause music
    icon.addEventListener("click", function() {
        initializeAudio();
        if (mySong.paused) {
            mySong.play().then(() => {
                icon.src = "/img/pause.png";
            }).catch(error => {
                console.error("Playback failed:", error);
            });
        } else {
            mySong.pause();
            icon.src = "/img/play.png";
        }
    });

    // Volume control
    volumeSlider.addEventListener("input", function() {
        const volume = parseFloat(this.value);
        [mySong, correctSound, wrongSound, gameOverSound].forEach(audio => {
            if (audio) audio.volume = volume;
        });
    });

    // Game initialization
    const input = document.querySelector(".input");
    const checkButton = document.querySelector(".check-word");
    const loader = document.querySelector(".loader");
    const preloader = document.querySelector("#preloader");

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkButton.click();
        }
    });

    // Preloader and game start
    mySong.pause();
    window.gameStarted = false;

    function startGame() {
        preloader.style.display = "none";
        loader.style.display = "none";
        window.gameStarted = true;
        initGame();
    }

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setTimeout(startGame, isMobile ? 1500 : 3000);
});