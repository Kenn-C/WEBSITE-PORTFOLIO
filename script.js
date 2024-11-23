let showingName = false;

function nextText() {
    const fullText = document.getElementById('fullText');
    const nameText = document.getElementById('nameText');

    if (!showingName) {
        // Fade out the catchphrase
        fullText.style.opacity = '0';
        setTimeout(() => {
            fullText.style.display = 'none'; // Completely hide it
            nameText.style.display = 'block'; // Make "My Name is" visible
            setTimeout(() => {
                nameText.style.opacity = '1'; // Fade it in
            }, 10); // Small delay to ensure display is applied before opacity
        }, 500); // Matches fade-out duration
    } else {
        // Fade out "My Name is"
        nameText.style.opacity = '0';
        setTimeout(() => {
            nameText.style.display = 'none'; // Completely hide it
            fullText.style.display = 'block'; // Make the catchphrase visible
            setTimeout(() => {
                fullText.style.opacity = '1'; // Fade it in
            }, 10); // Small delay to ensure display is applied before opacity
        }, 500); // Matches fade-out duration
    }

    showingName = !showingName; // Toggle state
}

// Add the CV download button event listener
document.getElementById('downloadCV').addEventListener('click', function () {
    window.open('path_to_your_cv.pdf', '_blank');
});
