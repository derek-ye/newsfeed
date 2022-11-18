import type { Accessor, Component, Setter } from 'solid-js';
import type { Post } from '../types/Post';

import PostComponent from './Post';
import LoadingPostContainerComponent from './loading/LoadingPostContainer';


function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

type PostContainerProp = {
  getPostData: Accessor<Post[]>,
  setDataFromRSSSource: () => void
}

const PostContainerComponent: Component<PostContainerProp> = (props: PostContainerProp) => {
    props.setDataFromRSSSource()
    
    return (
        <div>
            { props.getPostData().length > 0 ?
              props.getPostData().map(e => <PostComponent {...e}></PostComponent>) :
              <LoadingPostContainerComponent />
            }
        </div>
    );
}

export default PostContainerComponent;