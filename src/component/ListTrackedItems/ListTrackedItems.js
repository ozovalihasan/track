import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';
import Input from '../Input/Input';
import ShortTrackedItemContainer from '../ShortTrackedItem/ShortTrackedItemContainer';
import * as color from '../styleVariables';

const ListTrackedItems = ({
  trackedItems,
  name,
  handleClickCreateTrackedItem,
  handleChange,
  handleClickShowAll,
}) => (
  <Main trackedItems={trackedItems}>
    <TrackedItem>
      <CreateContainer>
        <Input type="text" value={name} onChange={handleChange} placeholder="Tracked Item Name" />
        <CreateButton onClick={handleClickCreateTrackedItem}>
          Create
        </CreateButton>
      </CreateContainer>

      {(trackedItems.length > 0) && (
      <ShowButton onClick={handleClickShowAll}>
        Track All
      </ShowButton>
      )}
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
overflow: scroll;
position: absolute;
width: 100%;
${
  props => (
    (props.trackedItems.length === 0)
      ? `
        align-items: center;
        justify-content: center;
        height: 100%;
      ` : `
        height: 500px;
      `
  )
}
`;

const CreateContainer = styled.div`
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CreateButton = styled(Button)`
  width: 100%;
`;

const ShowButton = styled(Button)`
  margin: 10px;
`;

const TrackedItem = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
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
