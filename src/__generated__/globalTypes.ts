export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** Date custom scalar type */
  Date: string
}

export type CreateTodoInput = {
  text?: Maybe<Scalars['String']>
}

export type CreateTodoPayload = {
  __typename: 'CreateTodoPayload'
  todo: Maybe<Todo>
}

export type DeleteTodoInput = {
  id: Scalars['ID']
}

export type DeleteTodoPayload = {
  __typename: 'DeleteTodoPayload'
  todo: Maybe<Todo>
}

export type Mutation = {
  __typename: 'Mutation'
  createTodo: Maybe<CreateTodoPayload>
  deleteTodo: Maybe<DeleteTodoPayload>
  updateTodo: Maybe<UpdateTodoPayload>
}

export type MutationcreateTodoArgs = {
  input: CreateTodoInput
}

export type MutationdeleteTodoArgs = {
  input: DeleteTodoInput
}

export type MutationupdateTodoArgs = {
  input: UpdateTodoInput
}

export type Node = {
  id: Scalars['ID']
}

export type PageInfo = {
  __typename: 'PageInfo'
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor: Maybe<Scalars['String']>
  endCursor: Maybe<Scalars['String']>
}

export type Query = {
  __typename: 'Query'
  node: Maybe<Node>
  todo: Maybe<Todo>
  todos: Maybe<TodoConnection>
}

export type QuerynodeArgs = {
  id: Scalars['ID']
}

export type QuerytodoArgs = {
  id: Scalars['ID']
}

export type QuerytodosArgs = {
  first: Scalars['Int']
  after?: Maybe<Scalars['String']>
}

export type Todo = Node & {
  __typename: 'Todo'
  id: Scalars['ID']
  text: Scalars['String']
  completed: Maybe<Scalars['Boolean']>
  createdAt: Scalars['Date']
}

export type TodoConnection = {
  __typename: 'TodoConnection'
  pageInfo: PageInfo
  edges: Maybe<Array<TodoEdge>>
}

export type TodoEdge = {
  __typename: 'TodoEdge'
  cursor: Scalars['String']
  node: Todo
}

export type UpdateTodoInput = {
  id: Scalars['ID']
  text: Scalars['String']
  completed: Scalars['Boolean']
}

export type UpdateTodoPayload = {
  __typename: 'UpdateTodoPayload'
  todo: Maybe<Todo>
}
