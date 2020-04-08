import React, {useEffect, useState} from 'react';
import {
  Switch,
  useHistory
} from "react-router-dom";
import Home from './pages/notes'
import Login from './pages/login/login'
import './App.scss';
import Edit from "./pages/edit/edit";
import { setUserData } from './store/actions';
import {useDispatch, useSelector, useStore} from "react-redux";
import AuthRoute from "./components/AuthRoute";

export default function App() {
  const dispatch = useDispatch();
  const store = useStore();
  const [appData, setAppData] = useState({
    hasAuthStateChanged: false,
    authUser: null
  });
  const asyncGetUserData = async () => {
    if (localStorage.getItem('refreshToken')) {
      try {
        dispatch(await setUserData());
        setAppData({
          hasAuthStateChanged: true,
          authUser: true
        });
      } catch(error) {
        localStorage.removeItem('refreshToken');
        setAppData({
          hasAuthStateChanged: true,
          authUser: null
        });
      }
    }
    else {
      setAppData({
        hasAuthStateChanged: true,
        authUser: null
      });
    }
  };
  useEffect( () => { asyncGetUserData(); }, []);
  const history = useHistory();
  store.subscribe(() => {
    if(!store.getState().session.user) {
      setAppData({
        hasAuthStateChanged: true,
        authUser: null
      })
    }
    else {
      setAppData({
        hasAuthStateChanged: true,
        authUser: store.getState().session.user
      });
    }
  });
  return (
    <div className="App app__wrapper">
      { (!appData.hasAuthStateChanged || store.getState().session.isLoading) &&  <div className="progress-bar hidden" /> }
      { (appData.hasAuthStateChanged && !store.getState().session.isLoading) &&
        <Switch>
          <AuthRoute authUser={appData.authUser} authOnly exact history={history} path='/' component={Home}/>
          <AuthRoute authUser={appData.authUser} noAuthOnly path='/auth/login' mode="login" history={history} component={Login}/>
          <AuthRoute authUser={appData.authUser} noAuthOnly path='/auth/create' mode="create" history={history} component={Login}/>
          <AuthRoute authUser={appData.authUser} authOnly exact history={history} mode="add" path='/add' component={Edit}/>
          <AuthRoute authUser={appData.authUser} authOnly exact history={history} path='/edit/:id' component={Edit}/>
        </Switch>
      }
    </div>
  );
}

