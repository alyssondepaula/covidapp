import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/Routes';
import { AuthProvider } from './src/context/auth';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Constants from 'expo-constants';



function App() {

  return <>
    <StatusBar style="light"  backgroundColor='#8C89FA' animated={true}/>
    <NavigationContainer>
      {/* View adicionada, adionar paddingtop para não ficar atrás das status bar */}
      <View style={{flex:1, paddingTop: Constants.statusBarHeight}}>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    </View>
    </NavigationContainer>
  </>

}
export default App;