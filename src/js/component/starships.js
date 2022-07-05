import React, { useContext, useEffect  } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/home.css";

export const Starships = (props) => {
    const { actions, store } = useContext(Context);

   

      return (
        
        <div className="card col-3 me-2 mt-5" >
          <img src="..." className="card-img-top" alt="..."  />
          <div className="card-body text-center">
            <h5 className="card-title">{props.starships.name}</h5>
            
            <p className="card-text">Model :{props.starships.model}</p>
            <p className="card-text">Passengers :{props.starships.passengers} </p>
            <p className="card-text">Class :{props.starships.starship_class}</p>
            
          
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={"#exampleModal" + props.starships.id}>
  More Info...
</button>
  <div className="modal fade" id={"exampleModal" + props.starships.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="card modal-dialog">
          <div className="card modal-content">
            <div className="card modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{props.starships.model}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <img src="https://starwars-visualguide.com/#/starships/" className="card-img-top" alt="..."  />
            <div className="card modal-body">
          <p>model: {props.starships.model}</p>
          <p>manufacturer:{props.starships.manufacturer}</p>
          <p>cost in credits:{props.starships.cost_in_credits}</p>
          <p>length:{props.starships.length}</p>
          <p>crew: {props.starships.crew}</p>
          <p>passengers: {props.starships.passengers}</p>
          <p>consumables: {props.starships.consumables}</p>
          <p>Class: {props.starships.starship_class}</p>
          <p>Films: {props.starships.films}</p>

            </div>
            
          </div>
        </div>
      </div>
      </div>
            <button className="btn  ms-4 mt-1" onClick={() => {actions.setFavourites({type:"starships", id: props.starships.uid, name: props.starships.name})}}>💖</button>
          </div>
        
      
        );
}

Starships.propTypes = {starships:propTypes.json, id:propTypes.number}