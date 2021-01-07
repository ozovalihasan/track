import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchUserAutoLogin } from '../../redux';
import App from './App';

const AppContainer = () => {
  const showList = useSelector(state => state.app.showList);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) dispatch(fetchUserAutoLogin());
  }, []);

  const user = useSelector(state => state.user);

  if (user.user && localStorage.token) {
    return (<App showList={showList} />);
  }

  return (
    <Redirect to={{ pathname: '/login' }} />
  );
};

export default AppContainer;
