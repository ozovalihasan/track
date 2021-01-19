/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../styleVariables';
import Button from '../Button/Button';

const ShortTakenTime = ({
  takenTime, handleClick,
}) => (
  <Main>
    <TakenTimeName>
      {takenTime.piece.name}
    </TakenTimeName>
    <CheckTime>
      <div>
        {(new Date(takenTime.created_at * 1000)).toLocaleTimeString()}
      </div>
      <div>
        {(new Date(takenTime.created_at * 1000)).toDateString()}
      </div>
    </CheckTime>
    <Destroy type="button" onClick={handleClick}>
      X
    </Destroy>
  </Main>
);

const Main = styled.div`
  color: ${color.sixthColor};
  background-color: white;
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 3fr 1fr; 
  align-items: center;
  text-align: center;
  margin: 3px 0;
  padding: 0 10px;
`;

const TakenTimeName = styled.div`
  margin: 10px 0;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  border: solid 1px ${color.firstColor}
`;

const CheckTime = styled.div`
  margin: 5px;
  margin-left: 20px;
  text-align: left;
  
`;

const Destroy = styled(Button)`
  margin:20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${color.fourthColor}; 
`;
ShortTakenTime.propTypes = {

  takenTime: PropTypes.shape({ name: PropTypes.string }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ShortTakenTime;
