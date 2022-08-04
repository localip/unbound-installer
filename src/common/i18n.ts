import { IPCEvents } from './constants';
import { ipcRenderer } from 'electron';
import Languages from '../../i18n';

const lang = ipcRenderer.sendSync(IPCEvents.GET_LOCALE);

export const language = {
   current: 'de',
   store: Languages
};

// @ts-ignore
export default new Proxy(language.store[language.current], {
   get(target, prop) {
      // @ts-ignore
      return target?.[prop] ?? language.store['en-US']?.[prop];
   }
});