import * as Types from '../../../__generated__/globalTypes'

export type UpdateTodoMutationVariables = Types.Exact<{
  input: Types.UpdateTodoInput
}>

export type UpdateTodoMutation = {
  updateTodo: Types.Maybe<{
    __typename: 'UpdateTodoPayload'
    todo: Types.Maybe<{
      __typename: 'Todo'
      id: string
      text: string
      completed: Types.Maybe<boolean>
      createdAt: string
    }>
  }>
}
