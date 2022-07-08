import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/home.css";

export const Planets = (props) => {
    const { actions, store } = useContext(Context);
    

    useEffect(() => {
      console.log(props.planet.name)
  
    });


    
      return (
        
        <div className="card col-3 me-2 mt-5" >
          <img ng-style="{'background-image': 'url(./assets/img/planets/1.jpg), url(./assets/img/big-placeholder.jpg)'}" className="card-img-top" alt="..."  />
          <div className="card-body text-center">
            <h5 className="card-title yellow">{props.planet.name}</h5>
            <p className="card-text"><strong className="yellow">Diameter: </strong>{props.planet.diameter}</p>
            <p className="card-text"><strong className="yellow">Climate: </strong>{props.planet.climate} </p>
            
            
          
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={"#examplePlanetModal" + props.pid}>
  More Info...
</button></div>
      <div className="modal fade" id={"examplePlanetModal" + props.pid} tabIndex="-1" aria-labelledby="examplePlanetModalLabel" aria-hidden="true">
        <div className="card modal-dialog">
          <div className="card modal-content">
            <div className="card modal-header">
              <h5 className="modal-title yellow" id="examplePlanetModalLabel">{props.planet.name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="card modal-body text-center">
          <img src="https://starwars-visualguide.com/#/planets/" className="card-img-top" alt="..."  />
         
          <p><strong className="yellow">Rotation Period: </strong> {props.planet.rotation_period}</p>
          <p><strong className="yellow">Diameter: </strong>{props.planet.diameter}</p>
          <p><strong className="yellow">Climate: </strong>{props.planet.climate}</p>
          <p><strong className="yellow">Gravity: </strong> {props.planet.gravity}</p>
          <p><strong className="yellow">Terrain: </strong> {props.planet.terrain}</p>
          <p><strong className="yellow">Surface Water: </strong> {props.planet.surface_water}</p>
          <p><strong className="yellow">Population: </strong> {props.planet.population}</p>
          
          
            </div>
            
          </div>
        </div>
      </div>
            <button className="btn  ms-4 mt-1" onClick={() => {actions.setFavourites({type:"planet", id: props.planet.uid, name: props.planet.name})}}>💖</button>
         
        </div>
     
        );
};

Planets.propTypes = {planet:propTypes.any, pid:propTypes.any}