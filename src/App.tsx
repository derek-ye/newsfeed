/** @jsxImportSource solid-js */
import type { Component, Setter } from 'solid-js';
import type { Post } from './types/Post';

import PostContainerComponent from './components/PostContainer';
import SourceSelectorComponent from './components/sources/SourceSelector';
import { createSignal } from 'solid-js';
import {getHackerNewsRss, getLobstersRss} from './utils/getData'

const App: Component = () => {

  const [xmlData, setXmlData] = createSignal<Post[]>([]);

  return (
    <div class='flex justify-center bg-zinc-900 min-w-screen min-h-screen'>
      <div class='px-4 py-2 bg-zinc-900 min-w-[95%] lg:min-w-[35%]'>
        <SourceSelectorComponent 
          clearPostData={() => setXmlData([])}
          setDataFromHN={() => getHackerNewsRss(setXmlData)} 
          setDataFromLobsters={() => getLobstersRss(setXmlData)}
        />
        <PostContainerComponent getPostData={xmlData} setDataFromRSSSource={() => getHackerNewsRss(setXmlData)}/>
      </div>
      
    </div>
  );
};

export default App;
