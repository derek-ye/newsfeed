import type { Component } from 'solid-js';
import type { Post } from '../types/Post';
import styles from './Post.module.css';

const PostComponent: Component<Post> = (props: Post) => {
    return (
        <div class={`px-6 py-3 my-2 rounded-md bg-zinc-800 hover:bg-zinc-700 flex ${styles.post}`}>
          <a href={props.link} class='flex-nowrap' target="_blank">{props.title}</a>
          <div class='flex-auto min-w-[20px]'></div>
          <a href={props.altlink} class='underline flex-none' target="_blank">src</a>
        </div>
    );
}

export default PostComponent;