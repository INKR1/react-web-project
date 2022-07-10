import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorite: 0,
    addToFavorite: (favoriteCity) => { },
    removeFromFavorite: (favCityId) => { },
    cityIsFavorite: (favCityId) => { }
})

export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteCity) {
        setUserFavorites(prevUserFav => {
            return prevUserFav.concat(favoriteCity);
        });
    }

    function removeFavoriteHandler(favCityId) {
        setUserFavorites(prevUserFav => {
            return prevUserFav.filter(favorite => favorite.id !== favCityId);
        });
    }

    function isFavoriteHandler(favCityId) {
        return userFavorites.some(city => city.id === favCityId);
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addToFavorite: addFavoriteHandler,
        removeFromFavorite: removeFavoriteHandler,
        cityIsFavorite: isFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;