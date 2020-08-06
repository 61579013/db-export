const electron = require('electron');
const path = require('path');
const app  = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow () {
  //创建一个 800x600 的浏览器窗口
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // transparent: true, // 窗口透明
    // frame: false, // 边框隐藏
    // fullscreen: false,  // 不允许全屏
    // titleBarStyle: 'hidden', // 隐藏MAC标题
    resizable: false, // 固定宽高
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  //加载应用的界面文件
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  //打开开发者工具，方便调试
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', function () {
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
