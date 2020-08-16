import React, { useEffect } from 'react';
import { Provider } from './store/Provider';
import Routes from "./routes"
import * as Updates from 'expo-updates';


export default function App () {
  useEffect(() => {
    async function loadUpdates () {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          // ... notify user of update ...
          await Updates.reloadAsync();
        }
      } catch (e) {
        // handle or log error
      }
    }
    loadUpdates()
  }, [])
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}
