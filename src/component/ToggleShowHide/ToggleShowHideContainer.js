import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ToggleShowHide from './ToggleShowHide';
import { hideTrackedItems, showTrackedItems } from '../../redux';

const ToggleShowHideContainer = ({ children }) => {
  const showList = useSelector(state => state.app.showList);

  const dispatch = useDispatch();
  const handleClick = () => {
    if (showList) { dispatch(hideTrackedItems()); } else { dispatch(showTrackedItems()); }
  };

  return (
    <ToggleShowHide
      component={children}
      handleClick={handleClick}
      showList={showList}
    />

  );
};

ToggleShowHideContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ToggleShowHideContainer;
