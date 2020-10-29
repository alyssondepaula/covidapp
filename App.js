import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, {useEffect, useState } from 'react';
import { NotLog, Log} from './src/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

function App() {

  const[auth, setAuth] = useState(false)

  useEffect(() => {

    async function init(){

        const value = await AsyncStorage.getItem('@sum')
        if(value !== 'false') {
                    setAuth(true)
        }
    }

    init()
  });

  useEffect(() => {
    console.log(auth.toString())
  },[auth]);




  return <>
    <StatusBar style="dark-content" />
    {auth === true ? <Log /> : < NotLog/> }
  </>

}
export default App;