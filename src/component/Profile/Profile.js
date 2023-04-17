import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../styleVariables';
import Button from '../Button/Button';

const Profile = ({ handleClick, user }) => (
  <>
    {
      (user.username) ? (
        <UserContainer>
          <User>
            Hi
            {' '}
            {user.username}
          </User>
          <Button type="button" onClick={handleClick}>
            Logout
          </Button>
        </UserContainer>
      ) : (
        <Main>
          <StyledLink to="/log-in">Log in</StyledLink>
          <StyledLink to="/sign-up">Sign up</StyledLink>
        </Main>
      )
    }
  </>
);

Profile.propTypes = {
  handleClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

const UserContainer = styled.div`
  background-color: ${color.fifthColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const User = styled.div`
  padding: 30px;
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
  background-color: ${color.firstColor};
  padding: 20px;
  color: ${color.fifthColor};
  margin: 40px 10px;
`;

export default Profile;
