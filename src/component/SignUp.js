import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { addUser } from '../redux';
import UserFormContainer from './UserForm/UserFormContainer';

const SignUp = () => {
  const user = useSelector(state => state.user);

  return localStorage.token ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <UserFormContainer fetchUser={addUser} loading={user.loading} buttonName="Sign Up" />
  );
};

export default SignUp;
