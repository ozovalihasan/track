import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddCheckContainer from '../AddCheck/AddCheckContainer';
import ListTakenTimesContainer from '../ListTakenTimes/ListTakenTimesContainer';
import ListTrackedItemsContainer from '../ListTrackedItems/ListTrackedItemsContainer';
import PieceFormContainer from '../PieceForm/PieceFormContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import ShortTakenTimeContainer from '../ShortTakenTime/ShortTakenTimeContainer';
import ToggleShowHideContainer from '../ToggleShowHide/ToggleShowHideContainer';
import YourProgressContainer from '../YourProgress/YourProgressContainer';
import ErrorContainer from '../Error/ErrorContainer';
import LoadingContainer from '../Loading/LoadingContainer';
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import MenuContainer from '../Menu/MenuContainer';

const App = ({ isThereTrackedItem, isThereUser }) => (

  <Main>
    <ErrorContainer />
    <LoadingContainer />
    {isThereUser || (
      <>
        <Redirect to="/log-in" />
        <Switch>

          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </>

    )}

    {isThereUser && !isThereTrackedItem && <ListTrackedItemsContainer />}
    {isThereTrackedItem && isThereUser && (
    <>
      <Redirect to="/" />

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
      <MenuContainer />
    </>
    )}
  </Main>

);

const Main = styled.div`
display: grid;
height: 100vh;
grid-template-rows: 10% 75%;
`;

App.propTypes = {
  isThereTrackedItem: PropTypes.bool.isRequired,
  isThereUser: PropTypes.bool.isRequired,
};

export default App;
