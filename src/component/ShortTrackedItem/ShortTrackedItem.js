/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../styleVariables';

const ShortTrackedItem = ({
  trackedItem, handleClickChoose, handleClickDeleteTrackedItem,
}) => (
  <TrackedItemContainer key={trackedItem.id}>
    <ChooseButton onClick={() => handleClickChoose(trackedItem.id)}>
      {trackedItem.name}
    </ChooseButton>
    <DeleteButton onClick={() => handleClickDeleteTrackedItem(trackedItem.id)}>
      Cancel
    </DeleteButton>
  </TrackedItemContainer>
);

const TrackedItemContainer = styled.div`
  background-color: ${color.fifthColor};
  display: grid;
  grid-template-rows: 4fr 1fr;
`;

const DeleteButton = styled.button`
  background-color: ${color.fourthColor};
  margin: 5px;
  color: white;
`;

const ChooseButton = styled.button`
  background-color: ${color.firstColor};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100px;
  margin: 5px;
  color: white;

`;

ShortTrackedItem.propTypes = {
  trackedItem: PropTypes.shape({ name: PropTypes.string }).isRequired,
  handleClickChoose: PropTypes.func.isRequired,
  handleClickDeleteTrackedItem: PropTypes.func.isRequired,
};

export default ShortTrackedItem;
