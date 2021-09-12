  import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  query thoughts($id: ID!) {
    thoughts(_id: $id) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;