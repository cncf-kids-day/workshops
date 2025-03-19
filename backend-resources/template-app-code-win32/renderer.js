const { ipcRenderer } = require('electron');

function handleClick() {
    
    // GitHub raw file URL (replace with your file's raw URL)
    const fileUrl = 'https://raw.githubusercontent.com/cncf-kids-day/workshops/main/Roblox-in-London.rbxl'; // replace with CNCF's GitHub

    // File name to save as
    const fileName = 'roblox_project.rbxl';

    // Fetch the file and create a downloadable link
    fetch(fileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = fileName;

            document.body.appendChild(a);
            a.click();

            window.URL.revokeObjectURL(url); // Free up memory
            document.body.removeChild(a);
        })
        .catch(error => {
            console.error('Error downloading the file:', error);
        });
}

document.getElementById('imageButton').addEventListener('click', async () => {
    
    const fileUrl = 'https://raw.githubusercontent.com/cncf-kids-day/workshops/main/Roblox-in-London.rbxl'; // Replace with your file URL
    
    // Send the download request to the main process
    ipcRenderer.send('download-file', { url: fileUrl });

    
    
    
});

ipcRenderer.on('download-complete', (event, path) => {
    alert(`File downloaded successfully to: ${path}`);
});
    

