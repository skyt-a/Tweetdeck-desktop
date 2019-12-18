const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL('https://tweetdeck.twitter.com/');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});