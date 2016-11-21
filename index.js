const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow = null;

function initialize() {
  function createWindow() {
    mainWindow = new BrowserWindow({ height: 600, width: 800 });
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // cleanup
    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  }

  app.on('ready', () => {
    createWindow();
  });

  // prevent zombie processes on Windows
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  });

  app.on('activate', function () {
    if (mainWindow === null) {
      createWindow()
    }
  });
}

initialize();
