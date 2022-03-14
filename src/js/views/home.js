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
	
	
	<div>
		<h1>personajes</h1>
		<div>
			{store.character[0][name]}
		</div>

	</div>
	)
}
			
				
			  



			 
				//<Characters
				 // key={value.uid}
				 // title={value.name}
				//  url={value.url}
				//  uid={value.uid}
				 // type="characters"
			//	/>