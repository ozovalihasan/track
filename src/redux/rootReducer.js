import apiReducer from './api/apiReducer';
import userReducer from './user/userReducer';
import trackedItemReducer from './trackedItem/trackedItemReducer';
import pieceReducer from './piece/pieceReducer';

const rootReducer = {
  api: apiReducer,
  user: userReducer,
  trackedItem: trackedItemReducer,
  piece: pieceReducer,
};

export default rootReducer;
