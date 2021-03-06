import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCreatePiece, fetchListTrackedItems } from '../../redux';
import PieceForm from './PieceForm';

const PieceFormContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListTrackedItems());
  }, []);

  const chosenTrackedItemId = useSelector(state => state.trackedItem.chosen.trackedItem.id) || '';

  const [trackedItemId, setTrackedItemId] = useState(chosenTrackedItemId.toString());
  const trackedItemList = useSelector(state => state.trackedItem.list);
  const frequencyTimeList = [['Day', '86400'], ['Week', '604800']];
  const [frequencyTime, setFrequencyTime] = useState('');
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleChange = e => {
    if (e.target.name === 'frequencyTime') {
      setFrequencyTime(e.target.value);
    } else if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'frequency' && e.target.value >= 0) {
      setFrequency(e.target.value);
    } else if (e.target.name === 'trackedItemId') {
      setTrackedItemId(e.target.value);
    }
  };

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchCreatePiece({
      piece: {
        name, frequency, frequency_time: frequencyTime, percentage: 0,
      },
      tracked_item_id: trackedItemId,
    }));
    history.push('/');
  };

  return (
    <PieceForm
      frequencyTimeList={frequencyTimeList}
      frequencyTime={frequencyTime}
      frequency={frequency}
      name={name}
      trackedItemList={trackedItemList}
      trackedItemId={trackedItemId}
      handleSubmit={handleSubmit}
      handleChange={handleChange}

    />
  );
};

export default PieceFormContainer;
