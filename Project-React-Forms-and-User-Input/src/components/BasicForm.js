import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== ''

const BasicForm = (props) => {
  const { 
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangedHandler, 
    InputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(isNotEmpty);

  
  const { 
    value: enteredLastName, 
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError, 
    valueChangeHandler: lastNameChangedHandler, 
    InputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(isNotEmpty);

  const { 
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError, 
    valueChangeHandler: emailChangedHandler, 
    InputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
    formIsValid(true);
  } else {
    formIsValid(false);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return
    };

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
  ? 'form-control invalid' 
  : 'form-control';

  const lastNameInputClasses = lastNameInputHasError
  ? 'form-control invalid' 
  : 'form-control';

  const emailInputClasses = emailInputHasError
  ? 'form-control invalid'
  : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='last-name' 
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && <p className='error-text'>Last Name must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='email' 
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className='error-text'>Please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
