import { Link } from 'react-router-dom';
import classes from './mainNavigation.module.css';

export default function MainNavigation() {
  return (
    <div className={classes.header}>
        <div className={classes.logo}>CityToMeet</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">All Cities</Link>
                </li>
                <li>
                    <Link to="/new-city">Add New City</Link>
                </li>
                <li>
                    <Link to="/favorites">My Favorites</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
