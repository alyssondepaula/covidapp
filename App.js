import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Routes from './src/Routes';
import { AuthProvider } from './src/context/auth';
import { NavigationContainer } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


function App() {

  useEffect(()=>{

    const init =  async () =>{

     const { isAvailable} = await Updates.checkForUpdateAsync();
     if(isAvailable){
       await Updates.fetchUpdateAsync();
       await Updates.reloadAsync();
       
     }

      

    }

    init();

  },[])

  return <>
    <StatusBar style="light"  backgroundColor='#8C89FA' animated={true}/>
    <NavigationContainer>
      {/* View adicionada, adionar paddingtop para não ficar atrás das status bar */}
      <KeyboardAvoidingView 
      behavior={Platform.OS == 'ios' ? 'padding' : null}
      style={{flex:1, paddingTop: Constants.statusBarHeight}}
      >
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    </KeyboardAvoidingView>
    </NavigationContainer>
  </>

}
export default App;