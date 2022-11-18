import type { Component } from 'solid-js';

type SourceSelectorProps = {
    clearPostData: () => void,
    setDataFromHN: () => void,
    setDataFromLobsters: () => void
}

const SourceSelectorComponent: Component<SourceSelectorProps> = (props: SourceSelectorProps) => {
    return (
        <div class='px-4 py-3 mb-6 lg:mb-12 bg-zinc-800 my-2 rounded-md flex-nowrap items-center'>
            <button class='rounded-full px-4 py-1 mr-1 focus:ring focus:ring-violet-900 focus:bg-zinc-900' 
                onClick={() => {
                    props.clearPostData()
                    props.setDataFromHN()
                }}
            >
                Hackernews
            </button>
            <button class='rounded-full px-4 py-1 focus:ring focus:ring-violet-900 focus:bg-zinc-900'
                onClick={() => {
                    props.setDataFromLobsters()
                    props.clearPostData()
                }}
            >
                Lobste.rs
            </button>
        </div>
    );
}

export default SourceSelectorComponent;