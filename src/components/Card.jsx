import React, { useState} from 'react';

import CustomModal from './CustomModal';

const Card = props => {
  const { movie } = props;
  const [modal, setModal] = useState(false);

  return (
    <div className="card col-sm-3">
      <img className="card-img-top" src={movie.Poster} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
        <p className="card-text">{movie.Type}</p>
        
        <input tpe='button' className='btn btn-primary btn-sm' onClick={()=>{setModal(true)}} value='get Details'/>
        {modal && <CustomModal id={movie.imdbID} open={true}/>}
      </div>
    </div>
  );
};
    
export default Card;