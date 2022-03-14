 import React, { useState, useEffect, useContext } from "react";
 import { Link, useParams } from "react-router-dom";
 import { Context } from "../store/appContext";
 import PropTypes from 'prop-types';

 export const Characters = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
  <div>
    <div className="card col-2 mx-2" >
      <img src="..." className="card-img-top" alt="..."  />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">More Info...</a>
      </div>
    </div>
  </div>
	);
 };

 
