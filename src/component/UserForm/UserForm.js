import PropTypes from 'prop-types';
import ProfileContainer from '../Profile/ProfileContainer';

const UserForm = ({
  handleChange,
  handleSubmit,
  username,
  password,
  buttonName,
}) => (
  <>
    <div>
      <ProfileContainer />
    </div>
    <form onSubmit={handleSubmit}>

      <input
        onChange={handleChange}
        type="text"
        name="username"
        value={username}
        placeholder="Username"
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        value={password}
        placeholder="Password"
      />
      <button type="submit">{buttonName}</button>
    </form>
  </>
);

UserForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default UserForm;
