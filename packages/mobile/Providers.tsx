import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache
});

export const Providers: React.FC = ({children}) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
