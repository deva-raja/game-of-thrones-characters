import React from 'react';

function Character({ data }) {
  return (
    <div>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={data.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>{data.name}</h1>
            <ul>
              <li>
                <strong>House:</strong> {data.house}
              </li>
              <li>
                <strong>Status:</strong> {data.status}
              </li>
              <li>
                <strong>Quotes:</strong> "{data.quotes}"
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
