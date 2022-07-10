import React from 'react'
import NewCityForm from '../components/cities/NewCityForm'

export default function NewCity() {

  function addCityHandler(cityData){ 
    fetch('https://react-cities-web-default-rtdb.firebaseio.com/cities.json',
    {
      method: 'POST',
      body: JSON.stringify(cityData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  return (
    <section>
      <h1>Add New City</h1>
      <NewCityForm onAddCity={addCityHandler}/>
    </section>
  )
}
