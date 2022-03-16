import React, { useContext, useEffect  } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Starships } from "../component/starships";
import "../../styles/home.css";



export const Home = () => {
	

	return(
	
	
	<div className="container col-8">
		<div>
			<Characters/>			
		</div>
		<div>
			<Planets />
		</div>
		<div>
			<Starships />
		</div>
	</div>

	
	)
}
			
				
			  



			 
				