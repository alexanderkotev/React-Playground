import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, AutoSizer } from "react-virtualized";
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

  console.log(comments);

  return (

    <div className="Comments" >
      <h1 className='page-title'>Comments</h1>
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={renderComment}
            rowCount={comments.length} />
        )}
      </AutoSizer>
    </div>
  );
}

function CompareState(prev, next) {
  return prev != next;
}

export default React.memo(Comments, CompareState);
