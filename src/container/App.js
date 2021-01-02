import React from 'react';
// import { useSelector } from 'react-redux';
// import { Route, Switch } from 'react-router-dom';
import Loading from '../component/Loading';
import ErrorContainer from './ErrorContainer';
// import PokemonsListContainer from './PokemonsListContainer';
// import OnePokemonContainer from './OnePokemonContainer';
// import Header from '../component/Header';

function App() {
//   const loading = useSelector(state => state.pokemon.loading);
//   const error = useSelector(state => state.pokemon.error);

  return (
    <div className="App">
      <Loading />
      <ErrorContainer />
      {/* <div>
        <Header />
      </div> */}
      {/* {loading && <Loading />}
      {error && <ErrorContainer />}
      <Switch>
        <Route exact path="/" component={PokemonsListContainer} />
        <Route exact path="/one-pokemon/:id" component={OnePokemonContainer} />
      </Switch> */}
    </div>
  );
}

export default App;
