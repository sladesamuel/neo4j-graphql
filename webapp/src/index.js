import React, { StrictMode } from "react"
import { render } from "react-dom"
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink } from "@apollo/client"
import App from "./App"
import "./index.css"

const queryEndpoint = new HttpLink({
  uri: "http://localhost:4000",
})

const mutationEndpoint = new HttpLink({
  uri: "http://localhost:4001",
})

const link = ApolloLink.split(
  (operation) => {
    const [definition] = operation.query.definitions
    return definition?.operation === "query"
  },
  queryEndpoint,
  mutationEndpoint
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById("root")
)
