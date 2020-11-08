import React, { useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

    const [logged, setLogged] = useState(false);

    useEffect(()=>{

        async function loadData(){
            try {
               
                const storagedUser = await AsyncStorage.getItem('@RNsignIn');
                if(storagedUser !== null) {
                    setLogged(true)  
                }
              } catch(e) {
                throw new Error('AsyncStorage not Declared.');
              }

        }

        loadData()
    },[])

    async function signIn() {
        setLogged(true)
      }
    
      async function signOut() {
        setLogged(false)
      }
  
  return (
    <AuthContext.Provider value={{signed: logged, signIn, signOut}}>
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