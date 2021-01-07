import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchUserLogin } from '../redux';
import UserFormContainer from './UserForm/UserFormContainer';

const Login = () => {
  const user = useSelector(state => state.user);

  return user.user ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <UserFormContainer fetchUser={fetchUserLogin} loading={user.loading} buttonName="Log In" />
  );
};

export default Login;
