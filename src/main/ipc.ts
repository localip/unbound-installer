import { app, ipcMain, BrowserWindow } from 'electron';
import { IPCEvents } from '../common/constants';

ipcMain.on(IPCEvents.INSTALLER_MINIMIZE, (event) => {
   const sender = BrowserWindow.fromWebContents(event.sender);
   sender.minimize();
});

ipcMain.on(IPCEvents.INSTALLER_CLOSE, () => app.quit());

ipcMain.on(IPCEvents.GET_LOCALE, (event) => {
   event.returnValue = app.getLocale();
});