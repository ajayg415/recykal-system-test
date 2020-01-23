import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';



const CustomModal = props => {
  const { title, id, open } = props;
  const [movieDetails, setMovieDetails] = useState({});
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

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