import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { List } from "react-virtualized";
import './dataContainer.scss';

function DataContainer() {

  const listHeight = 800;
  const rowHeight = 150;
  const rowWidth = 800;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments/').then((res) => {
      setPosts(res.data);
    })
      .catch((e) => {
        return <div>Error</div>
      });
  }, []);

  let renderComment = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className='comment'>
        <div className='name'>{posts[index].name}</div>
        <div className='email'>{posts[index].email}</div>
        <p className='body'>{posts[index].body}</p>
      </div>
    );
  };

  return (

<div className = "list" >
      <List
        width={rowWidth}
        height={listHeight}
        rowHeight={rowHeight}
        rowRenderer={renderComment}
        rowCount={posts.length} />
</div>
    // <div className="DataContainer">
    //   <div>
    //     {
    //       posts.map(post => (
    //         <div>
    //           <h1 key={post.id}>{post.name}</h1>
    //           <h1>{post.email}</h1>
    //           <p>{post.body}</p>
    //         </div>
    //       ))
    //     }
    //   </div>
    // </div>
  );
}

export default DataContainer;
