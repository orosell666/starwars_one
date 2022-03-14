import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-black bg-black mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img className="img-fluid ms-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Star_wars_logo_alternate.svg/100px-Star_wars_logo_alternate.svg.png" alt="Logo" /></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning me-5">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
