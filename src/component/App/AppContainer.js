import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListTrackedItems, fetchShowTrackedItem, fetchUserAutoLogin } from '../../redux';
import Loading from '../Loading/Loading';
import App from './App';

const AppContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const loading = useSelector(state => state.app.loading);

  useEffect(() => {
    if (localStorage.token) {
      dispatch(fetchUserAutoLogin());
      dispatch(fetchListTrackedItems());
      if (localStorage.trackedItem) {
        dispatch(fetchShowTrackedItem(localStorage.trackedItem));
      }
    }
  }, [user]);

  const isThereTrackedItem = useSelector(state => state.trackedItem.list).length > 0;
  let isThereUser = false;
  if (user.username && localStorage.token) {
    isThereUser = true;
  }
  if (loading) {
    return (<Loading />);
  }
  return (<App isThereTrackedItem={isThereTrackedItem} isThereUser={isThereUser} />);
};

export default AppContainer;
