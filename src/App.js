import React, {useEffect} from 'react';
import {
  Switch,
  useHistory
} from "react-router-dom";
import Home from './pages/notes'
import Login from './pages/login/login'
import './App.scss';
import Edit from "./pages/edit/edit";
import { setUserData } from './store/actions';
import {useDispatch, useSelector} from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import LoginRoute from "./components/LoginRoute";

export default function App() {
  const dispatch = useDispatch();
  const session = useSelector( state => state.session);
  const asyncGetUserData = async () => {
    if (localStorage.getItem('refreshToken')) {
      try {
        dispatch(await setUserData());
      } catch(error) {}
    }
  };
  useEffect( () => { asyncGetUserData(); }, []);
  const history = useHistory();
  return (
    <div className="App app__wrapper">
      { session.isLoading &&  <div className="progress-bar hidden" /> }
      { !session.isLoading &&
        <Switch>
          <PrivateRoute isAuth={!!session.user} exact history={history} path='/' component={Home}/>
          <LoginRoute isAuth={!!session.user} authLogin path='/auth/login' history={history} component={Login}/>
          <LoginRoute isAuth={!!session.user} authCreate path='/auth/create' history={history} component={Login}/>
          <PrivateRoute isAuth={!!session.user} exact history={history} path='/edit/:id' component={Edit}/>
          <PrivateRoute isAuth={!!session.user} exact history={history} path='/add' component={Edit}/>
        </Switch>
      }
    </div>
  );
}

