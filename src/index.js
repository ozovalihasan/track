import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import store from './redux/store';
import AppContainer from './component/App/AppContainer';
import Login from './component/Login';
import SignUp from './component/SignUp';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Redirect to={{ pathname: '/' }} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route path="/" component={AppContainer} />
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
