import gql from 'graphql-tag';

export const QUERY_ISSUES = gql`
    {
  viewer {
    login
  }
  repository(name: "JobApplications", owner: "jrgiant") {
    issues(first: 100, orderBy: {field: CREATED_AT, direction: ASC}) {
      nodes {
        id
        number
        updatedAt
        url
        title
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
`