import React from 'react';
import PropTypes from 'prop-types';
import ShortTrackedItem from './ShortTrackedItem';

const ShortTrackedItemContainer = ({ trackedItem }) => (
  <ShortTrackedItem trackedItem={trackedItem} />
);

ShortTrackedItemContainer.propTypes = {
  trackedItem: PropTypes.shape().isRequired,
};

export default ShortTrackedItemContainer;
