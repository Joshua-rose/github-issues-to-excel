import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import Issues from '../components/Issues';
import RepoList from '../components/Repo';
import { RepoDetails } from '../components/Repo/types';
// import AppContext from '../utils/AppContext';
// import Auth from '../components/Auth';
import Login from '../components/Login';
import settings from '../assets/settings.svg';
import CurvedArrow from '../assets/CurvedArrow.png';
import UpArrow from '../assets/UpArrow.png';
import Auth from '../components/Auth';

interface Props extends RouteComponentProps {
    login: string;
}

const Main = ({
  login, history, match, location,
}: Props) => {
  const initialRepoDetails: RepoDetails = { owner: '', repo: '' };
  const [repoDetails, setRepoDetails] = useState(initialRepoDetails);
  const [showMenu, setShowMenu] = useState(false);
  const { owner, repo } = repoDetails;
  return (
    <Login>
      <div className="settings">
        <input type="image" src={settings} alt="menu" onClick={() => { setShowMenu((prev) => !prev); }} />

        <ul className={showMenu ? 'show' : ''}>
          <li>
            <Auth
              history={history}
              location={location}
              match={match}
            />
          </li>
          <li><Link to="/Acknowledgements" /></li>
        </ul>
      </div>
      <RepoList login={login} setRepoDetails={setRepoDetails} />
      {repoDetails.owner && repoDetails.repo ? (
        <Issues repo={repo} owner={owner} />

      )
        : (
          <div className="IssueList repo_not_selected">
            <img src={CurvedArrow} alt="arrow" className="point_left" />
            <img src={UpArrow} alt="arrow" className="point_up" />
            <p>
              You must select a repo

            </p>
          </div>
        )}

    </Login>
  );
};

export default Main;
