import type { Component } from 'solid-js';
import styles from './SourceSelector.module.css';

type SourceSelectorProps = {
    clearPostData: () => void,
    setDataFromHN: () => void,
    setDataFromLobsters: () => void,
    setDataFromCareerGrowthSources: () => void
}

const handleOnMouseMove = e => {
    const { currentTarget: target} = e;
    const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

const SourceSelectorComponent: Component<SourceSelectorProps> = (props: SourceSelectorProps) => {
    return (
        <div class='py-3 mb-2 my-2 flex-nowrap items-center'>
            <button class={`rounded-md px-4 py-1 mr-2 focus:ring-2 focus:ring-violet-300 ` + styles.sourceButton}
                onClick={() => {
                    props.clearPostData()
                    props.setDataFromHN()
                }}
                onMouseMove={
                    handleOnMouseMove
                }
            >
                Hackernews
            </button>
            <button class={`rounded-md px-4 py-1 mr-2 focus:ring-2 focus:ring-violet-300 ` + styles.sourceButton}
                onClick={() => {
                    props.setDataFromLobsters()
                    props.clearPostData()
                }}
                onMouseMove={
                    handleOnMouseMove
                }
            >
                Lobste.rs
            </button>
            {/* <button class={`rounded-md px-4 py-1 mr-2 focus:ring-2 focus:ring-violet-300 ` + styles.sourceButton}
                onClick={() => {
                    props.setDataFromCareerGrowthSources()
                    props.clearPostData()
                }}
                onMouseMove={
                    handleOnMouseMove
                }
            >
                Career
            </button> */}
        </div>
    );
}

export default SourceSelectorComponent;