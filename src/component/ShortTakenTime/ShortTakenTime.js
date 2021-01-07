/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShortTakenTime = ({
  takenTime, handleClick,
}) => (
  <Main>
    {(new Date(takenTime.created_at * 1000)).toLocaleString()}
    <div>
      {takenTime.piece.name}
    </div>
    <Destroy type="button" onClick={handleClick}>
      Cancel
    </Destroy>
  </Main>
);

const Main = styled.div`
  height: 130px;
  color: yellow;
  border: pink 2px solid;
  margin: 20px;
  background-color: #1119;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Destroy = styled.button`
background-color: yellow;
`;
ShortTakenTime.propTypes = {

  takenTime: PropTypes.shape({ name: PropTypes.string }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ShortTakenTime;
