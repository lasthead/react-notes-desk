import React, {useEffect, useState} from 'react';
import {
  Switch,
  useHistory
} from "react-router-dom";
import { Notes } from './pages/notes'
import Login from './pages/login/login'
import './App.modules.scss';
import styles from './App.modules.scss';
import Edit from "./pages/edit/edit";
import { setStoreUserData } from './store/actions';
import {useDispatch, useStore} from "react-redux";
import AuthRoute from "./components/AuthRoute";
import ProgressBar from "./components/BaseUI/ProgressBar/ProgressBar";

export default function App() {
  console.log('компонент перерисовался');
  const store = useStore();
  const history = useHistory();
  const dispatch = useDispatch();
  const [appData, setAppData] = useState({
    hasAuthStateChanged: false,
    authUser: null
  });

  // useEffect(() => {
  //   setUserAuth(!!currentUser);
  // }, [currentUser]);

  const asyncGetUserData = async () => {
    if (localStorage.getItem('refreshToken')) {
      try {
        dispatch(await setStoreUserData());
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

  useEffect( () => { asyncGetUserData().then(null); },[]);

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
  //console.log(appData.hasAuthStateChanged);
  return (
    <div className="App app__wrapper">
      { (!appData.hasAuthStateChanged || store.getState().session.isLoading) &&
        <ProgressBar className={styles.progressbar}/>
      }
      { (appData.hasAuthStateChanged && !store.getState().session.isLoading) &&
        <Switch>
          <AuthRoute authUser={appData.authUser} authOnly exact history={history} path='/' component={Notes}/>
          <AuthRoute authUser={appData.authUser} noAuthOnly path='/auth/login' mode="login" history={history} component={Login}/>
          <AuthRoute authUser={appData.authUser} noAuthOnly path='/auth/create' mode="create" history={history} component={Login}/>
          <AuthRoute authUser={appData.authUser} authOnly exact history={history} mode="add" path='/add' component={Edit}/>
          <AuthRoute authUser={appData.authUser} authOnly exact history={history} path='/edit/:id' component={Edit}/>
        </Switch>
      }
    </div>
  );
}
