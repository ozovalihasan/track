import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Profile = ({ handleClick, user }) => (
  <div>
    <div>
      {
        (user.user) ? (
          <div>

            <p>
              Hi
              {' '}
              {user.user}
            </p>
            <button type="button" onClick={handleClick}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login">Login</Link>
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
    user: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
