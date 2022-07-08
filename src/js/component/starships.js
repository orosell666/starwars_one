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
            <h5 className="card-title yellow">{props.starships.name}</h5>
            
            <p className="card-text"><strong className="yellow">Model: </strong>{props.starships.model}</p>
            <p className="card-text"><strong className="yellow">Class: </strong>{props.starships.starship_class}</p>
            
          
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
            <div className="card modal-body text-center">
          
          <p><strong className="yellow">Manufacturer: </strong>{props.starships.manufacturer}</p>
          <p><strong className="yellow">Cost in Credits: </strong>{props.starships.cost_in_credits}</p>
          <p><strong className="yellow">Length: </strong>{props.starships.length}</p>
          <p><strong className="yellow">Crew: </strong>{props.starships.crew}</p>
          <p><strong className="yellow">Passengers: </strong>{props.starships.passengers}</p>
          <p><strong className="yellow">Consumables: </strong>{props.starships.consumables}</p>
          <p><strong className="yellow">Class: </strong>{props.starships.starship_class}</p>
         
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