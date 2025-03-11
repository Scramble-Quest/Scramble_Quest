document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const gameItems = document.querySelectorAll(".game1, .game2, .game3, .htmlgame1, .htmlgame2, .htmlgame3, .cssgame1, .cssgame2, .cssgame3");

    searchBar.addEventListener("keyup", (event) => {
        const searchText = event.target.value.toLowerCase();
        let visibleCount = 0;

        gameItems.forEach((item) => {
            const textElement = item.querySelector(".text");
            const categoryElement = item.querySelector("p:nth-child(3)");
            let shouldDisplay = false;

            if (textElement && categoryElement) {
                const text = textElement.textContent.toLowerCase();
                const category = categoryElement.textContent.toLowerCase();

                // Check for specific search terms
                switch(searchText) {
                    case "html":
                        shouldDisplay = item.classList.toString().includes("htmlgame");
                        break;
                    case "css":
                        shouldDisplay = item.classList.toString().includes("cssgame");
                        break;
                    case "beginner":
                        shouldDisplay = category.includes("ระดับผู้เริ่มต้น");
                        break;
                    case "intermediate":
                        shouldDisplay = category.includes("ระดับกลาง");
                        break;
                    case "advanced":
                        shouldDisplay = category.includes("ระดับสูง");
                        break;
                    default:
                        shouldDisplay = text.includes(searchText) || category.includes(searchText);
                }

                item.style.display = shouldDisplay ? "block" : "none";
                if (shouldDisplay) visibleCount++;
            }
        });
    });

    // Slideshow functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName("dot");
        
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        // Remove active class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        // Increment slide index
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        // Show current slide and activate corresponding dot
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        
        // Change slide every 5 seconds
        setTimeout(showSlides, 5000);
    }

    // Add click functionality to dots
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", () => {
            slideIndex = i;
            showSlides();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const menuToggle = document.getElementById('menu-toggle');

    overlay.addEventListener('click', function() {
        menuToggle.checked = false;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const filterPills = document.querySelectorAll('.filter-pill');
    
    filterPills.forEach(pill => {
        pill.addEventListener('click', function() {
            // Remove active class from all pills
            filterPills.forEach(p => p.classList.remove('active'));
            // Add active class to clicked pill
            this.classList.add('active');
            
            const filterValue = this.dataset.filter;
            filterCourses(filterValue);
        });
    });

    function filterCourses(category) {
        const courses = document.querySelectorAll('.game1, .game2, .game3, .htmlgame1, .htmlgame2, .htmlgame3, .cssgame1, .cssgame2, .cssgame3');
        
        courses.forEach(course => {
            if (category === 'all') {
                course.style.display = 'block';
            } else if (category === 'english') {
                // Check if the class starts with 'game' (English courses)
                if (course.classList.toString().match(/^game\d/)) {
                    course.style.display = 'block';
                } else {
                    course.style.display = 'none';
                }
            } else {
                // For HTML and CSS courses
                if (course.classList.toString().includes(category)) {
                    course.style.display = 'block';
                } else {
                    course.style.display = 'none';
                }
            }
        });
    }
});