/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';
import * as color from '../styleVariables';

const ShortTrackedItem = ({
  trackedItem, handleClickChoose, handleClickDeleteTrackedItem,
}) => (
  <TrackedItemContainer key={trackedItem.id}>
    <ChooseButton onClick={() => handleClickChoose(trackedItem.id)}>
      {trackedItem.name}
    </ChooseButton>
    <DeleteButton onClick={() => handleClickDeleteTrackedItem(trackedItem.id)}>
      Delete
    </DeleteButton>
  </TrackedItemContainer>
);

const TrackedItemContainer = styled.div`
  background-color: ${color.fifthColor};
  width: 100%;
  display: grid;
  grid-template-rows: 4fr 1fr;
`;

const DeleteButton = styled(Button)`
  background-color: ${color.fourthColor};
  margin: 5px;
`;

const ChooseButton = styled(Button)`
  min-width: 200px;
  margin: 5px;
`;

ShortTrackedItem.propTypes = {
  trackedItem: PropTypes.shape({ name: PropTypes.string }).isRequired,
  handleClickChoose: PropTypes.func.isRequired,
  handleClickDeleteTrackedItem: PropTypes.func.isRequired,
};

export default ShortTrackedItem;
