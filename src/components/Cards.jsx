import React from 'react';

import Card from './Card';

const Cards = props => {
  const { movielist } = props;
  return (
    <div className='movies-list mt-5 row'>
      {movielist.map(movie=>{
        return <Card movie={movie} key={movie.imdbID}/>
      })}
    </div>
  );
};

export default Cards;