import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { View, Platform, BackHandler, Alert, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import { translate } from '../../locales/index';
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import Modal from 'react-native-modalbox'
import { Ionicons } from '@expo/vector-icons';
import appTips from '../../assets/tips/appTips.json';
import * as Localization from 'expo-localization';

{/**Pt Images */ }
import pt from '../../assets/img/washHands/pt.jpeg';
import ptalcool from '../../assets/img/Alcool/ptalcool.jpeg';


{/**In Images */ }
import ing from '../../assets/img/washHands/ing.jpeg';



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
    TextSignOutButton,
    RoundCenter,
    ViewTips,
    TextTips
} from './styles';



import { useAuth } from '../../context/auth';


const dash = () => {

    const navigation = useNavigation();
    const { signOut, updateLanguage, languageNow} = useAuth();
    
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [openBox, setOpenBox] = useState(false);
    const [imageFile, setImageFile] = useState();

    const dataImages = [
        {
          key: String(Math.random()),
          name: translate('washhands'),
          imgpt: pt,
          imging: ing,
        },
        {
            key: String(Math.random()),
            name: translate('alcoolhands'),
            imgpt: ptalcool,
            imging: ptalcool,
          },
          {
            key: String(Math.random()),
            name: translate('washhands'),
            imgpt: pt,
            imging: ing,
          },
          {
              key: String(Math.random()),
              name: translate('alcoolhands'),
              imgpt: ptalcool,
              imging: ptalcool,
            }
      ];

    const ModalTip = (item) => {

        setOpenBox(true)
        setImageFile(Localization.locale == 'pt-BR' ? item.imgpt : item.imging)
        
    }

    const BoxToggle = () => {
        setOpenBox(openBox ? false : true)
    }

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
        <Modal
        useNativeDriver={true}
        swipeToClose={false}
        backdropPressToClose={false}
        backButtonClose={false}
            style={{
                backgroundColor: '#fff',
                width: windowWidth * 0.90,
                height: windowHeight * 0.45,
                borderRadius: 24,
                
            }}
            position='center'
            isOpen={openBox}
        >
           <View style={{ flex: 1 }}>
               <ModalClose>
                    <Ionicons onPress={BoxToggle} 
                        name="md-close"
                        size={30}
                        color="gray" />
                </ModalClose>
                <ViewTips>
                    <View style={{flex:1, alignItems: "center", justifyContent:"center", padding: 8}}>
                    <TxtSelectIdiom>{translate('washhands')}</TxtSelectIdiom>
                <Image
        style={{ flex:1, resizeMode: "contain"}}
        source={imageFile}
      />
      </View>
                </ViewTips>
            </View> 
        </Modal> 

        <SignOutButton
         style={{ alignSelf: "flex-end", margin:windowHeight*0.03}}
         onPress={Loggout}
         >
        <TextSignOutButton>{translate('exit')}</TextSignOutButton>
        </SignOutButton>
        
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
                    autoPlay={true}
                    loop={false}
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
        <RoundCenter>
        <TextBemVindo>{translate('continuetip')}</TextBemVindo>
        </RoundCenter>
        <RoundBottom> 
        {dataImages.map((item) => (
            <Tips key={item.key} onPress={()=>ModalTip(item)}>
            <TextTips>{item.name}</TextTips>
          </Tips>
          ))}

        </RoundBottom>

    </Container >;
}

export default dash;