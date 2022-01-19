import React from 'react';
import './input.scss'

const Input = ({placeholder, state}) => {
  return <>
    <input placeholder={placeholder} className={state !== "" ? `reusableInput ${state}` :'reusableInput'}/>
</>;
};

export default Input;
