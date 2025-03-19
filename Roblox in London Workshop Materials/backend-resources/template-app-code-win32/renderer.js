const { ipcRenderer } = require('electron');

document.getElementById('imageButton').addEventListener('click', async () => {
    
    const fileUrl = 'https://raw.githubusercontent.com/cncf-kids-day/workshops/main/Roblox-in-London.rbxl'; // Pulls latest Roblox project
    
    // Send the download request to the main process
    ipcRenderer.send('download-file', { url: fileUrl });
    
});

ipcRenderer.on('download-complete', (event, path) => {
    alert(`File downloaded successfully to: ${path}`);
});
    

