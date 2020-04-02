import React, { useCallback} from 'react'
import { useRepoListQuery } from '../../generated/graphql'
import Repo, { OwnProps} from './Repo'
import Loading from '../Loading'

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
        }, [setRepoDetails] )
    const { data, error, loading } = useRepoListQuery({
        variables: {
            login: String(login)
        }
    });
    if (loading) {
        return <Loading theme="dark" className="Repos">Loading</Loading>
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }
    return <Repo data={data} setRepoDetails={handlerRepoDetils}/>
}

export default RepoListContainer
