import { Route, Switch } from 'react-router-dom';
import AllCities from './pages/AllCities';
import NewCity from './pages/NewCity';
import Favorites from './pages/Favorites';
import './app.css';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
