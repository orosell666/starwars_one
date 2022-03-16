import React, { useContext, useEffect, useState  } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Planets = () => {
    const { actions, store } = useContext(Context);
    const [info, setInfo] = useState({});
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');


    useEffect(() => {
		actions.loadPlanet()
	  },[]); 

      return (
        <div>
        <div className="card col-3 mx-2" >
          <img src="..." className="card-img-top" alt="..."  />
          <div className="card-body">
            <h5 className="card-title">{Planets.name}</h5>
            <p className="card-text">Population: <span className="card-description">{info.population}</span>.</p>
            <a href="#" className="btn btn-primary">More Info...</a>
            <button className="btn  ms-4 mt-1" onClick={() => {actions.setFavourites({type:"character", id: character.uid, name: character.name})}}>💖</button>
          </div>
        </div>
      </div>
        );
}