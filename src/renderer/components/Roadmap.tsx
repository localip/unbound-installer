import { Index, ParentProps, Show } from 'solid-js';
import {Dynamic} from 'solid-js/web';
import CheckCircle from './icons/CheckCircle';
import CrossCircle from './icons/CrossCircle';

import '../styles/roadmap.scss';

interface RoadmapProps extends ParentProps {
    map: string[],
    progress: number,
    title?: any;
}

export default (props: RoadmapProps) => {
    return (
        <div class='unbound-roadmap'>
            <Show when={'title' in props}>
                <h3 class='unbound-roadmap-title'>
                    {props.title}
                </h3>
            </Show>
            <div class='unbound-roadmap-items'>
                <Index each={props.map}>
                    {(label, index) => {
                        const gained = props.progress && props.progress >= index + 1;

                        return <>
                            <Show when={index > 0}>
                                <span classList={{
                                    'unbound-roadmap-line': true,
                                    'unbound-roadmap-line-done': gained
                                }}></span>
                            </Show>
                            <div class='unbound-roadmap-goal'>
                                <Dynamic
                                    component={gained ? CheckCircle : CrossCircle}
                                    color={gained ? '#3BA55D' : '#ED4245'}
                                />
                                <span class='unbound-roadmap-label'>{label()}</span>
                            </div>
                        </>
                    }}
                </Index>
            </div>
        </div>
    );
}