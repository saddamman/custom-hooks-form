import React, { useState, useReducer } from "react";

const intialState = {
  value: "",
  isTouched: false,
};

const inputReducer = (preveState, action) => {
  console.log(preveState, action);
  switch (action.type) {
    case "INPUT":
      return {
        value: action.val,
        isTouched: false,
      };
      break;

    case "BLUR":
      return {
        value: preveState.value,
        isTouched: true,
      };
      break;

    default:
      break;
  }
};

const useInputPractice = (validateValue) => {
  const [state, dispatch] = useReducer(inputReducer, intialState);
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(state.value);
  const enteredValueHasError = !enteredValueIsValid && state.isTouched;

  const valueChangeHandler = (event) => {
    // setEnteredValue(event.target.value);
    dispatch({ type: "INPUT", val: event.target.value });
  };
  const inputBlurHandler = (event) => {
    // setIsTouched(true);
    dispatch({ type: "BLUR" });
  };

  const resetInput = () => {
    dispatch({ type: "REs" });
    // setIsTouched(false);
    // setEnteredValue("");
  };

  return {
    value: state.value,
    isInputValid: enteredValueIsValid,
    hasError: enteredValueHasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInputPractice;
