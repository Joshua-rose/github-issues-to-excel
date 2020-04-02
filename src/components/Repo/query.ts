import gql from 'graphql-tag';

export const REPO_QUERY = gql`
    query RepoList($login: String!) {
        user(login: $login) {
            repositories(first: 100) {
                nodes {
                    name
                    owner {
                        login
                    }
                }
            }
        }
    }
`;
