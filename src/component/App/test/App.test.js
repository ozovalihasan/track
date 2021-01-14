import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter, Redirect,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App';

jest.mock('../../AddCheck/AddCheckContainer', () => {
  const AddCheckContainer = () => (<div>Mock AddCheckContainer </div>);
  AddCheckContainer.displayName = 'AddCheckContainer';
  return AddCheckContainer;
});

jest.mock('../../Error/ErrorContainer', () => {
  const ErrorContainer = () => (<div>Mock ErrorContainer </div>);
  ErrorContainer.displayName = 'ErrorContainer';
  return ErrorContainer;
});

jest.mock('../../ListTakenTimes/ListTakenTimesContainer', () => {
  const ListTakenTimesContainer = () => (<div>Mock ListTakenTimesContainer </div>);
  ListTakenTimesContainer.displayName = 'ListTakenTimesContainer';
  return ListTakenTimesContainer;
});

jest.mock('../../ListTrackedItems/ListTrackedItemsContainer', () => {
  const ListTrackedItemsContainer = () => (<div>Mock ListTrackedItemsContainer </div>);
  ListTrackedItemsContainer.displayName = 'ListTrackedItemsContainer';
  return ListTrackedItemsContainer;
});

jest.mock('../../Loading/LoadingContainer', () => {
  const LoadingContainer = () => (<div>Mock LoadingContainer </div>);
  LoadingContainer.displayName = 'LoadingContainer';
  return LoadingContainer;
});

jest.mock('../../LogIn/LogIn', () => {
  const LogIn = () => (<div>Mock LogIn </div>);
  LogIn.displayName = 'LogIn';
  return LogIn;
});

jest.mock('../../Menu/MenuContainer', () => {
  const MenuContainer = () => (<div>Mock MenuContainer </div>);
  MenuContainer.displayName = 'MenuContainer';
  return MenuContainer;
});

jest.mock('../../PieceForm/PieceFormContainer', () => {
  const PieceFormContainer = () => (<div>Mock PieceFormContainer </div>);
  PieceFormContainer.displayName = 'PieceFormContainer';
  return PieceFormContainer;
});

jest.mock('../../Profile/ProfileContainer', () => {
  const ProfileContainer = () => (<div>Mock ProfileContainer </div>);
  ProfileContainer.displayName = 'ProfileContainer';
  return ProfileContainer;
});

jest.mock('../../ShortTakenTime/ShortTakenTimeContainer', () => {
  const ShortTakenTimeContainer = () => (<div>Mock ShortTakenTimeContainer </div>);
  ShortTakenTimeContainer.displayName = 'ShortTakenTimeContainer';
  return ShortTakenTimeContainer;
});

jest.mock('../../SignUp/SignUp', () => {
  const SignUp = () => (<div>Mock SignUp </div>);
  SignUp.displayName = 'SignUp';
  return SignUp;
});

jest.mock('../../ToggleShowHide/ToggleShowHideContainer', () => {
  const ToggleShowHideContainer = () => (<div>Mock ToggleShowHideContainer</div>);
  ToggleShowHideContainer.displayName = 'ToggleShowHideContainer';
  return ToggleShowHideContainer;
});

jest.mock('../../YourProgress/YourProgressContainer', () => {
  const YourProgressContainer = () => (<div>Mock YourProgressContainer </div>);
  YourProgressContainer.displayName = 'YourProgressContainer';
  return YourProgressContainer;
});

const renderedComponent = ({ isThereTrackedItem, isThereUser }, pathname) => render(
  <BrowserRouter>
    <App isThereTrackedItem={isThereTrackedItem} isThereUser={isThereUser} />
    {pathname && <Redirect to={{ pathname }} />}
  </BrowserRouter>,
);

describe('<App />', () => {
  const props = {
    isThereUser: false,
    isThereTrackedItem: false,
  };
  it('renders  ErrorContainer and LoadingContainer', () => {
    renderedComponent(props);

    expect(screen.getByText(/Mock ErrorContainer/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock LoadingContainer/i)).toBeInTheDocument();
  });

  describe('If there is no any user', () => {
    const props = {
      isThereUser: false,
      isThereTrackedItem: false,
    };

    it('renders LogIn when \'/log-in\' is directed', () => {
      renderedComponent(props, '/log-in');

      expect(screen.getByText(/Mock LogIn/i)).toBeInTheDocument();
    });

    it('renders SignUp when \'/sign-up\' is directed', () => {
      renderedComponent(props, '/sign-up');

      expect(screen.getByText(/Mock SignUp/i)).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(renderedComponent(props)).toMatchSnapshot();
    });
  });

  describe('If there is a user', () => {
    describe('If there is no any tracked item', () => {
      const props = {
        isThereUser: true,
        isThereTrackedItem: false,
      };

      it('renders ListTrackedItemsContainer ', () => {
        renderedComponent(props);

        expect(screen.getByText(/Mock ListTrackedItemsContainer/i)).toBeInTheDocument();
      });

      it('renders correctly', () => {
        expect(renderedComponent(props)).toMatchSnapshot();
      });
    });

    describe('If there is a tracked item', () => {
      const props = {
        isThereUser: true,
        isThereTrackedItem: true,
      };

      it('renders ToggleShowHideContainer', () => {
        renderedComponent(props);
        expect(screen.getByText(/Mock ToggleShowHideContainer/i)).toBeInTheDocument();
      });

      it('renders AddCheckContainer when \'/\' is directed', () => {
        renderedComponent(props, '/');

        expect(screen.getByText(/Mock AddCheckContainer/i)).toBeInTheDocument();
      });

      it('renders PieceFormContainer when \'/one-piece-create\' is directed', () => {
        renderedComponent(props, '/one-piece-create');

        expect(screen.getByText(/Mock PieceFormContainer/i)).toBeInTheDocument();
      });

      it('renders YourProgressContainer when \'/your-progress\' is directed', () => {
        renderedComponent(props, '/your-progress');

        expect(screen.getByText(/Mock YourProgressContainer/i)).toBeInTheDocument();
      });

      it('renders ProfileContainer when \'/profile\' is directed', () => {
        renderedComponent(props, '/profile');

        expect(screen.getByText(/Mock ProfileContainer/i)).toBeInTheDocument();
      });

      it('renders ListTakenTimesContainer when \'/list-taken-times\' is directed', () => {
        renderedComponent(props, '/list-taken-times');

        expect(screen.getByText(/Mock ListTakenTimesContainer/i)).toBeInTheDocument();
      });

      it('renders correctly', () => {
        expect(renderedComponent(props)).toMatchSnapshot();
      });
    });
  });
});
