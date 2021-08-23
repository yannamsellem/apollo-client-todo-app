import { ApolloProvider } from '@apollo/client'
import client from './apollo/client'
import Todos from './Components/Todos'

function App() {
  return (
    <ApolloProvider client={client}>
      <Todos />
    </ApolloProvider>
  )
}

export default App
