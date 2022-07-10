import CitiesList from '../components/cities/CitiesList';
import { useState, useEffect } from 'react';


export default function AllCities() {

  const [loader, setLoader] = useState(true);
  const [loadedCities, setLoadedCities] = useState([]);

  useEffect(() => {
    setLoader(true);
    fetch('https://react-cities-web-default-rtdb.firebaseio.com/cities.json')
    .then(response => response.json())
    .then(data => {
      const cities = [];
      for (const key in data) {
        const city ={
          id: key,
          ...data[key]
        };
        cities.push(city);
      }
      setLoader(false); 
      setLoadedCities(cities);
    });
  }, []);

  if(loader) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <h1>All Cities</h1>
      <CitiesList cities={loadedCities} />
    </section>
  )
}
