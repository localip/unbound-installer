import { ParentProps } from 'solid-js';
import '../styles/button.scss';

interface ButtonProps extends ParentProps {
   onClick?(e: MouseEvent): void; 
}

export default (props: ButtonProps) => {
   return <button class='unbound-button' onClick={props.onClick}>
      {props.children}
   </button>;
};