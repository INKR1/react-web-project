import { useRef } from 'react';
import Card from "../ui/Card";
import classes from "./newCityForm.module.css";

export default function NewCityForm(props) {
    const imgInputRef = useRef();
    const addressInputRef = useRef();
    const nameInputRef = useRef();  
    const descriptionInputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredImg = imgInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const cityData = {
            name: enteredName,
            img: enteredImg,
            address: enteredAddress,
            description: enteredDescription
        };
        props.onAddCity(cityData);
    }
  return (
    <Card>
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.control}>
                <label htmlFor="name">City Name</label>
                <input type="text" required id='name' ref={nameInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">City image</label>
                <input type="url" required id='image' ref={imgInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" required id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea id="description" required row='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions }>
                <button>Add City</button>
            </div>
        </form>
    </Card>
  )
}
