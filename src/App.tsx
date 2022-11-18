/** @jsxImportSource solid-js */
import type { Component } from 'solid-js';
import PostComponent from './components/Post';

import logo from './logo.svg';
import styles from './App.module.css';
import PostContainerComponent from './components/PostContainer';

const App: Component = () => {


  return (
    <div class='flex justify-center pt-6 bg-zinc-900 w-screen h-screen'>
      <PostContainerComponent />
    </div>
  );
};

export default App;
