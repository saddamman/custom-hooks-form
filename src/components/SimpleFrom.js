import React, { useEffect, useState } from "react";

import useInput from "../hooks/use-input";

const SimpleFrom = () => {
  const {
    value: enterredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim().length >= 6);

  const {
    value: enterredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  // const [enterredName, setEnterredName] = useState("");
  // const [NameTouched, setNameTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailTouched, setEmailTouched] = useState(false);

  // const enteredNameIsValid = enterredName.trim().length >= 6;
  // const nameInputValid = !enteredNameIsValid && NameTouched;

  // const enteredEmailIsValid = enteredEmail.trim().includes("@");
  // const emailInputValid = !enteredEmailIsValid && emailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  // const nameChangeHandler = (event) => {
  //   setEnterredName(event.target.value);
  // };
  // const nameBlurHandler = () => {
  //   setNameTouched(true);
  // };

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const emailBlurHandler = () => {
  //   setEmailTouched(true);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enterredName);
    resetNameInput();
    resetEmailInput();
  };

  const nameValidClass = nameInputHasError ? "invalid" : "";
  const emailValidClass = emailInputHasError ? "invalid" : "";

  return (
    <div className="col-sm-8 mx-auto">
      <div className="card">
        <div className="card-body">
          {" "}
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className={`col-md-6 mb-3 control-group ${nameValidClass}`}>
                <label htmlFor="" className="form-label">
                  Your Name
                </label>
                <input type="text" className="form-control " id="name" value={enterredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
                {nameInputHasError && <div className="invalid-feedback d-block"> Please Entred Valid Username ("6 CHARACTER").</div>}
              </div>
            </div>
            <div className="row">
              <div className={`col-md-6 mb-3 control-group ${emailValidClass}`}>
                <label htmlFor="" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={enterredEmail}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                />
                {emailInputHasError && <div className="invalid-feedback d-block"> Please entred correct email !!</div>}
              </div>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary px-4 rounded-pill" disabled={!formIsValid}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SimpleFrom;
