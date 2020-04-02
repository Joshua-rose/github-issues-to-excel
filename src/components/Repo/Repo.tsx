import React from 'react';
import { RepoListQuery } from '../../generated/graphql';
import { RepoDetails } from './types';


export interface OwnProps {
    setRepoDetails: (repoDetails: RepoDetails) => void
}

interface Props extends OwnProps{
    data: RepoListQuery
}

const Repo = ({ data, setRepoDetails }: Props) => (
  <div className="Repos">
    <h3>Repos</h3>
    <ul>
      {data.user?.repositories.nodes && data.user.repositories.nodes.map((repository, i) => (
        <li
          key={i}
        >
          <button
            type="button"
            onClick={() => {
              setRepoDetails({ owner: repository?.owner.login || '', repo: repository?.name || '' });
            }}
          >
            {repository?.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Repo;
