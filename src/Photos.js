import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List } from "react-virtualized";
import './main.scss';

function Photos() {

  const listHeight = 500;
  const rowHeight = 200;
  const rowWidth = 800;

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos/').then((res) => {
      setPhotos(res.data);
    })
      .catch((e) => {
        return <div>Error</div>
      });
  }, []);

  let renderPhoto = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className='data-container'>
        <div className='title'>{photos[index].title}</div>
        <img src={photos[index].thumbnailUrl} className='thumbnailUrl' />
      </div>
    );
  };

  return (

<div className = "Photos" >
  <h1 className='page-title'>Photos</h1>
    <List
      width={rowWidth}
      height={listHeight}
      rowHeight={rowHeight}
      rowRenderer={renderPhoto}
      rowCount={photos.length} />
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

export default Photos;
