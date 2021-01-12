import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddCheckContainer from '../AddCheck/AddCheckContainer';
import ListTakenTimesContainer from '../ListTakenTimes/ListTakenTimesContainer';
import ListTrackedItemsContainer from '../ListTrackedItems/ListTrackedItemsContainer';
import Menu from '../Menu/Menu';
import PieceFormContainer from '../PieceForm/PieceFormContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import ShortTakenTimeContainer from '../ShortTakenTime/ShortTakenTimeContainer';
import ToggleShowHideContainer from '../ToggleShowHide/ToggleShowHideContainer';
import YourProgressContainer from '../YourProgress/YourProgressContainer';

const App = ({ isThereTrackedItem }) => (

  <Main>

    {isThereTrackedItem
      ? (
        <>
          <ToggleShowHideContainer>
            <ListTrackedItemsContainer />
          </ToggleShowHideContainer>

          <Switch>
            <Route exact path="/" component={AddCheckContainer} />
            <Route exact path="/one-piece-create" component={PieceFormContainer} />
            <Route exact path="/your-progress" component={YourProgressContainer} />
            <Route exact path="/profile" component={ProfileContainer} />
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
        </>
      )
      : (
        <ListTrackedItemsContainer />
      ) }
  </Main>

);

const Main = styled.div`
display: grid;
height: 100vh;
grid-template-rows: 10% 75%;
`;

App.propTypes = {
  isThereTrackedItem: PropTypes.bool.isRequired,
};

export default App;
