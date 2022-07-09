import { citiesData } from '../data';
export default function AllCities() {
  return (
    <section>
      <h1>All Cities</h1>
      {citiesData.map((city) => {
        return(
          <li key={city.id}> {city.name}</li>
        )
      })}
    </section>
  )
}
