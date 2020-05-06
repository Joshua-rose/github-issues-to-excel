import React from 'react';
import XLSX from 'xlsx';
import { IssueListQuery } from '../../generated/graphql';


interface Props {
    data: IssueListQuery,
    repo: string,
}
const className = 'IssueList';

const Issues = ({ data, repo }: Props) => {
  const createSheet = () => {
    const wb = XLSX.utils.book_new();
    const sheet = XLSX.utils.table_to_sheet(document.getElementById('data_table'));
    XLSX.utils.book_append_sheet(wb, sheet, repo);
    XLSX.writeFile(wb, `${repo} Issues.xlsx`);
  };
  return (
    <div className={className}>
      <h3>Issues</h3>
      {
                data.repository?.issues ? (
                  <div>
                    <table id="data_table">
                      <thead>
                        <tr>
                          <th>Issue Title</th>
                          <th>Labels</th>
                          <th>Date Opened</th>
                          <th>Date Updated</th>
                          <th>Id</th>
                          <th>Closed</th>
                          <th>url</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                                data.repository.issues.nodes?.map((issue, i) => (
                                  <tr key={i} className={i % 2 === 0 ? '' : 'odd'}>
                                    {[
                                            issue?.title,
                                            issue?.labels?.nodes?.map((label) => label?.name).join(';'),
                                            issue?.createdAt,
                                            issue?.updatedAt,
                                            issue?.number,
                                            issue?.closed ? 'Closed' : '',
                                            issue?.url,
                                    ].map((value, j) => (<td key={`row${i}cell${j}`}>{value}</td>))}
                                  </tr>
                                ))
                            }
                      </tbody>
                    </table>
                    <button type="button" className="createSheet" onClick={createSheet}>Export to Excel</button>
                  </div>
                ) : (
                  <div className="no_issues">No Issues found</div>
                    )
            }
    </div>
  );
};

export default Issues;
