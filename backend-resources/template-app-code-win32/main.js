const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs');
const https = require('https');
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1092,
    height: 614,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on('download-file', async (event, { url }) => {
    
    // Prompt the user to select a save location
    const path = await dialog.showSaveDialog({
        title: 'Save File',
        defaultPath: 'London.rbxl',
    });

    if (path.canceled) {
        event.reply('download-complete', 'Save canceled by user');
        return;
    }
        
    //console.log(path.filePath);
    
    const file = fs.createWriteStream(path.filePath);

    https.get(url, (response) => {
        response.pipe(file);

        file.on('finish', () => {
            file.close(() => {
                console.log('File downloaded successfully!');
                event.reply('download-complete', path.filePath); // Notify the renderer process
            });
        });
    }).on('error', (err) => {
        fs.unlink(path.filePath, () => console.error('Error during download:', err.message));
    });
});
