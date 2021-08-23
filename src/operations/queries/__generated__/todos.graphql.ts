import * as Types from '../../../__generated__/globalTypes'

export type GetTodosQueryVariables = Types.Exact<{
  first: Types.Scalars['Int']
  after?: Types.Maybe<Types.Scalars['String']>
}>

export type GetTodosQuery = {
  todos: Types.Maybe<{
    __typename: 'TodoConnection'
    pageInfo: {
      __typename: 'PageInfo'
      endCursor: Types.Maybe<string>
      hasNextPage: boolean
    }
    edges: Types.Maybe<
      Array<{
        __typename: 'TodoEdge'
        cursor: string
        node: {
          __typename: 'Todo'
          id: string
          text: string
          completed: Types.Maybe<boolean>
          createdAt: string
        }
      }>
    >
  }>
}
