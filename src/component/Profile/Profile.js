import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Profile = ({ handleClick, user }) => (
  <div>
    <div>
      {
        (user.username) ? (
          <div>

            <p>
              Hi
              {' '}
              {user.username}
            </p>
            <button type="button" onClick={handleClick}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/log-in">Login</Link>
            <Link to="/sign-up">Sign up</Link>
          </div>
        )
    }

    </div>
  </div>
);

Profile.propTypes = {
  handleClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
