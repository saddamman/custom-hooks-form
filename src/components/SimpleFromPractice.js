import React, { useState } from "react";
import Card from "./UI/Card";
import useInputPractice from "../hooks/use-input-practice";

const SimpleFromPractice = () => {
  const {
    value: entredFirstNameValue,
    isInputValid: firtNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetInput: resetNameInput,
  } = useInputPractice((value) => value.trim().length >= 6);

  const {
    value: entredlastNameValue,
    isInputValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetInput: resetLastNameInput,
  } = useInputPractice((value) => value.trim().length >= 3);

  const {
    value: entredEmailValue,
    isInputValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmailInput,
  } = useInputPractice((value) => value.trim().includes("@"));

  let formIsValid = false;
  if (firtNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const firstNameInputClasses = `${firstNameHasError ? "mb-3 control-group invalid" : "mb-3"}`;
  const lastNameInputClasses = `${lastNameHasError ? "mb-3 control-group invalid" : "mb-3"}`;
  const emailInputClass = `${emailHasError ? "mb-3 control-group invalid" : "mb-3"}`;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(entredEmailValue, entredFirstNameValue, entredlastNameValue);
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-sm-10">
        <Card>
          <form onSubmit={submitHandler}>
            <div className={firstNameInputClasses}>
              <label htmlFor="firsttName">First Name</label>
              <input
                type="text"
                name="firsttName"
                value={entredFirstNameValue}
                placeholder="Enter First Name"
                className="form-control"
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && <p className="invalid-feedback d-block">Please Enter First Name !!</p>}
            </div>
            <div className={lastNameInputClasses}>
              <label htmlFor="lastName">LastName</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                className="form-control"
                value={entredlastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
              />
              {lastNameHasError && <p className="invalid-feedback d-block">Please Enter Last Name!!</p>}
            </div>
            <div className={emailInputClass}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter First Email"
                value={entredEmailValue}
                className="form-control"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailHasError && <p className="invalid-feedback d-block">Please Enter Email !!</p>}
            </div>
            <div className="text-end">
              <button className="btn btn-warning rounded-pill text-white" disabled={!formIsValid}>
                Submit
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SimpleFromPractice;
