import * as Types from '../../../__generated__/globalTypes'

export type CreateTodoMutationVariables = Types.Exact<{
  input: Types.CreateTodoInput
}>

export type CreateTodoMutation = {
  createTodo: Types.Maybe<{
    __typename: 'CreateTodoPayload'
    todo: Types.Maybe<{
      __typename: 'Todo'
      id: string
      text: string
      completed: Types.Maybe<boolean>
      createdAt: string
    }>
  }>
}
