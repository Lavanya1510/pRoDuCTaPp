import React, { Component } from 'react';
// import Product from './component/Product';
// import ListProduct from './component/ListProduct';
import ProductBox from './component/ProductBox';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Switch>
            <Route path="/ProductBox" component={ProductBox} exact />
          </Switch>
      </div>
      </Router>
    )
  }
}

export default App
