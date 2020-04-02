import React, {useEffect} from 'react'
import { useIssueListQuery } from '../../generated/graphql'
import Issues from './Issues'
import Loading from '../Loading'
interface Props {
    owner: String;
    repo: String;
}

const IssuesContainer = ({owner, repo}: Props) => {
    const { data, error, loading, refetch } = useIssueListQuery({
        variables: {
            owner: String(owner), repo: String(repo)
        }
    });
    useEffect(()=>{
        refetch()
    }, [owner, repo, refetch])
    if (loading) {
        return <Loading className="IssueList" theme="light" />
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }
    return <Issues data={data} repo={repo as string}/>
}

export default IssuesContainer
