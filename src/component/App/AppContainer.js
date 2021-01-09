import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchUserAutoLogin } from '../../redux';
import App from './App';

const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) dispatch(fetchUserAutoLogin());
  }, []);

  const user = useSelector(state => state.user);

  if (user.username && localStorage.token) {
    return (<App />);
  }

  return (
    <Redirect to={{ pathname: '/log-in' }} />
  );
};

export default AppContainer;
