import React from "react";
import "./input.scss";

const Input = ({ placeholder, state="" }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        className={`reusableInput ${state}`}
      />
    </>
  );
};

export default Input;
