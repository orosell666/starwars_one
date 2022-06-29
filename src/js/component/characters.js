import React, { useContext, useEffect  } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

import "../../styles/home.css";

export const Characters = (props) => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
  actions.loadCharacter()
  },[]); 


	return (
    
    <div className="card col-3 me-2 mt-5" >
      <img ng-style="{'background-image': 'url(./assets/img/characters/1.jpg), url(./assets/img/big-placeholder.jpg)'}" className="card-img-top" alt="..."  />
      <div className="card-body text-center">
        <h5 className="card-title">{props.character.name}</h5>
            <p className="card-text">Gender :{props.character.gender}</p>
            <p className="card-text">Born in :{props.character.birth_year}</p>
            
         
        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  More Info...
</button></div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">person</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <img src="https://starwars-visualguide.com/#/characters/1" className="card-img-top" alt="..."  />
            <div className="modal-body">
          <p>Height: {props.character.height}</p>
          <p>Weight:{props.character.mass}</p>
          <p>Hair color:{props.character.hair_color}</p>
          <p>Skin color:{props.character.skin_color}</p>
          <p>Eye color: {props.character.eye_color}</p>
          <p>Birth year: {props.character.birth_year}</p>
          <p>Gender: {props.character.gender}</p>
          <p>Films: {props.character.films}</p>

            </div>
            
          </div>
        </div>
      </div>
        <button className="btn  ms-4 mt-1 " onClick={() => {actions.setFavourites({type:"character", id: character.uid, name: character.name})}}>💖</button>
      
    </div>
  
	);
  
 };

 Characters.propTypes = {character:propTypes.json}
