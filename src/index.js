import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import App from './js/component/App.jsx';

const ren = render(
  <AppContainer>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </AppContainer>, document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./js/component/App.jsx', ren);
}
