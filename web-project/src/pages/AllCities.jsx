import { citiesData } from '../data';
import CitiesList from '../components/cities/CitiesList';
export default function AllCities() {
  return (
    <section>
      <h1>All Cities</h1>
      <CitiesList cities={citiesData} />
    </section>
  )
}
