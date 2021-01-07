import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PieceForm = ({
  frequencyTimeList,
  frequencyTime,
  frequency,
  name,
  trackedItemList,
  trackedItemId,
  handleSubmit,
  handleChange,

}) => (
  <Form onSubmit={handleSubmit}>
    <input type="text" name="name" id="" value={name} onChange={handleChange} placeholder="Name" />
    <select name="trackedItemId" value={trackedItemId} onChange={handleChange}>
      {trackedItemList.map(trackedItem => (
        <option key={trackedItem.id} value={trackedItem.id}>
          {trackedItem.name}
        </option>
      ))}
    </select>
    <select name="frequencyTime" value={frequencyTime} onChange={handleChange}>
      {frequencyTimeList.map(time => (
        <option key={time[0]} value={time[1]}>
          {time[0]}
        </option>
      ))}
    </select>

    <input type="number" name="frequency" id="" value={frequency} onChange={handleChange} />
    <button type="submit"> Create Piece</button>
  </Form>

);

const Form = styled.form`
color: turquoise;
`;
PieceForm.propTypes = {
  frequencyTimeList: PropTypes.arrayOf().isRequired,
  frequencyTime: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  trackedItemList: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number,
        name: PropTypes.string,
      },
    ),
  ).isRequired,
  trackedItemId: PropTypes.string.isRequired,
};
export default PieceForm;
