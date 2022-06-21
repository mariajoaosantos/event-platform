import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl4ok3p8a08b501xn5e1d8l9u/master',
  cache: new InMemoryCache()
})