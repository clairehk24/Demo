// Select all buttons with the class 'category-btn'
const buttons = document.querySelectorAll('.category-btn');

// Loop through each button and add the event listener
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        this.classList.toggle('selected'); // Toggle the 'selected' class
    }); // Fixed missing closing parenthesis
});

// Filter Function to Show Videos
function filterVideos(subcategory) {
    // Hide all videos first
    const videos = document.querySelectorAll('.video-item');
    videos.forEach(video => {
        video.style.display = 'none'; // Hide all videos
    });

    // Show the videos that belong to the selected subcategory
    const selectedVideos = document.querySelectorAll('.' + subcategory);
    selectedVideos.forEach(video => {
        video.style.display = 'block'; // Display videos that match the subcategory
    });
}
