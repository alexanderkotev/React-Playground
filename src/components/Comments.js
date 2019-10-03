import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List } from "react-virtualized";
import '../styles/main.scss';

function Comments() {

  const listHeight = 500;
  const rowHeight = 150;
  const rowWidth = 1500;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments/').then((res) => {
      setComments(res.data);
    })
      .catch((e) => {
        return <div>Error</div>
      });
  }, []);

  let renderComment = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className='data-container'>
        <div className='name'>{comments[index].name}</div>
        <div className='email'>{comments[index].email}</div>
        <p className='body'>{comments[index].body}</p>
      </div>
    );
  };

  return (

<div className = "Comments" >
  <h1 className='page-title'>Comments</h1>
    <List
      width={rowWidth}
      height={listHeight}
      rowHeight={rowHeight}
      rowRenderer={renderComment}
      rowCount={comments.length} />
</div>
  );
}

export default Comments;
