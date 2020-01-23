import React, { useState, useEffect } from 'react';

import Cards from './Cards';

const Main = () => {
  const [movielist, setMovielist] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    (async ()=>{
      const call = await fetch('http://www.omdbapi.com/?type=movie&apikey=a1b5f9ec&s=abc');
      const data = await call.json();
      const searchRes = data.Search.filter(obj => obj.Title.toLowerCase().startsWith(search.toLowerCase()))
      if(search !== ''){
        setMovielist(searchRes);
      }
    })();
  },[search])

  return (
    <div className='mt-5'>
      <div className='sm-12'>
        <input type='text' placeholder='Search Movie List'
          className='w-50'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Cards movielist={movielist}/>
    </div>
  );
};

export default Main;