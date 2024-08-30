// const DownloadForm = document.getElementById('download-form');
// DownloadForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const url = e.target.url.value;
//     format = '1080';
//     download(url, format);
//     document.getElementById('url-input').value = '';
// });
// const download = (url, format) => {
//     const button = document.getElementById('download-button');
//     button.style.padding = '0';
//     button.style.backgroundColor = '#64C896';
//     button.innerHTML = `<iframe style='height: 52px; width:100%; border: none; overflow: hidden;' src="https://loader.to/api/button/?url=${url}&f=${format}"></iframe>`;
    
// }

// const DownloadForm = document.getElementById('download-form');
// const button = document.getElementById('download-button');
// const urlInput = document.getElementById('url-input');
// const errorMessage = document.getElementById('error-message');

// // Regular expression to validate various YouTube URL formats, including YouTube Shorts
// const youtubeURLPattern = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/|v\/|watch\?.+&v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:\S+)?$/;

// DownloadForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const url = e.target.url.value.trim();
    
//     // Validate the URL
//     if (youtubeURLPattern.test(url)) {
//         const format = '';
//         download(url, format);
//         urlInput.value = '';
//         errorMessage.textContent = ''; // Clear error message
//     } else {
//         errorMessage.textContent = 'Please enter a valid YouTube link';
//     }
// });

// const download = (url, format) => {
//     button.style.padding = '0';
//     button.style.backgroundColor = '#64C896';
//     button.innerHTML = `
//         <iframe
//             style="height: 52px; width: 100%; border: none; overflow: hidden;"
//             src="https://loader.to/api/button/?url=${encodeURIComponent(url)}&f=${format}"
//             title="Download Video"
//             aria-label="Download Video"
//         ></iframe>
//     `;
// };


const DownloadForm = document.getElementById('download-form');
const button = document.getElementById('download-button');
const urlInput = document.getElementById('url-input');
const errorMessage = document.getElementById('error-message');
const formatSelect = document.getElementById('format-select');

// Regular expression to validate various YouTube URL formats, including YouTube Shorts
const youtubeURLPattern = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/|v\/|watch\?.+&v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:\S+)?$/;

DownloadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = e.target.url.value.trim();
    const format = formatSelect.value; // Get selected format

    // Validate the URL
    if (youtubeURLPattern.test(url)) {
        download(url, format);
        urlInput.value = '';
        errorMessage.textContent = ''; // Clear error message
    } else {
        errorMessage.textContent = 'Please enter a valid YouTube link';
    }
});

const download = (url, format) => {
    button.style.padding = '0';
    button.style.backgroundColor = '#64C896';
    button.innerHTML = `
        <iframe
            style="height: 52px; width: 100%; border: none; overflow: hidden;"
            src="https://loader.to/api/button/?url=${encodeURIComponent(url)}&f=${format}"
            title="Download ${format.toUpperCase()}"
            aria-label="Download ${format.toUpperCase()}"
        ></iframe>
    `;
};
