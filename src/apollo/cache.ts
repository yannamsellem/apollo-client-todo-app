import { InMemoryCache } from '@apollo/client'
import { relayStylePagination } from '@apollo/client/utilities'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: relayStylePagination(),
      },
    },
  },
})

export default cache
