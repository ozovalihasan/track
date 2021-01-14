import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListTrackedItems, fetchShowTrackedItem, fetchUserAutoLogin } from '../../redux';
import App from './App';

const AppContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const isThereTrackedItem = useSelector(state => state.trackedItem.list).length > 0;
  const { token, trackedItem: chosenTrackedItem } = localStorage;

  const isThereUser = !!(user.username && localStorage.token);
  useEffect(() => {
    if (token) {
      dispatch(fetchUserAutoLogin());
      dispatch(fetchListTrackedItems());
      if (chosenTrackedItem) {
        dispatch(fetchShowTrackedItem(chosenTrackedItem));
      }
    }
  }, [user]);

  return (<App isThereTrackedItem={isThereTrackedItem} isThereUser={isThereUser} />);
};

export default AppContainer;
