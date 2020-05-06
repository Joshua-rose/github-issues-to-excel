import React, { useState } from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import './App.scss';
import { RepoDetails } from './components/Repo/types';
import AppContext from './utils/AppContext';
import Login from './pages/Login';
import Main from './pages/Main';
import Acknowledgements from './pages/Acknowledgements';

function App() {
  const [appError, setAppError] = useState({});
  const [token, setToken] = useState('');
  const [login, setLogin] = useState('');

  return (
    <div className="App">
      <AppContext.Provider value={{
        setAppError,
        setToken,
        token,
        setLogin,
      }}
      >
        <Router>
          { token === '' && <Redirect from="/" to="/Login" />}
          <Switch>
            <Route path="/Acknowledgements" component={Acknowledgements} />
            <Route path="/Login" component={Login} />
            <Route
              exact
              path="/"
              render={({ history, match, location }) => (
                <Main
                  login={login}
                  history={history}
                  location={location}
                  match={match}
                />
              )}
            />
          </Switch>
        </Router>

      </AppContext.Provider>

    </div>
  );
}

export default App;
export { AppContext };
