import type { Component } from 'solid-js';
import type { Post } from '../types/Post';
// import styles from 'Post.module.css'

const PostComponent: Component<Post> = (props: Post) => {
    return (
        <div class='px-4 py-2 bg-zinc-800 my-2 rounded-md flex'>
          <a href={props.link} class='flex-none flex-nowrap'>{props.title}</a>
          <div class='flex-auto'></div>
          <a href={props.altlink} class='underline flex-none'>src</a>
        </div>
    );
}

export default PostComponent;