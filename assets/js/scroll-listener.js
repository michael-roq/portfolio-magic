// Select the element by ID
const bodyHeaderTitle = document.getElementById('body-header-title');

// Set initial opacity to 0 so it's hidden on load
bodyHeaderTitle.style.opacity = 0;
bodyHeaderTitle.style.transition = "opacity 0.5s ease"; // Set transition for smooth fade

// Function to handle scroll and fade in/out
function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        // Fade in
        bodyHeaderTitle.style.opacity = 1;
    } else {
        // Fade out
        bodyHeaderTitle.style.opacity = 0;
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);