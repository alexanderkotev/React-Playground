import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, AutoSizer } from "react-virtualized";
import '../styles/main.scss';

function Photos() {

  const listHeight = 500;
  const rowHeight = 300;
  const rowWidth = 1500;
  const columnWidth = 500;

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos/').then((res) => {
      setPhotos(res.data);
    })
      .catch((e) => {
        return <div>Error</div>
      });
  }, []);

  let renderPhoto = ({ columnIndex, key, rowIndex, style }) => {
    return (
      <div key={key} style={style} className='data-container'>
        <div className='title'>{photos[columnIndex].title}</div>
        <img src={photos[columnIndex].thumbnailUrl} className='image' />
      </div>
    );
  };

  return (

    <div className="Photos" >
      <h1 className='page-title'>Photos</h1>
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            autoContainerWidth={true}
            cellRenderer={renderPhoto}
            columnCount={Math.floor(width / columnWidth)}
            columnWidth={columnWidth}
            height={listHeight}
            rowCount={photos.length}
            rowHeight={rowHeight}
            width={width}
          />
        )}
      </AutoSizer>

    </div>
  );
}

function CompareState(prev, next) {
  return prev != next;
}

export default React.memo(Photos, CompareState);
