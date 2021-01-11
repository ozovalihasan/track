import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShortTrackedItemContainer from '../ShortTrackedItem/ShortTrackedItemContainer';
import * as color from '../styleVariables';

const ListTrackedItems = ({
  trackedItems,
  name,
  handleClickCreateTrackedItem,
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
      </CreateContainer>
      <ShowButton onClick={handleClickShowAll}>
        Show All
      </ShowButton>
    </TrackedItem>
    {
    trackedItems.map(trackedItem => (
      <ShortTrackedItemContainer key={trackedItem.id} trackedItem={trackedItem} />
    ))
}

  </Main>
);

const Main = styled.div`
  z-index: 998;
  display: flex;
  background-color: ${color.fifthColor};
  height: 500px;
  overflow: scroll;
  position: absolute;
  width: 100%;
`;

const CreateContainer = styled.div`
  height: 100%;
  padding: 10px;
`;

const CreateButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${color.firstColor};
  color: white;
`;

const ShowButton = styled.button`
  margin: 10px;
  background-color: ${color.firstColor};
  border-radius: 10px;
  color: white;
`;

const TrackedItem = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  width: 200px;
  height: 100%;
  align-self: center;
  justify-self: center;
  text-align: center;
`;

ListTrackedItems.propTypes = {
  trackedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  handleClickCreateTrackedItem: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClickShowAll: PropTypes.func.isRequired,

};

export default ListTrackedItems;
