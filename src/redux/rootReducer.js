import apiReducer from './api/apiReducer';
import appReducer from './app/appReducer';
import userReducer from './user/userReducer';
import trackedItemReducer from './trackedItem/trackedItemReducer';
import pieceReducer from './piece/pieceReducer';
import takenTimeReducer from './takenTime/takenTimeReducer';

const rootReducer = {
  app: appReducer,
  api: apiReducer,
  user: userReducer,
  trackedItem: trackedItemReducer,
  piece: pieceReducer,
  takenTime: takenTimeReducer,
};

export default rootReducer;
