import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorite: 0,
    addFavorite: (favorite) => { },
    removeFavorite: (favoriteId) => { },
    getTotalFavorite: (favoriteId) => { }
})

export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavorite(favorite) {
        setUserFavorites(prevUserFav => {
            return prevUserFav.concat(favorite);
        });
    }

    function removeFavorite(favoriteId) {
        setUserFavorites(prevUserFav => {
            return prevUserFav.filter(favorite => favorite.id !== favoriteId);
        });
    }

    function getTotalFavorite(favoriteId) {
        return userFavorites.some(favorite => favorite.id === favoriteId);
    }
    const context = {
        favorites: userFavorites,
        totalFavorite: userFavorites.length,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
        getTotalFavorite: getTotalFavorite
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;