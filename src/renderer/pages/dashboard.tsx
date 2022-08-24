import Button from '@components/Button';
import CheckCircle from '@components/icons/CheckCircle';
import CrossCircle from '@components/icons/CrossCircle';
import Roadmap from '@components/Roadmap';
import installation from 'renderer/stores/installation';
import { createMemo, ParentProps } from 'solid-js';
import {Dynamic} from 'solid-js/web';
import '../styles/dashboard.scss';

interface CardProps extends ParentProps {
   title: any,
   content: any,
   label: string,
   onSelect(): void,
   status: 'red' | 'green'
}

function Card({title, content, onSelect, label, status}: CardProps) {
   return <div class='unbound-option-card'>
      <div class='unbound-option-card-title'>
         <span>{title}</span>
         <Dynamic
            component={status === 'green' ? CheckCircle : CrossCircle}
            color={status === 'green' ? '#3BA55D' : '#ED4245'}
         />
      </div>
      <div class='unbound-option-card-content'>{content}</div>
      <div class='unbound-option-card-footer'>
         <Button onClick={onSelect}>{label}</Button>
      </div>
   </div>;
}

export default () => {
   const [store, setState] = installation;

   const progress = createMemo(() => {
      let progress = 0;

      if (store.hasAddons) progress += 1;
      if (store.hasKernel) progress += 1;
      if (store.hasUnbound) progress += 1;

      return progress;
   });

   return <div class='unbound-dashboard'>
      <Roadmap
         title="Roadmap"
         map={[
            'Install Kernel',
            'Install Unbound',
            'Install Addons'
         ]}
         progress={progress()}
      />
      <div class='unbound-divider'/>
      <Card
         title='Install Kernel'
         content='You must have kernel installed to be able to use unbound.'
         label='Install'
         status={store.hasKernel ? 'green' : 'red'}
         onSelect={() => {}}
      />
      <Card
         title='Install Unbound'
         content={`Install Unbound's core to experience it's full power & glance.`}
         label='Install'
         status={store.hasUnbound ? 'green' : 'red'}
         onSelect={() => {}}
      />
   </div>;
};