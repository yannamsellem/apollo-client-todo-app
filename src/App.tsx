import { ApolloProvider } from '@apollo/client'
import client from './apollo/client'
import AddTodoForm from './Components/AddTodoForm'
import Header from './Components/Header'
import Todos from './Components/Todos'

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <AddTodoForm />
      <Todos />
    </ApolloProvider>
  )
}

export default App
