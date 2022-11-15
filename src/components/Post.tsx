import type { Component } from 'solid-js';
import type { Post } from '../types/Post';

const PostComponent: Component<Post> = (props: Post) => {
    return (
        <div class='px-4 py-2'>
          <a href={props.altlink}>{props.title}</a>
          <br/>
        </div>
    );
}

export default PostComponent;