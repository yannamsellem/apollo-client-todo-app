import { gql, useMutation } from '@apollo/client'
import { TODO_FRAGMENT } from '../fragments/todo'
import {
  UpdateTodoMutation,
  UpdateTodoMutationVariables,
} from './__generated__/updateTodo.graphql'
import { UpdateTodoInput } from '../../__generated__/globalTypes'

export const UPDATE_TODO = gql`
  ${TODO_FRAGMENT}
  mutation UpdateTodo($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      todo {
        ...TodoFragment
      }
    }
  }
`

export function useUpdateTodo() {
  const [update] = useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(
    UPDATE_TODO,
  )

  function updateTodo(input: UpdateTodoInput) {
    return update({ variables: { input } })
  }

  return updateTodo
}
