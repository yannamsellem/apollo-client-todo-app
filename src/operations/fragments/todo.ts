import { gql } from '@apollo/client'

export const TODO_FRAGMENT = gql`
  fragment TodoFragment on Todo {
    id
    text
    completed
    createdAt
  }
`
