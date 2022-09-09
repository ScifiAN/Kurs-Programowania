import { useRef, useState } from "react";

import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = props => {
  const [formInputsValidity, setFormInputValidity] = useState({
    name: true,
    adress: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const adressInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAdress = adressInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAdressIsValid = !isEmpty(enteredAdress);
    const enteredPostalIsValid = !isEmpty(enteredPostal) && isFiveChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      adress: enteredAdressIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid
    });

    const formIsValid = enteredNameIsValid && enteredAdressIsValid && enteredPostalIsValid && enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

  };
//example of classes
  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}> 
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.adress ? '' : classes.invalid}`}>
        <label htmlFor='adress'>Adress</label>
        <input type='text' id='adress' ref={adressInputRef} />
        {!formInputsValidity.adress && <p>Please enter a valid adress</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.postal ? '' : classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef} />
        {!formInputsValidity.postal && <p>Please enter a valid postal code</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.control} >
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;