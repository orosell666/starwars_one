import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../store/appContext';

export function PostModal ({info}) {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {info.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p>Height: {info.height}</p>
          <p>Weight: {info.mass}</p>
          <p>Hair color:{info.hair_color}</p>
          <p>Skin color{info.skin_color}</p>
          <p>Eye color{info.eye_color}</p>
          <p>Birth year: {info.birth_year}</p>
          <p>Gender: {info.gender}</p>
          <p>Homeworld: {info.homeworld}</p>


        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    );
  }

