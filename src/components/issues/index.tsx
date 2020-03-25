import React from 'react'
import { useIssueListQuery } from '../../generated/graphql'
import Issues from './Issues'
interface Props {

}

const IssuesContainer = (props: Props) => {
    const { data, error, loading } = useIssueListQuery();
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }
    return <Issues data={data}/>
}

export default IssuesContainer
