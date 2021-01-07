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
    <form onSubmit={handleSubmit} className="user-form form-main">

      <input
        onChange={handleChange}
        type="text"
        name="username"
        value={username}
        className="user-form inputs"
        placeholder="Username"
      />
      <input
        onChange={handleChange}
        type="text"
        name="password"
        value={password}
        className="user-form inputs"
        placeholder="Password"
      />
      <button type="submit" className="user-form submit-button">{buttonName}</button>
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
