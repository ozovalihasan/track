import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LogInAsGuestButton from './LogInAsGuestButton';
import { fetchUserLogin } from '../../redux';

const LogInAsGuestButtonContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchUserLogin('Guest', 'guestguest'));
    history.push('/');
  };

  return (
    <LogInAsGuestButton
      handleSubmit={handleSubmit}
    />
  );
};

export default LogInAsGuestButtonContainer;
