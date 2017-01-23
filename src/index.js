import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import App from './js/container/App';


const ren = render(
  <AppContainer>
    <App />
  </AppContainer>, document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./js/container/App', ren);
}
