import { gql, useQuery } from '@apollo/client'
import * as GetTodosQueryTypes from './__generated__/todos.graphql'

export const GET_TODOS = gql`
  query GetTodos($first: Int!, $after: String) {
    todos(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          text
          completed
          createdAt
        }
      }
    }
  }
`

export function useGetTodos(
  variables: GetTodosQueryTypes.GetTodosQueryVariables,
) {
  const {
    data,
    loading,
    error,
    fetchMore: more,
  } = useQuery<
    GetTodosQueryTypes.GetTodosQuery,
    GetTodosQueryTypes.GetTodosQueryVariables
  >(GET_TODOS, { variables })

  function fetchMore() {
    if (!loading) return null
    if (!data?.todos?.pageInfo.hasNextPage) return null

    const after = data?.todos?.pageInfo.endCursor
    return more({ variables: { ...variables, after } })
  }

  return { data, loading, error, fetchMore }
}
