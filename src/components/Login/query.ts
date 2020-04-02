import gql from 'graphql-tag';

export const HEADER_QUERY = gql`
    query Login {
        viewer {
            login
        }
    }
`;