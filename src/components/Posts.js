import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List } from "react-virtualized";
import '../styles/main.scss';

function Posts() {

  const listHeight = 500;
  const rowHeight = 150;
  const rowWidth = 1500;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
      setPosts(res.data);
    })
      .catch((e) => {
        return <div>Error</div>
      });
  }, []);

  let renderPost = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className='data-container'>
        <div className='title'>{posts[index].title}</div>
        <p className='body'>{posts[index].body}</p>
      </div>
    );
  };

  return (

<div className = "Posts" >
  <h1 className='page-title'>Posts</h1>
    <List
      width={rowWidth}
      height={listHeight}
      rowHeight={rowHeight}
      rowRenderer={renderPost}
      rowCount={posts.length} />
</div>
  );
}

function CompareState(prev, next) {
  return prev != next;
}

export default React.memo(Posts, CompareState);
