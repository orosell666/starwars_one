import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters";

import { Starships } from "../component/starships";

import "../../styles/home.css";
import { Planets } from "../component/planets";



export const Home = () => {
	const { actions, store } = useContext(Context);

	return (


		<div className="container">

			<h1 className="sectionName">Characters</h1>
			<div className="card-group">
				<div className="row g-4 d-flex flex-row flex-nowrap overflow-auto">
					{store.character.map((value, index) => {
						console.log(value)
						return (
							<Characters key={index} character={value} id={index} />
						)
					})}
				</div>
			</div>

			
				<h1 className="sectionName">Planets</h1>
				<div className="card-group">
					<div className="row g-4 d-flex flex-row flex-nowrap overflow-auto">
						{store.planet.map((value, index) => {
							console.log(value)
							return (

								<Planets key={index} planet={value} pid={index} />
								

							)
						})}
					</div>
				</div>
			
				
					<h1 className="sectionName">Starships</h1>
					<div className="card-group">
						<div className="row g-4 d-flex flex-row flex-nowrap overflow-auto">
							{store.starships.map((value, index) => {
								console.log(value)
								return (

									<Starships key={index} starships={value} sid={index}/>
								)
							})}</div></div>
				


			

		</div>
	)
}







