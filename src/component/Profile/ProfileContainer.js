import { useDispatch, useSelector } from 'react-redux';
import {
  resetApp, resetApi, resetPiece, resetTakenTime, resetTrackedItem, userSignOut,
} from '../../redux';
import Profile from './Profile';

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleClick = () => {
    localStorage.removeItem('token');
    dispatch(resetApi());
    dispatch(resetApp());
    dispatch(resetTrackedItem());
    dispatch(resetPiece());
    dispatch(resetTakenTime());
    dispatch(userSignOut());
  };

  return <Profile handleClick={handleClick} user={user} />;
};

export default ProfileContainer;
