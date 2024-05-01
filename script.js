const imageContainer = document.getElementById('image-container');
const refreshButton = document.getElementById('refresh-button');
const bearApi = 'https://placebear.com/';

const fetchRandomBearImage = () => {
    // Generate random width and height between 100 and 500
    const width = Math.floor(Math.random() * 400) + 100;
    const height = Math.floor(Math.random() * 400) + 100;
    const imageUrl = `${bearApi}${width}/${height}`;

    // Clear previous image
    imageContainer.innerHTML = '';

    // Create and append image element
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Random Bear Image';
    imageContainer.appendChild(img);
};

refreshButton.addEventListener("click", () => {
    fetchRandomBearImage();
});

// Fetch random bear image when the page loads
window.addEventListener("load", () => {
    fetchRandomBearImage();
});
