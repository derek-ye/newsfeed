import type { Component } from 'solid-js';
import PostComponent from './Post';
import { createSignal } from 'solid-js';
import type { Post } from '../types/Post';

const PostContainerComponent: Component = () => {
    const [xmlData, setXmlData] = createSignal<Post[]>([{
        title: 'Best Title',
        altlink: 'Best Title',
        link: 'Best Title',
        date: 'Best Title'
    }]);

    const getHackerNewsRss = () => {
      let request = new Request(`https://web-production-9bc0.up.railway.app/news.ycombinator.com/rss`);
    
      fetch(request).then((results) => {
        // results returns XML. lets cast this to a string, then create
        // a new DOM object out of it!
        return results
          .text()
          .then(( str ) => {
            
            let responseDoc = new DOMParser().parseFromString(str, 'application/xml');
            console.log(responseDoc)
    
            // turn from HTMLCollection to array
            let postsAsHTML = Array.prototype.slice.call(responseDoc.getElementsByTagName("item"))
            console.log(postsAsHTML)
            let posts = postsAsHTML.map(e => {
              // console.log(e.childNodes[0])
              let title = e.childNodes[0].textContent
              let link = e.childNodes[1].textContent
              let pubdate = e.childNodes[2].textContent
              let altlink = e.childNodes[3].textContent
    
              const postObj: Post = {
                title: title,
                altlink: altlink,
                link: link,
                date: pubdate
              }
              return postObj
            })
            setXmlData(posts)
          })
      });
    }

    getHackerNewsRss()
    
    return (
        <div class='px-4 py-2'>
            { xmlData().map(e => 
                <PostComponent {...e}></PostComponent>
            ) }
        </div>
    );
}

export default PostContainerComponent;