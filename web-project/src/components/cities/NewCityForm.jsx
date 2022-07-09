import Card from "../ui/Card";
import classes from "./newCityForm.module.css";

export default function NewCityForm() {
  return (
    <Card>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="name">City Name</label>
                <input type="text" required id='name' />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">City image</label>
                <input type="url" required id='image' />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" required id='address' />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea type="description" required row='5'></textarea>
            </div>
            <div className={classes.actions }>
                <button>Add City</button>
            </div>
        </form>
    </Card>
  )
}
