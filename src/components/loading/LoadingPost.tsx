import type { Component } from 'solid-js';
import styles from './LoadingPost.module.css';

type LoadingPostProps = {
    length: string
}

const LoadingPostComponent: Component<LoadingPostProps> = (props) => {
    let shimmerLine = <div class={`${styles.shimmerBG} ${styles.line} ${styles.large}`}></div>;
    if (props.length === 'sm') {
        shimmerLine = <div class={`${styles.shimmerBG} ${styles.line} ${styles.small}`}></div>;
    }
    else if (props.length === 'md') {
        shimmerLine = <div class={`${styles.shimmerBG} ${styles.line} ${styles.medium}`}></div>;
    }

    return (
        <div class='px-4 py-2 bg-zinc-800 my-2 rounded-md flex'>
            { shimmerLine }
            <div class='flex-auto w-8 lg:w-36'></div>
            <div class={`${styles.shimmerBG} ${styles.line} ${styles.endlink} w-8 lg:w-12`}></div>
        </div>
    );
    
}

export default LoadingPostComponent;