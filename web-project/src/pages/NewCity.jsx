import { useNavigate } from 'react-router-dom';
import NewCityForm from '../components/cities/NewCityForm'

export default function NewCity() {
  const navigate = useNavigate();

  function addCityHandler(cityData){ 
    fetch('https://react-cities-web-default-rtdb.firebaseio.com/cities.json',
    {
      method: 'POST',
      body: JSON.stringify(cityData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>Add New City</h1>
      <NewCityForm onAddCity={addCityHandler}/>
    </section>
  )
}
