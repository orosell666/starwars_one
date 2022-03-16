import React, { useContext, useEffect  } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Characters = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
  actions.loadCharacter()
  },[]); 


	return (
  <div>
    <div className="card col-3 mx-2" >
      <img src="https://starwars-visualguide.com/#/characters/1" className="card-img-top" alt="..."  />
      <div className="card-body">
        <h5 className="card-title">Character</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">More Info...</a>
        <button className="btn  ms-4 mt-1" onClick={() => {actions.setFavourites({type:"character", id: character.uid, name: character.name})}}>💖</button>
      </div>
    </div>
  </div>
	);
 };

 
