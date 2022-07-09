import Card from "../ui/Card";
import classes from "./citiesWrapper.module.css";

export default function CitiesWrapper(props) {
  return (
    <li className={classes.item}>
      <Card>
          <div className={classes.image}>
              <img src={props.img} alt={props.name} />        
          </div>
          <div className={classes.content}>
              <h3>{props.name}</h3>
              <address>{props.address}</address>
              <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
              <button>To Favorites</button>
          </div>
        </Card>
    </li>
  )
}
