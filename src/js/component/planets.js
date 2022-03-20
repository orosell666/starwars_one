import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

import "../../styles/home.css";

export const Planets = (props) => {
    const { actions, store } = useContext(Context);
    


    useEffect(() => {
		actions.loadPlanet()
	  },[]); 

      return (
        <div>
        <div classNameName="card col-3 mx-2" >
          <img src="..." classNameName="card-img-top" alt="..."  />
          <div classNameName="card-body">
            <h5 classNameName="card-title">{props.planet.name}</h5>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">Diameter :{props.planet.diameter}</li>
            <li className="list-group-item">Climate :{props.planet.climate} </li>
            
            
          </ul>
            <button type="button" classNameName="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  More Info...
</button>
      <div classNameName="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div classNameName="modal-dialog">
          <div classNameName="modal-content">
            <div classNameName="modal-header">
              <h5 classNameName="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" classNameName="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div classNameName="modal-body">
              ...
            </div>
            
          </div>
        </div>
      </div>
            <button classNameName="btn  ms-4 mt-1" onClick={() => {actions.setFavourites({type:"planet", id: planet.uid, name: planet.name})}}>💖</button>
          </div>
        </div>
      </div>
        );
};

Planets.propTypes = {planet:propTypes.json}