import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import store from './redux/store';
import AppContainer from './component/App/AppContainer';
import SignUp from './component/SignUp/SignUp';
import LogIn from './component/LogIn/LogIn';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Redirect to={{ pathname: '/' }} />
        <Switch>
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route path="/" component={AppContainer} />
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
