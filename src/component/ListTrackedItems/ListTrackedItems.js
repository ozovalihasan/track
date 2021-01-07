import PropTypes from 'prop-types';
import styled from 'styled-components';
// import ShortTrackedItemContainer from '../ShortTrackedItem/ShortTrackedItemContainer';

const ListTrackedItems = ({
  trackedItems, handleClick, name, handleChange, handleClickChoose,
}) => (
  <Main>
    <TrackedItem>
      <CreateContainer>
        <input type="text" value={name} onChange={handleChange} placeholder="Tracked Item Name" />
        <CreateButton onClick={handleClick}>
          Create
        </CreateButton>
      </CreateContainer>
    </TrackedItem>
    {
    trackedItems.map(trackedItem => (
      // <ShortTrackedItemContainer key={trackedItem.id} trackedItem={trackedItem} />
      <ChooseButton key={trackedItem.id} onClick={() => handleClickChoose(trackedItem.id)}>
        <TrackedItem key={trackedItem.id}>
          {trackedItem.name}
        </TrackedItem>
      </ChooseButton>
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
  grid-template-rows: 1fr 2fr;
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
// margin: 20px;marginmarginmarginmargin
`;

const ChooseButton = styled.button`
  background-color: pink;
`;

ListTrackedItems.propTypes = {
  trackedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClickChoose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ListTrackedItems;
