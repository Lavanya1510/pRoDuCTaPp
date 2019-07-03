import React, { Component } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import DynamicForm from './components/DynamicForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends Component {
  
  render() {
    return (
      <Router>
      <div className="App">
        
          <Switch>
            <Route path="/Login" component={Login} exact />
            <Route path="/Home" component={Home} exact />
            <Route path="/DynamicForm" component={DynamicForm} exact />
          </Switch>
       
      </div>
      </Router>

    )
  }
}

export default App

