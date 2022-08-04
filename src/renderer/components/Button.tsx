import { ParentProps } from 'solid-js';
import '../styles/button.scss';

interface ButtonProps extends ParentProps {

}

export default (props: ButtonProps) => {
   return <button class='unbound-button'>
      {props.children}
   </button>;
};