import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListPieces, fetchListTakenTimes } from '../../redux';
import setIntervalTime from './setIntervalTime';
import YourProgress from './YourProgress';

const YourProgressContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListTakenTimes());
    dispatch(fetchListPieces());
  }, []);

  const trackedItemId = useSelector(state => state.trackedItem.chosen.trackedItem.id);

  const pieces = useSelector(state => state.piece.list);

  let filteredPieces;
  if (trackedItemId) {
    filteredPieces = pieces.filter(piece => piece.tracked_item_id === trackedItemId);
  } else {
    filteredPieces = pieces;
  }

  const takenTimes = useSelector(state => state.takenTime.list);

  let filteredTakenTimes;
  if (trackedItemId) {
    filteredTakenTimes = takenTimes.filter(
      takenTimes => takenTimes.tracked_item_id === trackedItemId,
    );
  } else {
    filteredTakenTimes = takenTimes;
  }

  const mappedPieces = filteredPieces.map(piece => {
    const date = new Date();

    const intervalTime = setIntervalTime(date, piece.frequency_time);

    const pieceTakenTimes = filteredTakenTimes.filter(takenTime => takenTime.piece.id === piece.id);

    const percentageTakenTimes = intervalTime.map(
      interval => (pieceTakenTimes.filter(
        takenTime => (
          (takenTime.created_at * 1000 > interval[0])
             && (interval[1] > takenTime.created_at * 1000)),
      ).length / piece.frequency) * 100,
    );

    return { ...piece, percentageTakenTimes };
  });

  return (<YourProgress pieces={mappedPieces} />);
};
export default YourProgressContainer;
