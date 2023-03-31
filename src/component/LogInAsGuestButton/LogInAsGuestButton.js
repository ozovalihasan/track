import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';

const LogInAsGuestButton = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <SubmitButton type="submit">Log in as guest</SubmitButton>
  </Form>
);

LogInAsGuestButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const SubmitButton = styled(Button)`
  width: 100%;
`;

const Form = styled.form`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export default LogInAsGuestButton;
