import React from "react";

export default function BaseInput(props) {
  return(
    <div className="form__group">
      <input
        className="input input__title"
        onChange={props.onChange}
        name={props.name}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  )
}
