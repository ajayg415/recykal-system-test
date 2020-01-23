import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';



const CustomModal = props => {
  const { title, id, open } = props;
  const [movieDetails, setMovieDetails] = useState({});
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  
  const MOCK_DATA = {
	"Title":"ABC Africa",
	"Year":"2001","Rated":
	"Unrated","Released":"24 Oct 2001",
	"Runtime":"83 min",
	"Genre":"Documentary",
	"Director":"Abbas Kiarostami",
	"Writer":"N/A",
	"Actors":"Abbas Kiarostami, Seifollah Samadian",
	"Plot":"Documentary account of the AIDS crisis in Uganda.",
	"Language":"Persian, English",
	"Country":"Iran",
	"Awards":"1 nomination.",
	"Poster":"https://m.media-amazon.com/images/M/MV5BMTU5ODc1ODc2Ml5BMl5BanBnXkFtZTcwMzEyOTgyMQ@@._V1_SX300.jpg",
	"Ratings":[
	  {"Source":"Internet Movie Database","Value":"7.0/10"},
	  {"Source":"Rotten Tomatoes","Value":"78%"},
	  {"Source":"Metacritic","Value":"73/100"}
	],
	"Metascore":"73",
	"imdbRating":"7.0",
	"imdbVotes":"631",
	"imdbID":"tt0281534",
	"Type":"movie",
	"DVD":"14 Jun 2005",
	"BoxOffice":"N/A",
	"Production":"New Yorker Films",
	"Website":"N/A",
	"Response":"True"
  }

  useEffect(()=>{
    (async ()=>{
      const call = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=a1b5f9ec`);
      const data = await call.json();
      setMovieDetails(data);
    })();
  },[id]);

  return (
    <>
      {/* <button
        type="button"
        className="btn btn-default btn-sm"
        aria-label="Left Align"
        onClick={toggle}
      >
        {title}
      </button> */}
      <Modal isOpen={modal} toggle={toggle}  size="lg">
        <ModalHeader toggle={toggle}>Test</ModalHeader>
        <ModalBody>
          <Form>

            <p><b>Movie Name :</b> {movieDetails.Title} </p>
            <p><b>Released Year :</b> {movieDetails.Year} </p>
            <p><b>Run time :</b> {movieDetails.Runtime} </p>
            <p><b>Director :</b> {movieDetails.Director} </p>
            <p><b>Actors :</b> {movieDetails.Actors} </p>
            <p><b>Plot :</b> {movieDetails.Plot} </p>
            <p><b>Country :</b> {movieDetails.Country} </p>
            
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle} className="btn-lg">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );

};

export default CustomModal;