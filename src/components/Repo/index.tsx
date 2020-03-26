import React, { useState, useCallback} from 'react'
import { useRepoListQuery } from '../../generated/graphql'
import Repo, { OwnProps} from './Repo'

export interface RepoDetails {
    owner: string;
    repo: string;
}

interface Props extends OwnProps{
    login: String
}

const RepoListContainer = ({ login, setRepoDetails }: Props) => {
    
    const handlerRepoDetils = useCallback(
        ({owner, repo}) => {
            setRepoDetails({owner, repo})
        },[] )
    const { data, error, loading } = useRepoListQuery({
        variables: {
            login: String(login)
        }
    });
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }
    return <Repo data={data} setRepoDetails={handlerRepoDetils}/>
}

export default RepoListContainer
