import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchUserLogin } from '../../redux';
import UserFormContainer from '../UserForm/UserFormContainer';

const LogIn = () => {
  const { username } = useSelector(state => state.user);

  return username ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <UserFormContainer fetchUser={fetchUserLogin} buttonName="Log In" />
  );
};

export default LogIn;
