import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorContainer from './Error/ErrorContainer';
import LoadingContainer from './Loading/LoadingContainer';
import ListTrackedItemsContainer from './ListTrackedItems/ListTrackedItemsContainer';
import OneTrackedItemContainer from './OneTrackedItem/OneTrackedItemContainer';
import OnePieceContainer from './OnePiece/OnePieceContainer';
// import Header from '../component/Header';

const App = () => (
  <div className="App">
    <ErrorContainer />
    <LoadingContainer />

    {/* <div>
        <Header />
      </div> */}

    <Switch>
      <Route exact path="/" component={ListTrackedItemsContainer} />
      <Route exact path="/one-tracked-item/:id" component={OneTrackedItemContainer} />
      <Route exact path="/one-piece/:id" component={OnePieceContainer} />
    </Switch>
  </div>
);

export default App;
