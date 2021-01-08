import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShortTrackedItemsContainer from '../ShortTrackedItems/ShortTrackedItemContainer';

const ListTrackedItems = ({
  trackedItems,
  handleClickCreateTrackedItem,
  name,
  handleChange,
  handleClickShowAll,
}) => (
  <Main>
    <TrackedItem>
      <CreateContainer>
        <input type="text" value={name} onChange={handleChange} placeholder="Tracked Item Name" />
        <CreateButton onClick={handleClickCreateTrackedItem}>
          Create
        </CreateButton>
        <CreateButton onClick={handleClickShowAll}>
          Show All
        </CreateButton>
      </CreateContainer>
    </TrackedItem>
    {
    trackedItems.map(trackedItem => (
      <ShortTrackedItemsContainer key={trackedItem.id} trackedItem={trackedItem} />
    ))
}

  </Main>
);

const Main = styled.div`
display: flex;
background-color: red;
height: 500px;
overflow: scroll;
position: absolute;
width: 100%;

`;

const CreateContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
`;

const CreateButton = styled.button`
background-color: orange;
width: 100%;
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

ListTrackedItems.propTypes = {
  trackedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClickCreateTrackedItem: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClickShowAll: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,

};

export default ListTrackedItems;
