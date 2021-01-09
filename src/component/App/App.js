import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import AddCheckContainer from '../AddCheck/AddCheckContainer';
import ErrorContainer from '../Error/ErrorContainer';
import LoadingContainer from '../Loading/LoadingContainer';
import ListTakenTimesContainer from '../ListTakenTimes/ListTakenTimesContainer';
import ListTrackedItemsContainer from '../ListTrackedItems/ListTrackedItemsContainer';
import Menu from '../Menu/Menu';
import PieceFormContainer from '../PieceForm/PieceFormContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import ShortTakenTimeContainer from '../ShortTakenTime/ShortTakenTimeContainer';
import ToggleShowHideContainer from '../ToggleShowHide/ToggleShowHideContainer';
import YourProgressContainer from '../YourProgress/YourProgressContainer';

const App = () => (
  <div className="App">

    <Main>
      <ErrorContainer />
      <LoadingContainer />

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
    </Main>

  </div>
);

const Main = styled.div`
display: grid;
height: 100vh;
grid-template-rows: 10% 80% 10%;
`;

export default App;
