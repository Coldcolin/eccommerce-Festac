import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/ContextProvider.jsx';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { store, persistor } from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ContextProvider>
      <App/>
    </ContextProvider>
    </PersistGate>
  </Provider>
)
