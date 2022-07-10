import { useRef } from 'react';
import Card from "../ui/Card";
import classes from "./newCityForm.module.css";

export default function NewCityForm(props) {
    const imgInputRef = useRef();
    const addressInputRef = useRef();
    const nameInputRef = useRef();  
    const descInputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredImg = imgInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const cityData = {
            name: enteredName,
            img: enteredImg,
            address: enteredAddress,
            desc: enteredDesc
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
                <textarea type="description" required row='5' ref={descInputRef}></textarea>
            </div>
            <div className={classes.actions }>
                <button>Add City</button>
            </div>
        </form>
    </Card>
  )
}
