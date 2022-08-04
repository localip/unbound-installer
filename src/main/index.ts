import { app, BrowserWindow } from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

import './ipc';
import './csp';

if (require('electron-squirrel-startup')) {
   app.quit();
}

app.on('ready', spawn);

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
      app.quit();
   }
});

app.on('activate', () => {
   if (BrowserWindow.getAllWindows().length === 0) {
      spawn();
   }
});

function spawn(): void {
   const win = new BrowserWindow({
      height: 500,
      width: 500,
      frame: false,
      autoHideMenuBar: true,
      resizable: false,
      webPreferences: {
         preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
         nodeIntegration: true,
         contextIsolation: false
      },
   });

   win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

   if (process.env.NODE_ENV !== 'production') {
      win.webContents.openDevTools();
   }
}