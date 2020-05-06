import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Auth from '../components/Auth';
import logos from '../assets/logos.svg';

const Login = ({ history, location, match }: RouteComponentProps) => (
  <div className="not_logged_in">
    <div className="modal">
      <div className="chevron">
        <img src={logos} alt="Github to Excel" />
      </div>
      <p>You must login and authoize the app to see your repos/issues</p>
      <div className="button">
        <Auth
          history={history}
          location={location}
          match={match}

        />
      </div>
    </div>
  </div>
);

export default Login;
