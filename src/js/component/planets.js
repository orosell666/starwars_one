import React, { useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/home.css";

export const Planets = (props) => {
    const { actions, store } = useContext(Context);
    


    
      return (
        
        <div className="card col-3 me-2 mt-5" >
          <img ng-style="{'background-image': 'url(./assets/img/characters/1.jpg), url(./assets/img/big-placeholder.jpg)'}" className="card-img-top" alt="..."  />
          <div className="card-body text-center">
            <h5 className="card-title">{props.planet.name}</h5>
            <p className="card-text">Diameter :{props.planet.diameter}</p>
            <p className="card-text">Climate :{props.planet.climate} </p>
            
            
          
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  More Info...
</button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            
          </div>
        </div>
      </div>
            <button className="btn  ms-4 mt-1" onClick={() => {actions.setFavourites({type:"planet", id: planet.uid, name: planet.name})}}>💖</button>
          </div>
        </div>
     
        );
};

Planets.propTypes = {planet:propTypes.json}