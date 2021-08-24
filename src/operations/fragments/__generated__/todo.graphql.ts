import * as Types from '../../../__generated__/globalTypes'

export type TodoFragmentFragment = {
  __typename: 'Todo'
  id: string
  text: string
  completed: Types.Maybe<boolean>
  createdAt: string
}
