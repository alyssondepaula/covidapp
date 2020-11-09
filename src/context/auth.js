import React, { useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import { Alert } from 'react-native';

const UserData = {
        name: 'null',
        soma: 'null'
}

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

    const [logged, setLogged] = useState(null);
    const [User, setUser] = useState(UserData);

    useEffect(()=>{

        async function loadData(){
            try {
                await SplashScreen.preventAutoHideAsync();
                const storagedUser = await AsyncStorage.getItem('@RNsignIn');
                if(storagedUser !== null) {
                    setLogged(true)  
                    console.log('Entrou')
                }
              } catch(e) {
                throw new Error('AsyncStorage not Declared.');
              }
              await SplashScreen.hideAsync();
        }

        loadData()
        console.log('Carregou tudo')
    },[])

    async function signIn() {

      try {
        const jsonValue =  JSON.stringify(Object.values(User))
        await AsyncStorage.setItem('@RNUser', jsonValue)
        await AsyncStorage.setItem('@RNsignIn', String(true))
      } catch (e) {
        throw new Error('Error storing data.');
      }
        setLogged(true)
        console.log('SignIn')
      }
    
      async function signOut() {

        const keys = ['@RNUser', '@RNsignIn']
  try {
    await AsyncStorage.multiRemove(keys)
  } catch(e) {
    // remove error
  }
        setLogged(false)
      }

     async function updateUser (nameUser, somaUser){
         setUser({name: nameUser, soma:somaUser})
      }    
  
  return (
    <AuthContext.Provider value={{signed: logged, signIn, signOut, updateUser}}>
        {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider.');
    }
    return context;
  }
  
  export {AuthProvider, useAuth};