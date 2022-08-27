import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../store';
import AppNavigator from './appNavigator';
import 'react-native-gesture-handler';

const store = configureStore();
let persistor = persistStore(store);
const exceptionhandler = (error, isFatal) => {
  error && console.log(error);
};
setJSExceptionHandler(exceptionhandler, true);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
