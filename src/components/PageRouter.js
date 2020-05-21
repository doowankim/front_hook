import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './layout/Navbar';
import Home from './layout/Home';
import Register from './Admin/Register';
import Login from './Admin/Login';

function PageRouter() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </>
    </Router>
  );
}

export default PageRouter;
