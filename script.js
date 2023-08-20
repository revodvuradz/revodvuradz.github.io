// Get the banner image element by its id
var banner = document.getElementById("banner");

// Create an array of image sources
var images = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];

// Create a variable to keep track of the current image index
var index = 0;

// Create a function to change the image source
function changeImage() {
    // Increment the index by one
    index++;

    // If the index is equal to the length of the array, reset it to zero
    if (index == images.length) {
        index = 0;
    }

    // Set the image source to the corresponding element in the array
    banner.src = images[index];
}

// Call the function every 3 seconds using the setInterval method
setInterval(changeImage, 3000);
