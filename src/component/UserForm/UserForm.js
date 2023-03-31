import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';
import Input from '../Input/Input';
import ProfileContainer from '../Profile/ProfileContainer';

const UserForm = ({
  handleChange,
  handleSubmit,
  username,
  password,
  buttonName,
}) => (
  <Main>
    <div>
      <ProfileContainer />
    </div>
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={e => handleChange(e, 'password')}
          type="text"
          name="username"
          value={username}
          placeholder="Username"
        />
        <Input
          onChange={e => handleChange(e, 'password')}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
        />
        <SubmitButton type="submit">{buttonName}</SubmitButton>
      </Form>
    </FormContainer>
  </Main>
);

UserForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

const Main = styled.div`
  display: block;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;

`;

const SubmitButton = styled(Button)`
  margin: 40px 10px;
  width: 100%;
`;

export default UserForm;
