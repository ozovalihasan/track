/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShortTrackedItem = ({
  trackedItem, handleClickChoose, handleClickDeleteTrackedItem,
}) => (
  <TrackedItemContainer key={trackedItem.id}>
    <ChooseButton onClick={() => handleClickChoose(trackedItem.id)}>
      <TrackedItem>
        {trackedItem.name}
      </TrackedItem>
    </ChooseButton>
    <DeleteButton onClick={() => handleClickDeleteTrackedItem(trackedItem.id)}>
      Cancel
    </DeleteButton>
  </TrackedItemContainer>
);

const TrackedItemContainer = styled.div`
      background-color: orange;
      display: grid;
      grid-template-rows: 4fr 1fr;

`;

const TrackedItem = styled.div`
background-color: red;
width: 200px;
height: 100%;
align-self: center;
justify-self: center;
text-align: center;
border: yellow 2px solid;
`;

const DeleteButton = styled.button`
background-color: yellow;
`;

const ChooseButton = styled.button`
  background-color: pink;
`;

ShortTrackedItem.propTypes = {
  trackedItem: PropTypes.shape({ name: PropTypes.string }).isRequired,
  handleClickChoose: PropTypes.func.isRequired,
  handleClickDeleteTrackedItem: PropTypes.func.isRequired,
};

export default ShortTrackedItem;
