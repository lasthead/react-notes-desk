import React, {useCallback, useState} from 'react'
import BaseInput from "../../components/BaseUI/BaseInput";
import BaseTitle from "../../components/BaseUI/BaseTitle";
import { logIn, userCreate } from "../../store/actions"
import {useDispatch, useStore} from "react-redux";
import { validateField } from "../../utils/validationHelper";

import "./login.scss"
import cls from "classnames";
import buttonStyles from "../../components/AppNavButton/AppNavButton.module.scss";
import {FormErrors} from "../../components/FormErrors/FormErrors";

function Login(props) {
  const dispatch = useDispatch();
  const store = useStore();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    validateFields: {
      email: '',
      password: ''
    },
    formValid: false
  });

  const handleToCreate = (event) => {
    event.preventDefault();
    props.history.push('/auth/create');
  };

  const handleToLogin = (event) => {
    event.preventDefault();
    props.history.push('/auth/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(props.mode === "create"){
        dispatch(await userCreate(formData));
      }
      else{
        console.log(formData);
        dispatch(await logIn(formData));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateField = useCallback((event) => {
    const { name, value } = event.target;
    const fieldValidate = validateField(name, value);
    setFormData({
      ...formData,
      [name]: value,
      validateFields : {
        ...formData.validateFields,
        [name]: fieldValidate
      }
    });
  }, [formData]);

  return (
    <div>
      <div className="content__wrapper">
        <div className="block content__block block__auth form form__wrapper">
          <form onSubmit={handleSubmit}>
            <BaseTitle text={"The Notes"}/>
            <BaseInput
              onChange={updateField}
              defaultValue={formData.email}
              placeholder={"Email"}
              name={'email'}
              type={'text'}
            />
            <BaseInput
              onChange={updateField}
              defaultValue={formData.password}
              placeholder={"Password"}
              name={'password'}
              type={'password'}
            />
            <div className="form__group login__buttons">
              {props.mode === "login" &&  <a onClick={handleToCreate} href={"# "} className="link__action">I dont have already account</a>}
              {props.mode === "create" &&  <a onClick={handleToLogin} href={"# "} className="link__action">I have already account</a>}
              <button
                type="submit"
                disabled={!(formData.validateFields.email && formData.validateFields.password)}
                className={cls(buttonStyles.button, buttonStyles.button__primary)}
              >
                {props.mode === "login" ? "Sign in" : "Sign up"}
              </button>
            </div>
            <FormErrors serverError={store.getState().session.errorMsg} formErrors={formData.validateFields}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
