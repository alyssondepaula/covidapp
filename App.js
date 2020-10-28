import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/Routes';

function App() {
  return <>
    <StatusBar style="dark-content" />
    <Routes />
  </>

}
export default App;