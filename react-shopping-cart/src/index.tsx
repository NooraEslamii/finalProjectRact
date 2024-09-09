import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a QueryClient instance
const client = new QueryClient();

// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Render the application
root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
