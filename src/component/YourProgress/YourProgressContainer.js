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

  const mappedPieces = filteredPieces.map(piece => {
    const dateNow = Date.now();
    const date = new Date(dateNow);

    const pieceCreateTime = new Date(piece.created_at);

    const intervalTime = setIntervalTime(date, piece.frequency_time)
      .filter(interval => ((pieceCreateTime.getTime()) < interval.end));

    const pieceTakenTimes = takenTimes.filter(takenTime => takenTime.piece.id === piece.id);

    const percentageTakenTimes = intervalTime.map(
      interval => (
        (
          pieceTakenTimes.filter(
            takenTime => (
              (
                interval.start < takenTime.created_at * 1000
              ) && (
                takenTime.created_at * 1000 < interval.end
              )
            ),
          ).length / piece.frequency
        ) * 100
      ),
    );

    return { ...piece, percentageTakenTimes };
  });

  return (<YourProgress pieces={mappedPieces} />);
};
export default YourProgressContainer;
