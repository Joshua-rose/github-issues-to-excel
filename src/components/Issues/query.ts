import gql from 'graphql-tag';

export const QUERY_ISSUES = gql`
  query IssueList($repo: String!, $owner: String!){

    repository(name: $repo, owner: $owner) {
      issues(first: 100, orderBy: {field: CREATED_AT, direction: ASC}) {
        nodes {
          id
          number
          updatedAt
          url
          title
          closed
          labels(first: 100) {
            nodes {
              description
              name
            }
        }
        createdAt
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalCount
    }
  }
}
`;
