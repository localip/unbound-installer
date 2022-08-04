import { app, session } from 'electron';

app.whenReady().then(() => {
   session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
      delete details.responseHeaders['Content-Security-Policy'];

      callback({ responseHeaders: details.responseHeaders });
   });
});