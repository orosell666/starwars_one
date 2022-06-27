import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-black bg-black mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img className="img-fluid ms-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Star_wars_logo_alternate.svg/100px-Star_wars_logo_alternate.svg.png" alt="Logo" /></span>
			</Link>
			<div className="ml-auto">
				
			<button className="btn btn-warning dropdown-toggle me-5"
				type="button"
				id="dropdownMenuButton2"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
            Favourites</button>
			<ul
            className="dropdown-menu dropdown-menu-warning dropdown-menu-end"
            aria-labelledby="dropdownMenuButton"
          >
            {store.favourites.map((favourite, index) => {
              return (
                <li className="my-2" key={favourite.id}>
                  {favourite.name}{" "}
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      actions.deleteFavourites(index);
                    }}
                  >
                    ❌
                  </button>
                </li>
              );
            })}
          </ul>
				
			</div>
		</nav>
	);
};
