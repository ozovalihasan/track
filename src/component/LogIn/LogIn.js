import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { fetchUserLogin } from '../../redux';
import UserFormContainer from '../UserForm/UserFormContainer';
import LogInAsGuestButtonContainer from '../LogInAsGuestButton/LogInAsGuestButtonContainer';

const LogIn = () => {
  const { username } = useSelector(state => state.user);

  return username ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <Profile>
      <UserFormContainer fetchUser={fetchUserLogin} buttonName="Log In" />
      <LogInAsGuestButtonContainer />
    </Profile>
  );
};

const Profile = styled.div`
  height: 100vh;
`;

export default LogIn;
