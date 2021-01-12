import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchListTrackedItems, fetchUserAutoLogin } from '../../redux';
import App from './App';

const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) {
      dispatch(fetchUserAutoLogin());
      dispatch(fetchListTrackedItems());
    }
  }, []);

  const user = useSelector(state => state.user);

  const isThereTrackedItem = useSelector(state => state.trackedItem.list).length > 0;

  if (user.username && localStorage.token) {
    return (<App isThereTrackedItem={isThereTrackedItem} />);
  }

  return (
    <Redirect to={{ pathname: '/log-in' }} />
  );
};

export default AppContainer;
