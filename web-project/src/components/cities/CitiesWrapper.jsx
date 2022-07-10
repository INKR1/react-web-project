import { useContext } from 'react';

import Card from "../ui/Card";
import classes from "./citiesWrapper.module.css";
import FavoritesContext from '../../store/favorites-context';

export default function CitiesWrapper(props) {

  const favCtx = useContext(FavoritesContext);

  const cityIsFav = favCtx.cityIsFavorite(props.id);

  function toggleFavoriteStatus() {
    if (cityIsFav) {
      favCtx.removeFromFavorite(props.id);
    } else {
      favCtx.addToFavorite({
        id: props.id,
        name: props.name,
        description: props.description,
        img: props.img,
        address: props.address
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
          <div className={classes.image}>
              <img src={props.img} alt={props.name} />        
          </div>
          <div className={classes.content}>
              <h3>{props.name}</h3>
              <address>{props.address}</address>
              <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
              <button onClick={toggleFavoriteStatus}>
                {cityIsFav ? "Remove from favorites" : "Add to favorites"}
              </button>
          </div>
        </Card>
    </li>
  )
}
