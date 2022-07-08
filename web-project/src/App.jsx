import { Route, Switch } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import './app.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
