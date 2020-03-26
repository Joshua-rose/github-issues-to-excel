import React from 'react'
import { IssueListQuery } from '../../generated/graphql'




interface Props {
    data: IssueListQuery
}
const className = 'IssueList'

const Issues = ({data}: Props) => {
    return (
        <div className={className}>
            <h3>Issues</h3>
            <ul>
                {data.repository?.issues && data.repository?.issues.nodes?.map((node, i)=>(<li key={i} >{node?.title}</li>))}

            </ul>
        </div>
    )
}

export default Issues
