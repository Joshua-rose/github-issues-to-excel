import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { useLoginQuery } from './generated/graphql'
import Issues from './components/Issues'
import RepoList, { RepoDetails } from './components/Repo'

function App() {
  const initialRepoDetails: RepoDetails = { owner: '', repo: '' }
  const [repoDetails, setRepoDetails] = useState(initialRepoDetails)
  const {data, loading, error}  = useLoginQuery();
  if (loading) {
    return <div>Loading... at the top</div>;
  }

  if (error || !data) {
    return <div>ERROR big time</div>;
  }
  return (
    <div className="App">
      {data.viewer.login && (
        <div className="container">

        <RepoList login={data.viewer.login} setRepoDetails={setRepoDetails}></RepoList>
        {repoDetails.owner && repoDetails.repo && (
          <Issues {...repoDetails}></Issues>

        )}
        </div>
      )}
    </div>
  );
}

export default App;
