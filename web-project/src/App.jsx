import { Route, Switch } from 'react-router-dom';
import AllCities from './pages/AllCities';
import NewCity from './pages/NewCity';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
import './app.css';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Switch>
        <Route exact path="/">
          <AllCities />
        </Route>
        <Route path="/new-city">
          <NewCity />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
