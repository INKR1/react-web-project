import { Route, Routes } from 'react-router-dom';
import AllCities from './pages/AllCities';
import NewCity from './pages/NewCity';
import Favorites from './pages/Favorites';
import './app.css';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AllCities />} />
          <Route path="/new-city" element={<NewCity />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
