import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ErrorContainer from '../Error/ErrorContainer';
import LoadingContainer from '../Loading/LoadingContainer';
import ListTrackedItemsContainer from '../ListTrackedItems/ListTrackedItemsContainer';
import OneTrackedItemContainer from '../OneTrackedItem/OneTrackedItemContainer';
import OnePieceContainer from '../OnePiece/OnePieceContainer';
// import ToggleShowHideContainer from '../ToggleShowHide/ToggleShowHideContainer';
import Menu from '../Menu/Menu';
// import ListPiecesContainer from './ListPieces/ListPiecesContainer';
// import AddCheckContainer from './AddCheck/AddCheckContainer';
import ShortTakenTimeContainer from '../ShortTakenTime/ShortTakenTimeContainer';
import ListTakenTimesContainer from '../ListTakenTimes/ListTakenTimesContainer';
import AddCheck from '../AddCheck/AddCheck';
import PieceFormContainer from '../PieceForm/PieceFormContainer';
import ToggleShowHideContainer from '../ToggleShowHide/ToggleShowHideContainer';
// import Header from '../component/Header';

const App = ({ showList }) => (
  <div className="App">

    <Main>
      <ErrorContainer />
      <LoadingContainer />

      {/* <ToggleShowHideContainer> */}
      {/* <ShowButton type="button" onClick={handleClick}>
        Show
      </ShowButton> */}
      {/* {showList && (<ListTrackedItemsContainer ref={node} />)} */}
      <ToggleShowHideContainer>
        {showList && (
        <ListTrackedItemsContainer />
        )}
      </ToggleShowHideContainer>

      {/* </ToggleShowHideContainer> */}
      <Switch>
        {/* <Route exact path="/" component={ListTrackedItemsContainer} /> */}
        <Route exact path="/one-tracked-item/:id" component={OneTrackedItemContainer} />
        <Route exact path="/one-piece/:id" component={OnePieceContainer} />
        <Route exact path="/one-piece-create" component={PieceFormContainer} />
        <Route
          exact
          path="/"
          component={AddCheck}
        />
        <Route
          exact
          path="/list-taken-times"
          render={() => (
            <ListTakenTimesContainer>
              <ShortTakenTimeContainer />
            </ListTakenTimesContainer>
          )}
        />
      </Switch>
      <Menu />
    </Main>

  </div>
);

const Main = styled.div`
display: grid;
height: 100vh;
grid-template-rows: 10% 80% 10%;
`;

App.propTypes = {
  showList: PropTypes.bool.isRequired,
};
export default App;