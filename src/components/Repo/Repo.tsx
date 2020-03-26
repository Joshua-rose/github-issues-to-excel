import React from 'react'
import { RepoListQuery } from '../../generated/graphql'
import { RepoDetails } from './index'


export interface OwnProps {
    setRepoDetails: (repoDetails: RepoDetails) => void
}

interface Props extends OwnProps{
    data: RepoListQuery
}

const Repo = ({ data, setRepoDetails}: Props) => {
    return (
        <div className="Repos">
            <h3>Repos</h3>
            <ul>
                {data.user?.repositories.nodes && data.user.repositories.nodes.map((repository, i)=>(
                    <li key={i} onClick={()=>{
                        setRepoDetails({owner:repository?.owner.login || '', repo:repository?.name || ''})
                    }}>{repository?.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Repo
