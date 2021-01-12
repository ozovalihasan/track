import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ToggleShowHide from './ToggleShowHide';
import { hideTrackedItems, showTrackedItems } from '../../redux';

const ToggleShowHideContainer = ({ children }) => {
  const dispatch = useDispatch();

  const showList = useSelector(state => state.app.showList);
  const chosenTrackedItem = useSelector(state => state.trackedItem.chosen.trackedItem.name);

  const handleClick = () => {
    if (showList) {
      dispatch(hideTrackedItems());
    } else {
      dispatch(showTrackedItems());
    }
  };

  return (
    <ToggleShowHide
      component={children}
      handleClick={handleClick}
      showList={showList}
      chosenTrackedItem={chosenTrackedItem}
    />

  );
};

ToggleShowHideContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ToggleShowHideContainer;
