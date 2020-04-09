import React, {useCallback, useEffect, useState} from "react";
import cls from "classnames";

import "./AppFormEditItem.scss";
import buttonStyles from "../AppNavButton/AppNavButton.module.scss";

export default function AppFormEditItem(props) {
  const [formData, setFormData] = useState({});
  useEffect( () => { setFormData(props) }, [props]);

  const updateField = useCallback((event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }, [formData]);

  const handleSubmit = (e) => {
    props.onSubmit(formData);
    e.preventDefault();
  };
  const handleRemove = (e) => {
    props.handleRemoveItem(formData.id);
    e.preventDefault();
  };

  return(
    <div className="form form__wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <input onChange={updateField} name={'name'} defaultValue={formData.name} placeholder={"Write note title"} className="input input__title" type="text"/>
        </div>
        <div className="form__group">
          <textarea onChange={updateField} name={'text'} rows="12" defaultValue={formData.text} placeholder={"Write note text"} className="input input__text"/>
        </div>
        <div className={cls("form__group", buttonStyles.group__buttons)}>
          <button
            type="submit"
            className={cls(buttonStyles.button, buttonStyles.button__primary)}>
            Save
          </button>
          { props.removeButton && <button
            type="button"
            onClick={handleRemove}
            className={cls(buttonStyles.button, buttonStyles.button__action_remove)}
          />}
        </div>
      </form>
    </div>
  )
}
