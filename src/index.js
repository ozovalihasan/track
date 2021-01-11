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
import './stylesheet/reset.css';
import './stylesheet/index.css';
import ErrorContainer from './component/Error/ErrorContainer';
import LoadingContainer from './component/Loading/LoadingContainer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ErrorContainer />
        <LoadingContainer />
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
