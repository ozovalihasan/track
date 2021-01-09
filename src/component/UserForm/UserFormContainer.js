import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import UserForm from './UserForm';

const UserFormContainer = ({ fetchUser, buttonName }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    if (username && password) {
      dispatch(fetchUser(username, password));
    }
  };

  const handleChange = e => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  return (
    <UserForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      username={username}
      password={password}
      buttonName={buttonName}
    />
  );
};

UserFormContainer.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default UserFormContainer;
