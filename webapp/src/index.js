import React, { StrictMode } from "react"
import { render } from "react-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import App from "./App"
import "./index.css"

const client = new ApolloClient({
  uri: "http://localhost:4000",
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
