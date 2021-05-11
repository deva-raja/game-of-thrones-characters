import React from 'react';
import Character from './Character'
import Spinner from './Spinner';

function CharacterGrid({ datas, isLoading }) {
  return (
    <div className='cards'>
      {isLoading ? (
          <Spinner></Spinner>
      ) : (
        datas.map((data) => {
          return <Character key={data._id} data={data}></Character>;
        })
      )}
    </div>
  );
}

export default CharacterGrid;
