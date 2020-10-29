import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { View, Platform } from 'react-native';
import { set } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modalbox'
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { translate } from '../../locales/index';
import { useTranslation } from 'react-i18next'
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import notifications from '../../assets/notifications.json';







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
    ChangetoUs
} from './styles';

const dash = ({ navigation }) => {


    navigation.reset({
        index: 0,
        routes: [{name: 'Dash'}],
      });


    const { t, i18n } = useTranslation('language');

    const languages = useMemo(() => {
        return [
            { name: t('portuguese'), id: 'pt-BR' },
            { name: t('english'), id: 'en-US' },
        ];
    }, [i18n.language]);

    const onPressLanguage = useCallback(language => {
        i18n.changeLanguage(language);
    }, []);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [name, setName] = useState(null)
    const [fontText, setFontText] = useState(24)
    const [openBox, setOpenBox] = useState(false)

    function openBoxModal() {
        setOpenBox(!openBox)
    }

    function changeFont(tamanho) {
        fontText == 24 ? setFontText(0) : setFontText(24)
    }


    // Prepare the notification channel
Notifications.setNotificationChannelAsync('new-emails', {
    name: 'E-mail notifications',
    importance: Notifications.AndroidImportance.HIGH,
    sound: 'email-sound.wav', // <- for Android 8.0+, see channelId property below
  });
  
  // Eg. schedule the notification
  Notifications.scheduleNotificationAsync({
  content: {
    title: () => { 
       const number = Math.floor(Math.random() * 10 + 1)
       notifications.notifications.map(ntf=>{
           if(ntf.id == number) { return ntf.notification }
       })
       return 'Error'
    }
  },
  trigger: {
    seconds: 120,
    repeats: true
  },
});

async function getNotification() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status === 'granted') {
        console.log('Notification permissions granted.')
    } else {
      Alert.alert(translate('permission'))
    }
  }

  useEffect(() => {
    async function init(){
        getNotification()
    }
             init()
  });


    return <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <RoundTop>
            <InsideRoundTop>
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