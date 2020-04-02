import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Issues from './components/Issues';
import RepoList from './components/Repo';
import { RepoDetails } from './components/Repo/types';
import AppContext from './utils/AppContext';
import Auth from './components/Auth';
import Login from './components/Login';
import logos from './assets/logos.svg';
import CurvedArrow from './assets/CurvedArrow.png'


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
        {token !== '' ? (
          <Login>
            <RepoList login={login} setRepoDetails={setRepoDetails} />
            {repoDetails.owner && repoDetails.repo ? (
              <Issues repo={repo} owner={owner} />

            )
              : (
                <div className="IssueList repo_not_selected">
                  <img src={CurvedArrow} alt="arrow"/>
                  <p>
                    You must select a repo

                  </p>
                </div>
              )}

          </Login>
        )
          : (
            <div className="not_logged_in">
              <div className="modal">
                <div className="chevron">
                  <img src={logos} alt="Github to Excel" />
                </div>
                <p>You must login and authoize the app to see your repos/issues</p>
                <div className="button">
                  <Auth />
                </div>
              </div>
            </div>
          )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
export { AppContext };
