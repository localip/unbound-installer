import { createSignal, Match, Switch } from 'solid-js';
import { render } from 'solid-js/web';

import * as Routes from './pages';
import Messages from '@i18n';

import Titlebar from '@components/Titlebar';
import Reply from '@components/icons/Reply';
import What from '@components/icons/What';
import Button from '@components/Button';

import '@styles/index.scss';

function App() {
   const [route, setRoute] = createSignal('Dashboard');

   return <>
      <Titlebar title={route() in Routes ? Messages[`ROUTE_${route().toUpperCase()}`] ?? route() : Messages.ROUTE_NOT_FOUND} />
      <Switch
         fallback={<div class='unbound-installer-what'>
            <What width={100} height={100} />
            {Messages.UNKOWN_ROUTE}
            <Reply
               class='unbound-installer-what-back'
               width={32}
               height={32}
               onClick={() => setRoute('Dashboard')}
            />
            <Button>hi</Button>
         </div>}
      >
         <Match when={route() === 'Dashboard'}>
            <Routes.Dashboard />
         </Match>
      </Switch>
   </>;
}

render(() => <App />, document.getElementById('root'));