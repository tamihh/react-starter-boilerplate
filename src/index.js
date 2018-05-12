import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'modules/store';
import App from 'components/app';
import './sass/global.scss';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('app')
  );
};

render(App);

