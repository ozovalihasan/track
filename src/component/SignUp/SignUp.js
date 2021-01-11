import { Redirect } from 'react-router-dom';

import { fetchUserCreate } from '../../redux';
import UserFormContainer from '../UserForm/UserFormContainer';

const SignUp = () => (localStorage.token ? (
  <Redirect to={{ pathname: '/' }} />
) : (
  <UserFormContainer fetchUser={fetchUserCreate} buttonName="Sign Up" />
));

export default SignUp;
