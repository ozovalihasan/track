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

    const pieceCreateTime = new Date(piece.created_at);

    const intervalTime = setIntervalTime(date, piece.frequency_time)
      .filter(interval => ((pieceCreateTime.getTime()) < interval[1]));

    const pieceTakenTimes = filteredTakenTimes.filter(takenTime => takenTime.piece.id === piece.id);

    const percentageTakenTimes = intervalTime.map(
      interval => (pieceTakenTimes.filter(
        takenTime => (
          (interval[0] < takenTime.created_at * 1000)
             && (takenTime.created_at * 1000 < interval[1])),
      ).length / piece.frequency) * 100,
    );
    return { ...piece, percentageTakenTimes };
  });

  return (<YourProgress pieces={mappedPieces} />);
};
export default YourProgressContainer;
