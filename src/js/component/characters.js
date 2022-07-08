import React, { useContext, useEffect  } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/home.css";

export const Characters = (props) => {
  const { actions, store } = useContext(Context);

  


	return (
    
    <div className="card col-3 me-2 mt-5" >
      <img src="https://via.placeholder.com/150" className="mt-2 card-img-top img-fluid blankimage" alt="..."  />
      <div className="card-body text-center">
        <h5 className="card-title yellow">{props.character.name}</h5>
            <p className="card-text"><strong className="yellow">Gender: </strong>{props.character.gender}</p>
            <p className="card-text"><strong className="yellow">Born In: </strong>{props.character.birth_year}</p>
            
         
        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={"#exampleModal" + props.id}>
  More Info...
</button></div>
      <div className="modal fade" id={"exampleModal" + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="card modal-dialog">
          <div className="card modal-content">
            <div className="card modal-header">
              <h5 className="modal-title yellow" id="exampleModalLabel">{props.character.name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..."  />
          <div className="card modal-body text-center">
          <p><strong className="yellow">Height: </strong>{props.character.height}</p>
          <p><strong className="yellow">Weight: </strong>{props.character.mass}</p>
          <p><strong className="yellow">Hair Color: </strong>{props.character.hair_color}</p>
          <p><strong className="yellow">Skin Color: </strong>{props.character.skin_color}</p>
          <p><strong className="yellow">Eye Color: </strong>{props.character.eye_color}</p>
          <p><strong className="yellow">Birth Year: </strong>{props.character.birth_year}</p>
          <p><strong className="yellow">Gender: </strong>{props.character.gender}</p>
          

            </div>
            
          </div>
        </div>
      </div>
        <button className="btn  ms-4 mt-1 justify-content-center" onClick={() => {actions.setFavourites({type:"character", id: props.character.uid, name: props.character.name})}}>💖</button>
      
    </div>
  
	);
  
 };

 Characters.propTypes = {character:propTypes.json, id:propTypes.number}
