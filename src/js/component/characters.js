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
  <div>
    <div className="card col-3 mx-2" >
      <img src="https://starwars-visualguide.com/#/characters/1" className="card-img-top" alt="..."  />
      <div className="card-body">
        <h5 className="card-title">{props.character.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  More Info...
</button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">person</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <img src="https://starwars-visualguide.com/#/characters/1" className="card-img-top" alt="..."  />
            <div className="modal-body">
          <p>Height: {}</p>
          <p>Weight: {}</p>
          <p>Hair color:{}</p>
          <p>Skin color{}</p>
          <p>Eye color{}</p>
          <p>Birth year: {}</p>
          <p>Gender: {}</p>
          <p>Homeworld: {}</p>

            </div>
            
          </div>
        </div>
      </div>
        <button className="btn  ms-4 mt-1 " onClick={() => {actions.setFavourites({type:"character", id: character.uid, name: character.name})}}>💖</button>
      </div>
    </div>
  </div>
	);
  
 };

 Characters.propTypes = {character:propTypes.json}
