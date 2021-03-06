import classes from "./citiesList.module.css";
import CitiesWrapper from "./CitiesWrapper";
export default function CitiesList(props) {
  return (
   <ul className={classes.list}>
        {props.cities.map(city => (
        <CitiesWrapper 
        key={city.id} 
        id={city.id}
        name={city.name} 
        img={city.img}
        address={city.address}
        description={city.description}
        />
        ))}
   </ul>
  )
}
