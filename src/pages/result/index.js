import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, Platform, BackHandler } from 'react-native';
import { translate } from '../../locales/index';
import * as Permissions from 'expo-permissions';
import * as Linking from 'expo-linking';


import { Container,
    ButtonDash,
    ButtontoHospital,
    TextResultButton,
    TextResultAlert } from './styles';

const result = ({ route, navigation }) => {

 const { somaUser } = route.params;
 const [percentageNumber, setPercentageNumber] = useState(0)
 const [lat, setLat] = useState(null)
 const [log, setLog] = useState(null)


 useEffect(() => {
    async function percentage(){
        setPercentageNumber(somaUser)
        console.log(somaUser)
    }
             percentage()
             console.log(percentageNumber+' %')
  },[]);

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

  


  async function getLocationAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    } else {
      Alert.alert(translate('permission'))
    }
  }


  return <Container>

    <TextResultAlert>{somaUser<5 ? translate('resulteasy') : translate('resulthard')}</TextResultAlert>

     { somaUser > 5 ? <ButtontoHospital style={{marginVertical: 8}}>
         <TextResultButton

onPress={()=>{
    const scheme = Platform.select({ ios: 'maps:?q=', android: 'geo:?q=' });
    const latLng = `${0},${0}`;
    const label = translate('search');
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });
    Linking.openURL(url);
             
             }}>{translate('near')
             
             
             }</TextResultButton>
     </ButtontoHospital> : null}
      <ButtonDash  style={{marginVertical: 8}} 
      onPress={()=>{
        navigation.navigate('Dash', {})
}}>
<TextResultButton>{translate('okay')}</TextResultButton>
      </ButtonDash>

  </Container>;
}


export default result;