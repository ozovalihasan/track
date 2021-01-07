import { useSelector } from 'react-redux';
import App from './App';

const AppContainer = () => {
  const showList = useSelector(state => state.app.showList);

  return (<App showList={showList} />);
};

export default AppContainer;
