import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

console.log(
  `process.env.REACT_APP_GRAPHQL_URL`,
  process.env.REACT_APP_GRAPHQL_URL
);

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL || 'http://localhost:1234/graphql',
  cache: new InMemoryCache(),
});

console.log(`apolloClient`, apolloClient);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
