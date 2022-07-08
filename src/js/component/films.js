import React, { useContext, useEffect  } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/home.css";

export const Films = (props) => {
  const { actions, store } = useContext(Context);


  return (
    <div>
        <p><strong className="yellow">Films: </strong> {props.films.name}</p>
    </div>

  );
};

Films.propTypes = {films:propTypes.json}