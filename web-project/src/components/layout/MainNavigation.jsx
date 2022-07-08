import { Link } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <header>
        <div className="logo">CityToMeet</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">All Meetups</Link>
                </li>
                <li>
                    <Link to="/new-meetup">New Meetup</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}