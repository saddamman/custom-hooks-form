import React, { useState } from "react";

const useInput = (validateValue) => {
  const [enterredValue, setEnterredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enterredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnterredValue(event.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnterredValue("");
    setIsTouched(false);
  };

  return {
    value: enterredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
