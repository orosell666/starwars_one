const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			planet: [],
			starships: [],
			favourites: [],
			films: [],
			
		},
			
		actions: {
			// Use getActions to call a function within a fuction
			
			loadCharacter: () => {
				fetch("https://swapi.dev/api/people")
					.then((res) => res.json())
					.then((res) => setStore ({ character: res.results}))
					.catch((error) => console.error(error));
			},
			loadPlanet: () => {
				fetch("https://swapi.dev/api/planets")
				.then((res) => res.json())
				.then((res) => setStore ({ planet: res.results}))
				.catch((error) => console.error(error));
			},
			loadStarship: () => {
				fetch("https://swapi.dev/api/starships")
				.then((res) => res.json())
				.then((res) => setStore({ starships: res.results}))
				.catch((error) => console.error(error));
			},
			loadFilms: () => {
				fetch("https://swapi.dev/api/films")
				.then((res) => res.json())
				.then((res) => setStore({ films: res.results}))
				.catch((error) => console.error(error));
			},
			
			setFavourites: (fav) => {
				setStore({favourites: [...getStore().favourites, fav]}) 
			},

			deleteFavourites: (index) => {
				setStore({favourites: [...getStore().favourites.filter((fav, i) => index != i)]})
				
			},




			
			

		}
	};
};

export default getState;
