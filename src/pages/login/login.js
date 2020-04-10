import React, {useCallback, useState} from 'react'
import BaseInput from "../../components/BaseUI/BaseInput";
import BaseTitle from "../../components/BaseUI/BaseTitle";
import { logIn, userCreate } from "../../store/actions"
import {useDispatch} from "react-redux";

import "./login.scss"
import cls from "classnames";
import buttonStyles from "../../components/AppNavButton/AppNavButton.module.scss";

function Login(props) {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(props.mode === "create"){
        dispatch(await userCreate(formData));
      }
      else{
        dispatch(await logIn(formData));
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleToCreate = (event) => {
    event.preventDefault();
    props.history.push('/auth/create');
  };
  const handleToLogin = (event) => {
    event.preventDefault();
    props.history.push('/auth/login');
  };
  const updateField = useCallback((event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }, [formData]);

  return (
    <div>
      <div className="content__wrapper">
        <div className="block content__block block__auth form form__wrapper">
          <form onSubmit={handleSubmit} noValidate>
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
              {props.mode === "login" &&  <a onClick={handleToCreate} href="#" className="link__action">I dont have already account</a>}
              {props.mode === "create" &&  <a onClick={handleToLogin} href="#" className="link__action">I have already account</a>}
              <button
                type="submit"
                className={cls(buttonStyles.button, buttonStyles.button__primary)}
              >
                {props.mode === "login" ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
