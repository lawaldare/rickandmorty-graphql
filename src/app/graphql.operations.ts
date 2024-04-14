import { gql } from 'apollo-angular';

export const GET_CHARACTERS = gql`
  query GetAllCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        status
        species
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetACharacter($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }
      episode {
        name
      }
      image
    }
  }
`;
