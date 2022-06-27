import React, { useContext, useEffect  } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Starships } from "../component/starships";

import "../../styles/home.css";



export const Home = () => {
	const { actions, store } = useContext(Context);

	return(
	
	
	<div >
		<div className="container ">
			<h1 className="sectionName">Characters</h1>
			{store.character.map((value,index) =>{ console.log(value)
				return (
					<div className="row g-4 d-flex flex-row flex-nowrap overflow-auto">
					<Characters key={index}character={value}/>
					</div>
				)
			})}
						
		</div>
		<div>
			<h1 className="sectionName">Planets</h1>
			{store.planet.map((value,index) =>{ console.log(value)
			return (
					<div className="row g-4 d-flex flex-row flex-nowrap overflow-auto">
					<Planets key={index}planet={value}/>
					</div>
			)
		})}
		<div>
			<h1 className="sectionName">Starships</h1>
			{store.starships.map((value,index) =>{ console.log(value)
			return (
					<div className="row g-4 d-flex flex-row flex-nowrap overflow-auto">
					<Starships key={index}starships={value}/>
					</div>
			)
		})}
			</div>
	
		
	</div>

	</div>
	)
}
			
				
			  



			 
				