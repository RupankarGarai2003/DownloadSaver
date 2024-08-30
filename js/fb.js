

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


const DownloadForm = document.getElementById('download-form');
DownloadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = e.target.url.value.trim();
    const format = document.getElementById('format-select').value; // Get selected format
    
    // Validate URL if needed
    if (url) {
        download(url, format);
        document.getElementById('url-input').value = '';
    } else {
        // Handle empty URL case if necessary
    }
});

const download = (url, format) => {
    const button = document.getElementById('download-button');
    button.style.padding = '0';
    button.style.backgroundColor = '#64C896';
    button.innerHTML = `<iframe style='height: 52px; width:100%; border: none; overflow: hidden;' src="https://loader.to/api/button/?url=${encodeURIComponent(url)}&f=${format}"></iframe>`;
}
