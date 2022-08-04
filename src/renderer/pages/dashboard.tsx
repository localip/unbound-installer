import { createEffect, createSignal, onMount } from 'solid-js';

export default () => {
   const [data, setData] = createSignal();

   onMount(async () => {
      const res = await fetch('https://api.github.com/repos/kernel-mod/electron/releases/latest');
      const payload = await res.json();

      setData(payload);
   });

   return <div>
      {!data ? <div style={{ color: 'white' }}>wait.</div> :
         <div>{data as any}</div>
      }
   </div>;
};