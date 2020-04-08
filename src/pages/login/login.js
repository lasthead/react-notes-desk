import React, {useCallback, useState} from 'react'
import { Route, Redirect } from "react-router-dom";
import "./login.scss"
import AppNavButton from "../../components/AppNavButton/AppNavButton";
import BaseInput from "../../components/BaseUI/BaseInput";
import BaseTitle from "../../components/BaseUI/BaseTitle";
import { logIn, userCreate } from "../../store/actions"
import {useDispatch, connect} from "react-redux";

function Login(props) {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(props.authCreate){
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
              {props.authLogin &&  <a onClick={handleToCreate} href="#" className="link__action">I dont have already account</a>}
              {props.authCreate &&  <a onClick={handleToLogin} href="#" className="link__action">I have already account</a>}
              <AppNavButton type="submit" className={'button button__primary'} title={props.authLogin ? "Sign in" : "Sign up"}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
