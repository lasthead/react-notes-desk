import React, {useCallback, useEffect, useState} from "react";
import AppNavButton from "../AppNavButton/AppNavButton";
import "./AppFormEditItem.scss";

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
        <div className="form__group group__buttons">
          <AppNavButton type="submit" className={'button button__primary'} title="Save" />
          <AppNavButton action={handleRemove} type="button" className={'button button__action--remove'} />
        </div>
      </form>
    </div>
  )
}
