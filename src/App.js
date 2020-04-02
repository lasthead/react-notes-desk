import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Home from './pages/notes'
import Login from './pages/login'
import './App.scss';
import Edit from "./pages/edit/edit";

class App extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="App app__wrapper">
        <Switch>
          <Route exact history={history} path='/' component={Home}/>
          <Route exact history={history} path='/edit/:id' component={Edit}/>
          <Route exact history={history} path='/add' component={Edit}/>
          <Route path='/login' history={history} component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
