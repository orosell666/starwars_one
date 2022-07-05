import React, { useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/home.css";

export const Planets = (props) => {
    const { actions, store } = useContext(Context);
    


    
      return (
        
        <div className="card col-3 me-2 mt-5" >
          <img ng-style="{'background-image': 'url(./assets/img/planets/1.jpg), url(./assets/img/big-placeholder.jpg)'}" className="card-img-top" alt="..."  />
          <div className="card-body text-center">
            <h5 className="card-title">{props.planet.name}</h5>
            <p className="card-text">Diameter :{props.planet.diameter}</p>
            <p className="card-text">Climate :{props.planet.climate} </p>
            
            
          
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={"#exampleModal" + props.id}>
  More Info...
</button>
      <div className="modal fade" id={"exampleModal" + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="card modal-dialog">
          <div className="card modal-content">
            <div className="card modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{props.planet.name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="card modal-body">
          <img src="https://starwars-visualguide.com/#/planets/" className="card-img-top" alt="..."  />
          <p>Name: {props.planet.name}</p>
          <p>Rotation Period:{props.planet.rotation_period}</p>
          <p>Diameter:{props.planet.diameter}</p>
          <p>Climate:{props.planet.climate}</p>
          <p>Gravity: {props.planet.gravity}</p>
          <p>Terrain: {props.planet.terrain}</p>
          <p>Surface Water: {props.planet.surface_water}</p>
          <p>Population: {props.planet.population}</p>
          <p>Films: {props.planet.films}</p>
          
            </div>
            
          </div>
        </div>
      </div>
            <button className="btn  ms-4 mt-1" onClick={() => {actions.setFavourites({type:"planet", id: props.planet.uid, name: props.planet.name})}}>💖</button>
          </div>
        </div>
     
        );
};

Planets.propTypes = {planet:propTypes.json, id:propTypes.number}