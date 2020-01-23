import React, { useState, useEffect } from 'react';

import Cards from './Cards';

const Main = () => {
  const [movielist, setMovielist] = useState([]);
  const [search, setSearch] = useState('');
  
  const MOCK_DATA = {
	  "Search":[
		{"Title":"ABC Africa","Year":"2001","imdbID":"tt0281534","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTU5ODc1ODc2Ml5BMl5BanBnXkFtZTcwMzEyOTgyMQ@@._V1_SX300.jpg"},
		{"Title":"Garotas do ABC","Year":"2003","imdbID":"tt0327451","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjdkMTkyMTMtMmU1MC00MDYyLWEwMWUtMDdiYzYwNmI0ZjZiXkEyXkFqcGdeQXVyMTU2ODc4ODQ@._V1_SX300.jpg"},
		{"Title":"The ABC of Love and Sex: Australia Style","Year":"1978","imdbID":"tt0077116","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjQyNzM5ODEtYmU0OC00OTRhLWI1ZTQtNzBkZWQwZjg4MmQzXkEyXkFqcGdeQXVyNjU1MTEwMjI@._V1_SX300.jpg"},
		{"Title":"ABC da Greve","Year":"1990","imdbID":"tt0317051","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDMxN2FjMjAtNTQ4YS00MWE0LWIzMjktZjc0YTUxOTc5YWFkXkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_SX300.jpg"},
		{"Title":"ABC Book","Year":"1976","imdbID":"tt0367697","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM4NDBlM2ItN2Y2MS00M2YxLTg2ZmYtNGRkZGExN2M3M2VhXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SX300.jpg"},
		{"Title":"2003 ABC World Stunt Awards","Year":"2003","imdbID":"tt0370250","Type":"movie","Poster":"N/A"},{"Title":"ABC 2000: The Millennium","Year":"1999","imdbID":"tt0403832","Type":"movie","Poster":"N/A"},
		{"Title":"Daddy ABC","Year":"2013","imdbID":"tt2723562","Type":"movie","Poster":"N/A"},
		{"Title":"ABC Nunca Más","Year":"2012","imdbID":"tt2180210","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAyNjM2NTkzMDVeQTJeQWpwZ15BbWU3MDE0NTcxNzg@._V1_SX300.jpg"},
		{"Title":"The ABC of Love","Year":"1967","imdbID":"tt0062049","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZGQyNDI3ZmYtMmJmYi00ZDlmLTgzNDYtM2IzZjY1N2U3NTBhXkEyXkFqcGdeQXVyNjU0ODkwMTU@._V1_SX300.jpg"}
	],"totalResults":"139","Response":"True"
  }

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