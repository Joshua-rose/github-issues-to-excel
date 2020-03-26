import React, {useEffect} from 'react'
import { useIssueListQuery } from '../../generated/graphql'
import Issues from './Issues'
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
    }, [owner, repo])
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }
    return <Issues data={data}/>
}

export default IssuesContainer
