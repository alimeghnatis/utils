import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import getClient from 'getClient'

export default ({children, endpoint}) =>
  <ApolloProvider
    client={getClient(endpoint)}
  >
    { children }
  </ApolloProvider>

