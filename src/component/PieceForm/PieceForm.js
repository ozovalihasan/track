import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../styleVariables';

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
  <Main>
    <Form onSubmit={handleSubmit}>
      <p>Add a piece to your tracked item</p>
      <Input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required />
      <Select name="trackedItemId" value={trackedItemId} onChange={handleChange} required>
        <option
          hidden
        >
          Please Choose Tracked Item
        </option>
        {trackedItemList.map(trackedItem => (
          <option key={trackedItem.id} value={trackedItem.id}>
            {trackedItem.name}
          </option>
        ))}
      </Select>
      <Select name="frequencyTime" value={frequencyTime} onChange={handleChange} required>
        <option
          hidden
        >
          Please Choose Time Interval
        </option>
        {frequencyTimeList.map(time => (
          <option key={time[0]} value={time[1]}>
            {time[0]}
          </option>
        ))}
      </Select>

      <Input type="number" name="frequency" min="1" value={frequency} onChange={handleChange} required placeholder="How many times?" />
      <CreateButton type="submit"> Create Piece</CreateButton>
    </Form>
  </Main>

);

const Main = styled.div`
  background-color: ${color.fifthColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  background-color: ${color.fifthColor};
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${color.seventhColor};
  margin: 10px 0;
`;

const Select = styled.select`
  padding: 10px;
  outline: none;
  border: 1px solid ${color.seventhColor};
  border-radius: 10px;
  appearance: none;
  margin: 10px 0;
  background-color: white;
`;

const CreateButton = styled.button`
  background-color: ${color.firstColor};
  padding: 20px;
  color: ${color.fifthColor};
  width: 100%;
`;

PieceForm.propTypes = {
  frequencyTimeList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
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
