import React, { useContext, useEffect  } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters";
import "../../styles/home.css";



export const Home = () => {
	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.loadCharacter()
	  },[]); 

	return(
	
	
	
		<><div>
			<h1></h1>
		</div><div>
		<Characters/>
					
			</div></>

	
	)
}
			
				
			  



			 
				