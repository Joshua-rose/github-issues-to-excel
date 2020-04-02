import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Issues from './components/Issues';
import RepoList from './components/Repo';
import { RepoDetails } from './components/Repo/types';
import AppContext from './utils/AppContext';
import Header from './components/Header';
import Login from './components/Login';


function App() {
  const initialRepoDetails: RepoDetails = { owner: '', repo: '' };
  const [repoDetails, setRepoDetails] = useState(initialRepoDetails);
  const [appError, setAppError] = useState({});
  const [token, setToken] = useState('');
  const [login, setLogin] = useState('');
  const { owner, repo } = repoDetails;
  return (
    <div className="App">
      <AppContext.Provider value={{
        setAppError,
        setToken,
        token,
        setLogin,
      }}
      >

        <Header />
        {token !== '' ? (
          <Login>
            <RepoList login={login} setRepoDetails={setRepoDetails} />
            {repoDetails.owner && repoDetails.repo && (
            <Issues repo={repo} owner={owner} />

            )}

          </Login>
        )
          : (
            <div className="not_logged_in" />
          )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
export { AppContext };
