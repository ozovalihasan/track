import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShortTrackedItemContainer from '../ShortTrackedItem/ShortTrackedItemContainer';

const ListTrackedItems = ({
  trackedItems,
}) => (
  <Main>
    {
    trackedItems.map(trackedItem => (
      <ShortTrackedItemContainer key={trackedItem.id} trackedItem={trackedItem} />
    ))
  }

  </Main>
);

const Main = styled.div`
              background-color: red;

`;

ListTrackedItems.propTypes = {
  trackedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListTrackedItems;
