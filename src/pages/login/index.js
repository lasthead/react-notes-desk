import React, {useCallback, useState} from 'react'
import { Route, Redirect } from "react-router-dom";
import "./index.scss"
import AppNavButton from "../../components/AppNavButton/AppNavButton";
import BaseInput from "../../components/BaseUI/BaseInput";
import BaseTitle from "../../components/BaseUI/BaseTitle";
import { logIn } from "../../store/actions"
import {useDispatch, connect} from "react-redux";

function Login(props) {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(await logIn(formData));
    } catch (e) {
      console.log(e);
    }
  };

  const updateField = useCallback((event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }, [formData]);

  return (
    <Route
      render={() =>
        !props.isAuth ? (
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
                  <div className="form__group group__buttons">
                    <AppNavButton type="submit" className={'button button__primary'} title="Sign in"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <Redirect
            to={{pathname: '/'}}
          />
        )
      }
    />
  );
}

export default Login;
