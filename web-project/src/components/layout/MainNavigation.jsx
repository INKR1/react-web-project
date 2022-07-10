import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './mainNavigation.module.css';
import  FavoritesContext  from '../../store/favorites-context';

export default function MainNavigation() {

    const favCtx = useContext(FavoritesContext);
  return (
    <div className={classes.header}>
        <div className={classes.logo}> 
            <Link to="/">CityToMeet</Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">All Cities</Link>
                </li>
                <li>
                    <Link to="/new-city">Add New City</Link>
                </li>
                <li>
                    <Link to="/favorites">
                        My Favorites
                        <span className={classes.badge}>{favCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
