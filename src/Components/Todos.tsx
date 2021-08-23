import {} from '@apollo/client'
import { useGetTodos } from '../operations/queries/todos'

export default function Todos() {
  const { data, error, loading, fetchMore } = useGetTodos({ first: 10 })

  if (loading) return <span>Loading</span>
  if (error) return <span>{error?.graphQLErrors.map(e => e.message)}</span>

  const todos = data?.todos?.edges?.map(e => e.node)

  return (
    <ul onClick={() => fetchMore()}>
      {todos?.map(todo => {
        return (
          <li key={todo.id}>
            {todo.text} {todo.completed && <span>✅</span>}
          </li>
        )
      })}
    </ul>
  )
}
