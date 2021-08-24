import {} from '@apollo/client'
import { useUpdateTodo } from '../operations/mutation/updateTodo'
import { useGetTodosQuery } from '../operations/queries/todos'
import { Todo } from '../__generated__/globalTypes'

export default function Todos() {
  const { todos, error, loading, fetchMore } = useGetTodosQuery({ first: 10 })
  const update = useUpdateTodo()

  if (loading) return <span>Loading</span>
  if (error) return <span>{error?.graphQLErrors.map(e => e.message)}</span>

  function handleTodoClick(todo: Todo): React.MouseEventHandler<HTMLLIElement> {
    return e => {
      e.stopPropagation()

      console.log(todo)

      update({
        id: todo.id,
        text: todo.text,
        completed: !todo.completed,
      })
    }
  }

  return (
    <ul onClick={() => fetchMore()}>
      {todos?.map(todo => {
        return (
          <li key={todo.id} onClick={handleTodoClick(todo)}>
            {todo.text} {todo.completed && <span>✅</span>}
          </li>
        )
      })}
    </ul>
  )
}
