import { Redirect } from 'react-router-dom';

import { addUser } from '../../redux';
import UserFormContainer from '../UserForm/UserFormContainer';

const SignUp = () => (localStorage.token ? (
  <Redirect to={{ pathname: '/' }} />
) : (
  <UserFormContainer fetchUser={addUser} buttonName="Sign Up" />
));

export default SignUp;
