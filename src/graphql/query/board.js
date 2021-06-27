import { gql } from '@apollo/client';

export const GET_ALL_BOARDS = gql`
  query getBoards($input: GetBoardInput) {
    getBoards(input: $input) {
      id
      title
      isVisible
      cards {
        id
        title
        cardItems {
          id
          title
          description
        }
      }
    }
  }
`;

export const GET_ONE_USER = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`;
