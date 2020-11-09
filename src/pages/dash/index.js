import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { View, Platform, BackHandler, Alert} from 'react-native';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import { translate } from '../../locales/index';
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import {
    Container,
    RoundTop,
    InputName,
    Tips,
    TipsButton,
    TextSelectIdioma,
    ButtonChangeIdioma,
    TextBemVindo,
    RoundBottom,
    InsideRoundTop,
    InsideRoundTopTwo,
    ModalClose,
    TxtSelectIdiom,
    ChangetoPt,
    ChangetoUs,
    ButtonToHospital,
    SignOutButton,
    TextSignOutButton
} from './styles';
import { useAuth } from '../../context/auth';

const dash = () => {

    const navigation = useNavigation();
    const { signOut} = useAuth();
    
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const Loggout = () => {
        Alert.alert(translate('atettion'), translate('backexit'), [
          {
            text: translate('no'),
            onPress: () => null,
            style: 'cancel',
          },
          { text: translate('yes'), onPress: () => {
          signOut() }},
        ]);
        return true;
      };

      useEffect(() => {
        const back = () => { BackHandler.exitApp() };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', back);
        return () => backHandler.remove();
      }, []);

    return <Container>
        <View style={{width: windowWidth, height: windowHeight*0.05, backgroundColor: '#8C89FA', zIndex: 10}}>
        <SignOutButton
         style={{ alignSelf: "flex-end", margin:windowHeight*0.03}}
         onPress={Loggout}
         >
        <TextSignOutButton>{translate('exit')}</TextSignOutButton>
        </SignOutButton>
        </View>
        <RoundTop>
            <InsideRoundTop>
                <ButtonToHospital
                    style={{ marginRight: 24, marginTop: 18, justifyContent: "center", alignItems: "center" }}
                    onPress={()=>{
                        const scheme = Platform.select({ ios: 'maps:?q=', android: 'geo:?q=' });
                        const latLng = `${0},${0}`;
                        const label = translate('search');
                        const url = Platform.select({
                          ios: `${scheme}${label}@${latLng}`,
                          android: `${scheme}${latLng}(${label})`
                        });
                       
                        Linking.openURL(url)
                
                        }}

                >
                    <TextSelectIdioma style={{ alignSelf: "center", justifyContent:"center", margin: 4 }}>{translate('search')}</TextSelectIdioma>
                </ButtonToHospital>

                <ButtonChangeIdioma
                    style={{ marginRight: 24, marginTop: 18, justifyContent: "center", alignItems: "center" }}
                    onPress={()=>{
                        navigation.navigate('Ask', {})}}

         >
                    <TextSelectIdioma style={{ alignSelf: "center", margin: 8 }}>{translate('replay')}</TextSelectIdioma>
                </ButtonChangeIdioma>
            </InsideRoundTop>
            <InsideRoundTopTwo>
                <LottieView
                    autoPlay={false}
                    loop={true}
                    style={{
                        width: 450,
                        height: 450,
                        position: "absolute",
                        bottom: -62,
                        right: -65,
                        zIndex: -1,
                    }}
                    source={require('../../assets/lottie/patient-success.json')}
                />
            </InsideRoundTopTwo>
        </RoundTop>
        <RoundBottom>
            
            <Tips>
                <TipsButton/>
                <TextSelectIdioma>{translate('start')}</TextSelectIdioma>
            </Tips>
        </RoundBottom>

    </Container >;
}

export default dash;