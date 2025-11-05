const { app, BrowserWindow } = require('electron');
const path = require('path');

// 保持对窗口对象的全局引用，避免被垃圾回收
let mainWindow;

function createWindow() {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 800,  // 窗口宽度（根据你的游戏分辨率调整）
    height: 600, // 窗口高度
    icon: path.join(__dirname, 'icon.ico'), // 应用图标（可选）
    webPreferences: {
      nodeIntegration: false, // 禁用 Node.js 集成（安全推荐）
      contextIsolation: true  // 启用上下文隔离
    }
  });

  // 加载 Cocos 构建的 Web 项目入口文件（index.html）
  // 注意：将路径替换为你实际的 Web 构建产物路径（可放在 electron 项目的 www 文件夹下）
  mainWindow.loadFile(path.join(__dirname, 'www', 'index.html'));

  // 关闭窗口时触发
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用
app.on('ready', createWindow);

// 所有窗口关闭时退出应用
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定退出，否则应用与菜单栏保持活动
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // 在 macOS 上，点击 Dock 图标且没有其他窗口打开时，重新创建窗口
  if (mainWindow === null) {
    createWindow();
  }
});