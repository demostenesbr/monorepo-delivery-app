import React from 'react';
// import {TextInput} from 'react-native';
import { theme } from './App.style';
import {Provider as PaperProvider} from 'react-native-paper';
import { LoginScreen } from './app/screens/login/login.screen';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <LoginScreen />
    </PaperProvider>
  );
};

export default App;
