const uploadArea = document.querySelector('.upload-area');
const imageUpload = document.getElementById('imageUpload');
const originalImage = document.getElementById('originalImage');
const enhancedImage = document.getElementById('enhancedImage');
const explanationText = document.getElementById('explanationText');
const progress = document.querySelector('.progress');
const downloadButton = document.getElementById('downloadButton');

// Simulate image processing and enhancement
function enhanceImage() {
    progress.style.width = '0%';
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            enhancedImage.src = originalImage.src; // Simulate enhancement by using the same image
            explanationText.innerText = "The image was enhanced by improving contrast and sharpening.";
            downloadButton.disabled = false;
            downloadButton.classList.add('enabled');
        } else {
            width += 10;
            progress.style.width = width + '%';
        }
    }, 300);
}

// Handle image upload
uploadArea.addEventListener('click', () => {
    imageUpload.click();
});

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            originalImage.src = e.target.result;
            enhancedImage.src = ""; // Clear the enhanced image while processing
            enhanceImage();
        }
        reader.readAsDataURL(file);
    }
});

// Handle download
downloadButton.addEventListener('click', () => {
    if (!downloadButton.disabled) {
        const link = document.createElement('a');
        link.href = enhancedImage.src;
        link.download = 'enhanced_image.png';
        link.click();
    }
});
