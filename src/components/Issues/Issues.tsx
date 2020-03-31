import React from 'react'
import { IssueListQuery } from '../../generated/graphql'




interface Props {
    data: IssueListQuery
}
const className = 'IssueList'

const Issues = ({ data }: Props) => {
    return (
        <div className={className}>
            <h3>Issues</h3>
            {
                data.repository?.issues ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Issue Title</th><th>Labels</th><th>Date Opened</th><th>Date Updated</th><th>Id</th><th>url</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.repository.issues.nodes?.map(issue => (
                                    <tr>
                                        {[
                                            issue?.title,
                                            issue?.labels?.nodes?.map(label=>label?.name).join(';'),
                                            issue?.createdAt,
                                            issue?.updatedAt,
                                            issue?.number,
                                            issue?.url,
                                        ].map(value => (<td>{value}</td>))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : (
                        <div className="no_issues">No Issues found</div>
                    )
            }
        </div>
    )
}

export default Issues
