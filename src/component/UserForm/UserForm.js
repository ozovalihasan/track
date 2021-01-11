import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProfileContainer from '../Profile/ProfileContainer';
import * as color from '../styleVariables';

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
    <Form onSubmit={handleSubmit}>

      <FormInput
        onChange={handleChange}
        type="text"
        name="username"
        value={username}
        placeholder="Username"
      />
      <FormInput
        onChange={handleChange}
        type="password"
        name="password"
        value={password}
        placeholder="Password"
      />
      <SubmitButton type="submit">{buttonName}</SubmitButton>
    </Form>
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
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  height: 100vh;
`;

const FormInput = styled.input`
  margin: 10px;
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SubmitButton = styled.button`
  background-color: ${color.firstColor};
  padding: 10px;
  color: ${color.fifthColor};
`;

export default UserForm;
