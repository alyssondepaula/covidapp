import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import asks from '../../assets/asks.json';
import { translate } from '../../locales/index';

import {
    Container,
    Header,
    NameView,
    TextAsk,
    AskerView,
    ButtonAvaliar,
    TextAvaliar,
    TextAsker
} from './styles';
import { useAuth } from '../../context/auth';

const ask = ({ route, navigation }) => {

   const [soma, setSoma] = useState(0)
    const [toHospital, setToHospital] = useState(false)
    const [currentData, setCurrentData] = useState(asks)

    const { updateUser } = useAuth();

    const { nameUser } = route.params;

    useEffect(() => {
        setSoma(0)
        console.log('COMEÇOU COM '+ soma)
      },[]);
      

    useEffect(() => {

        if(soma<0) setSoma(0)
        if(soma>10) setSoma(10)
        if(soma>5) setToHospital(true) 
        if(soma<=5) setToHospital(false)


        updateUser(nameUser, soma)

      },[soma]);

      useEffect(() => {
          console.log(toHospital.toString())
      },[toHospital]);

     
    
    return <Container>
        <Header>
            <Ionicons name="ios-arrow-back" size={36} color="#8C89FA" onPress={()=>     navigation.goBack() }/>
        </Header>

        <NameView>
            {nameUser != null ? txt(nameUser) : txt('')}
        </NameView>

        <View style={{ flex: 1, marginBottom: 96, marginTop: 48 }}>
            <ScrollView >
                {
                currentData.asker.map(item => {

                  if(item.id=='11' && currentData.asker[1].active==false){
                      return;
                  }
                  if(item.id=='2' && currentData.asker[1].active==false){
                    return;
                }
                if(item.id=='23' && currentData.asker[1].active==false){
                    return;
                }
                    
                   return ( 
            
                   <AskerView key={item.id} background={    
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