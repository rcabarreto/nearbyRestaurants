import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import RestaurantApp from '../components/RestaurantApp'

export default (
  <Router>
    <Switch>
      <Route path="/" component={RestaurantApp}/>
    </Switch>
  </Router>
);
