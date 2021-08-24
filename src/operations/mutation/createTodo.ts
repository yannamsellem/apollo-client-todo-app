import { gql, useMutation } from '@apollo/client'
import { CreateTodoInput } from '../../__generated__/globalTypes'
import { TODO_FRAGMENT } from '../fragments/todo'
import { cloneDeep } from '@apollo/client/utilities'
import {
  CreateTodoMutation as Mutation,
  CreateTodoMutationVariables as Variables,
} from './__generated__/createTodo.graphql'

export const CREATE_TODO = gql`
  ${TODO_FRAGMENT}

  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      todo {
        ...TodoFragment
      }
    }
  }
`

export function useCreateTodo() {
  const [mutate, { loading }] = useMutation<Mutation, Variables>(CREATE_TODO)

  function createTodo(input: CreateTodoInput) {
    if (loading) return null

    return mutate({
      variables: { input },
      update(cache, { data }) {
        cache.modify({
          fields: {
            todos(existing) {
              if (!data?.createTodo?.todo) return existing

              const { todo } = data?.createTodo

              const next = cloneDeep(existing)

              const node = cache.writeFragment({
                data: todo,
                fragment: TODO_FRAGMENT,
              })

              next.edges.push({
                cursor: todo.id,
                node: node,
              })

              next.pageInfo.endCursor = todo.id

              return next
            },
          },
        })
      },
    })
  }

  return [createTodo, { loading }] as const
}
