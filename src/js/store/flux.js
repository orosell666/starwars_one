const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: []
		},
			
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getInfo: (url) => {
				setStore ({ infoUrl: url});
			
			
			}, 
			loadCharacter: () => {
				fetch("https://www.swapi.tech/api/people")
					.then((res) => res.json())
					.then((res) => setStore ({ character: res.results}))
					.catch((error) => console.error(error));
		
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
