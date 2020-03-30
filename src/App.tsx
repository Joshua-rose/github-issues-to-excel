import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Issues from './components/Issues'
import RepoList, { RepoDetails } from './components/Repo'
import Header from './components/Header'
import Login from './components/Login'


const AppContext = React.createContext({
  setAppError: (error:any)=>{},
  setToken: (tokenString: string) => { },
  token: '',
  setLogin: (loginString: string) => { },
});
function App() {
  const initialRepoDetails: RepoDetails = { owner: '', repo: '' }
  const [repoDetails, setRepoDetails] = useState(initialRepoDetails)
  const [appError, setAppError] = useState({})
  const [token, setToken] = useState('')
  const [login, setLogin] = useState('')
  
  return (
    <div className="App">
      <AppContext.Provider value={{
        setAppError,
        setToken,
        token,
        setLogin,
      }}>

      <Header></Header>
      {token !== ''? (
        <Login>
          <RepoList login={login} setRepoDetails={setRepoDetails}></RepoList>
          {repoDetails.owner && repoDetails.repo && (
            <Issues {...repoDetails}></Issues>
            
            )}

        </Login>
      ):
      (
        <div className="not_logged_in"></div>
        )
      }
      </AppContext.Provider>
    </div>
  );
}

export default App;
export {AppContext}