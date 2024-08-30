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
    
    // Validate URL and format
    if (url) {
        download(url, format);
        document.getElementById('url-input').value = '';
    } else {
        console.error('Please enter a valid URL');
    }
});

const download = (url, format) => {
    const button = document.getElementById('download-button');
    button.style.padding = '0';
    button.style.backgroundColor = '#64C896';
    
    // Check if URL is for Instagram or other supported services
    let service = 'loader.to'; // Default service
    let serviceUrl = '';

    if (url.includes('instagram.com')) {
        // If Instagram URL, use the appropriate service URL or API
        service = 'instagramDownloader'; // Replace with actual Instagram downloader service
        serviceUrl = `https://example.com/instagramDownloader?url=${encodeURIComponent(url)}&f=${format}`;
    } else {
        // Use loader.to for other URLs
        serviceUrl = `https://loader.to/api/button/?url=${encodeURIComponent(url)}&f=${format}`;
    }

    button.innerHTML = `<iframe style='height: 52px; width:100%; border: none; overflow: hidden;' src="${serviceUrl}"></iframe>`;
}
