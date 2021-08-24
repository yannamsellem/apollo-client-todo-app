import { gql, useQuery } from '@apollo/client'
import { TODO_FRAGMENT } from '../fragments/todo'
import {
  GetTodosQuery,
  GetTodosQueryVariables,
} from './__generated__/todos.graphql'

export const GET_TODOS = gql`
  ${TODO_FRAGMENT}
  query GetTodos($first: Int!, $after: String) {
    todos(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          ...TodoFragment
        }
      }
    }
  }
`

export function useGetTodosQuery(variables: GetTodosQueryVariables) {
  const {
    data,
    loading,
    error,
    fetchMore: more,
    ...rest
  } = useQuery<GetTodosQuery, GetTodosQueryVariables>(GET_TODOS, { variables })

  function fetchMore() {
    if (!loading) return null
    if (!data?.todos?.pageInfo.hasNextPage) return null

    const after = data?.todos?.pageInfo.endCursor
    return more({ variables: { ...variables, after } })
  }

  const todos = data?.todos?.edges?.map(e => e.node)

  return { todos, loading, error, fetchMore, ...rest }
}
