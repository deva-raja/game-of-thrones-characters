import React, { useState } from 'react';

function Search({ search }) {
  const [value, setValue] = useState('');

  function onChange(q) {
    setValue(q);
    search(q);
  }
  return (
    <section className='search'>
        <input
          type='text'
          placeholder='Search characters'
          autoFocus
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
    </section>
  );
}

export default Search;
