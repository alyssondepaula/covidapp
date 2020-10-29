import React, { useState, useEffect } from 'react';
import { View, ScrollView, BackHandler, TouchableOpacity, StyleSheet, StatusBar, Text, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import asks from '../../assets/asks.json';
import { translate } from '../../locales/index';
import AsyncStorage from '@react-native-async-storage/async-storage';



import {
    Container,
    Header,
    NameView,
    TextAsk,
    Bodyask,
    AskerView,
    ButtonAvaliar,
    TextAvaliar,
    TextAsker
} from './styles';



const ask = ({ route, navigation }) => {



   const [soma, setSoma] = useState(0)
    const [toHospital, setToHospital] = useState(false)
    const [currentData, setCurrentData] = useState(asks)

    const { nameUser } = route.params;

    useEffect(() => {

        async function init(){

            const value = await AsyncStorage.getItem('@askers')
            if(value !== null) {
                setCurrentData(JSON.parse(value))
            }

            currentData.asker.map(ask =>{

                if(ask.active==true){ soma+ask.value}

            })
        }

        init()
      },[]);
      

    useEffect(() => {

        if(soma<0) setSoma(0)
        if(soma>10) setSoma(10)
        if(soma>5) setToHospital(true) 
        if(soma<5) setToHospital(false)

        async function store(){
        
            try {
                soma > 0 ? await AsyncStorage.setItem('@sum', 'true')
                : await AsyncStorage.setItem('@sum', 'false')
                    
                const jsonValue = JSON.stringify(currentData)
                await AsyncStorage.setItem('@askers', jsonValue)

                const nameStore = nameUser.toString()
                await AsyncStorage.setItem('@nameuser', nameStore)
              } catch (e) {
                // saving error
              }

        }
        store();

      },[soma]);

      useEffect(() => {
          console.log(toHospital.toString())
      },[toHospital]);

      useEffect(() => {
        const backAction = () => {
          Alert.alert(translate('atettion'), translate('backexit'), [
            {
              text: translate('no'),
              onPress: () => null,
              style: 'cancel',
            },
            { text: translate('yes'), onPress: () => BackHandler.exitApp() },
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
        return () => backHandler.remove();
      }, []);
    
    return <Container>
        <Header>
            <Ionicons name="ios-arrow-back" size={36} color="#8C89FA" onPress={()=>     navigation.goBack() }/>
        </Header>

        <NameView>
            {nameUser != null ? txt(nameUser) : txt('')}
        </NameView>

        <View style={{ flex: 1, marginBottom: 96, marginTop: 48 }}>
            <ScrollView>

                {currentData.asker.map(item => {

                     

                   return ( <AskerView background={    
                        item.active == true 
                        ? '#8C89FA'
                        : '#fff'  
                }
                    
                    onPress={() =>{
                       item.active=!item.active
                       item.active == true ? setSoma(soma+item.value) : setSoma(soma-item.value)
                       
                   }}>
                       <TextAsker background={
                           item.active == true
                           ? '#fff'
                           :  '#8C89FA'
                       }>{translate(item.ask)}</TextAsker>
                       </ AskerView>
                       )        


                })
                }



            </ScrollView>
        </View>



        <ButtonAvaliar onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Result', {
                        somaUser: soma,
                    });
                }} >
            <TextAvaliar>Avaliar</TextAvaliar>
        </ButtonAvaliar>
    </Container>
}

const txt = (name) => {

    return <TextAsk>{name !== ''
        ? name + ', vamos '
        : 'Vamos '}
     fazer algumas perguntas básicas. Por favor marque as opções que você confirma ter feito!</TextAsk>
}

export default ask;