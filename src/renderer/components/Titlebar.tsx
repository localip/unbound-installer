import { IPCEvents } from '../../common/constants';
import { ipcRenderer } from 'electron';

import Unbound from './icons/Unbound';
import Cross from './icons/Cross';
import Minus from './icons/Minus';

import '../styles/titlebar.scss';

export default (props: Record<string, any>) => {
   return <div class='unbound-title-bar'>
      <Unbound width={32} height={32} class='unbound-title-bar-logo' />
      <span class='unbound-title-bar-title'>{props.title}</span>
      <div class='unbound-title-bar-drag' />
      <div class='unbound-title-bar-container'>
         <Minus
            onClick={() => {
               console.log(ipcRenderer.sendSync(IPCEvents.GET_LOCALE));
               ipcRenderer.send(IPCEvents.INSTALLER_MINIMIZE);
            }}
            width={20}
            height={20}
            class='unbound-title-bar-button'
         />
         <Cross
            onClick={() => ipcRenderer.send(IPCEvents.INSTALLER_CLOSE)}
            width={20}
            height={20}
            class='unbound-title-bar-button danger'
         />
      </div>
   </div>;
};;