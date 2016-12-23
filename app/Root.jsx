import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

const routeConfig = <Route path="/" component={App} />;

export default class Root extends React.Component {
  render() {
    if (!this.routeConfig) this.routeConfig = routeConfig;
    return (
      <Router history={browserHistory}>
        {this.routeConfig}
      </Router>
    );
  }
}
