import type { Component, Setter } from 'solid-js';
import type { Post } from '../types/Post';

const getHackerNewsRss = (updateSignal: Setter<Post[]>) => {
    let request = new Request(`https://cors.sisyphism.com/news.ycombinator.com/rss`);
  
    fetch(request).then((results) => {
      // results returns XML. lets cast this to a string, then create
      // a new DOM object out of it!
      return results
        .text()
        .then(( str ) => {
          
          let responseDoc = new DOMParser().parseFromString(str, 'application/xml');
  
          // turn from HTMLCollection to array
          let postsAsHTML = Array.prototype.slice.call(responseDoc.getElementsByTagName("item"))
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
          updateSignal(posts);
        })
    });
}

const getLobstersRss = (updateSignal: Setter<Post[]>) => {
    let request = new Request(`https://cors.sisyphism.com/lobste.rs/rss`);

    fetch(request).then((results) => {
        // results returns XML. lets cast this to a string, then create
        // a new DOM object out of it!

        return results
        .text()
        .then(( str ) => {
            
            let responseDoc = new DOMParser().parseFromString(str, 'application/xml');

            // turn from HTMLCollection to array
            let postsAsHTML = Array.prototype.slice.call(responseDoc.getElementsByTagName("item"))
            let posts = postsAsHTML.map(e => {
              let title = e.childNodes[1].textContent
              let link = e.childNodes[3].textContent
              let pubdate = e.childNodes[9].textContent
              let altlink = e.childNodes[5].textContent

              const postObj: Post = {
                  title: title,
                  altlink: altlink,
                  link: link,
                  date: pubdate
              }
              return postObj
            })
            updateSignal(posts);
        })
    });
}

const getDanLuuRss = (updateSignal: Setter<Post[]>) => {
  let request = new Request(`https://cors.sisyphism.com/danluu.com/atom.xml`);

  fetch(request).then((results) => {
      // results returns XML. lets cast this to a string, then create
      // a new DOM object out of it!
      return results
      .text()
      .then(( str ) => {
          
          let responseDoc = new DOMParser().parseFromString(str, 'application/xml');

          // turn from HTMLCollection to array
          let postsAsHTML = Array.prototype.slice.call(responseDoc.getElementsByTagName("item")).slice(0, 20)
          let posts = postsAsHTML.map(e => {
            let title = e.childNodes[1].textContent
            let link = e.childNodes[3].textContent
            let pubdate = e.childNodes[9].textContent
            let altlink = e.childNodes[5].textContent

            const postObj: Post = {
                title: title,
                altlink: altlink,
                link: link,
                date: pubdate
            }
            return postObj
          })
          updateSignal(posts);
      })
  });
}

const getKentCDoddsRss = (updateSignal: Setter<Post[]>) => {
  let request = new Request(`https://cors.sisyphism.com/kentcdodds.com/blog/rss.xml`);

  fetch(request).then((results) => {
      // results returns XML. lets cast this to a string, then create
      // a new DOM object out of it!
      return results
      .text()
      .then(( str ) => {
          
          let responseDoc = new DOMParser().parseFromString(str, 'application/xml');

          // turn from HTMLCollection to array
          let postsAsHTML = Array.prototype.slice.call(responseDoc.getElementsByTagName("item")).slice(0, 20)
          let posts = postsAsHTML.map(e => {
            let title = e.childNodes[1].textContent
            let link = e.childNodes[3].textContent
            let pubdate = e.childNodes[9].textContent
            let altlink = e.childNodes[5].textContent

            const postObj: Post = {
                title: title,
                altlink: altlink,
                link: link,
                date: pubdate
            }
            return postObj
          })
          // console.log(posts);
          updateSignal(posts);
      })
  });
}

const getIncrementRss = (updateSignal: Setter<Post[]>) => {
  let request = new Request(`https://cors.sisyphism.com/increment.com/feed.xml`);

  fetch(request).then((results) => {
      // results returns XML. lets cast this to a string, then create
      // a new DOM object out of it!
      return results
      .text()
      .then(( str ) => {
          
          let responseDoc = new DOMParser().parseFromString(str, 'application/xml');

          // turn from HTMLCollection to array
          let postsAsHTML = Array.prototype.slice.call(responseDoc.getElementsByTagName("item")).slice(0, 20)
          let posts = postsAsHTML.map(e => {
            let title = e.childNodes[1].textContent
            let link = e.childNodes[3].textContent
            let pubdate = e.childNodes[9].textContent
            let altlink = e.childNodes[5].textContent

            const postObj: Post = {
                title: title,
                altlink: altlink,
                link: link,
                date: pubdate
            }
            return postObj
          })
          // console.log(posts);
          updateSignal(posts);
      })
  });
}

const getCareerGrowthRss = (updateSignal: Setter<Post[]>) => {
  getDanLuuRss(updateSignal);
}

export {getHackerNewsRss, getLobstersRss, getCareerGrowthRss};