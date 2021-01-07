import PropTypes from 'prop-types';
import styled from 'styled-components';

const Error = ({
  error,
}) => (
  <ErrorMain>
    {error}
    .
    {' '}
    Please try again.
  </ErrorMain>
);

const ErrorMain = styled.div`
font-family: 'Courier New', Courier, monospace;
text-align: center;
width: 100%;
position: absolute;
`;

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
