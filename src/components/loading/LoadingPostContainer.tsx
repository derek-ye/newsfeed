import type { Component } from 'solid-js';
import styles from './LoadingPost.module.css';
import LoadingPost from './LoadingPost';

const LoadingPostContainerComponent: Component = () => {
    return (
        <div>
          <LoadingPost length='lg'/>          
          <LoadingPost length='md'/>
          <LoadingPost length='lg'/>
          <LoadingPost length='md'/>
          <LoadingPost length='sm'/>
          <LoadingPost length='sm'/>
        </div>
    );
}

export default LoadingPostContainerComponent;