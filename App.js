import React from 'react';
import { Provider } from './store/Provider';
import Routes from "./routes"

export default function App () {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}
