import { useCreateTodo } from '../operations/mutation/createTodo'

export default function AddTodoForm() {
  const [create, { loading }] = useCreateTodo()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (loading) return
    const { text: input } = e.currentTarget

    if (!input.value) return

    await create({ text: input.value })
    input.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Todo</h2>
      <input name="text" />
    </form>
  )
}
