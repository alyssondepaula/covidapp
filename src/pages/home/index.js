import React, { useState, useCallback, useMemo } from 'react';
import { View, Platform, BackHandler } from 'react-native';
import { set } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modalbox'
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { translate } from '../../locales/index';
import { useTranslation } from 'react-i18next'





import {
    Container,
    RoundTop,
    InputName,
    ButtonComecar,
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

const home = ({ navigation }) => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [name, setName] = useState(null)
    const [fontText, setFontText] = useState(24)
    const [openBox, setOpenBox] = useState(false)

    function openBoxModal() {
        setOpenBox(!openBox)
    }

    const changeFont = () => {
         setFontText(0)
    }
    const endChangeFont = () => {
        setFontText(24)
   }

    return <Container>
   {  /*   <Modal
            style={{
                backgroundColor: '#fff',
                width: windowWidth * 0.7,
                height: windowHeight * 0.45,
                borderRadius: 24
            }}
            position='center'
            isOpen={openBox}
        >
           <View style={{ flex: 1 }}>
               <ModalClose>
                    <Ionicons onPress={openBoxModal}
                        name="md-close"
                        size={30}
                        color="gray" />
                </ModalClose>
                <TxtSelectIdiom>{translate('changeIdiom')}</TxtSelectIdiom>
                <ChangetoPt onPress={() => onPressLanguage('portuguese')}>
                    <TxtSelectIdiom>
                        {translate('languagePortuguese')}
                    </TxtSelectIdiom>
                </ChangetoPt>
                <ChangetoUs onPress={() => onPressLanguage('portuguese')}>
                    <TxtSelectIdiom>
                        {translate('languageEnglish')}
                    </TxtSelectIdiom>
                </ChangetoUs>
            </View> 
        </Modal> 
          */ }
        <RoundTop>
            <InsideRoundTop>
        <TextSelectIdioma style={{ alignSelf: "flex-start", margin: 36 }}>{translate('welcomename')} {name}</TextSelectIdioma>

                          {/*  <ButtonChangeIdioma
                    style={{ marginRight: 24, marginTop: 18, justifyContent: "center", alignItems: "center" }}
                    onPress={openBoxModal}

                >
                    <TextSelectIdioma style={{ alignSelf: "center", margin: 8 }}>{translate('changeIdiom')}</TextSelectIdioma>
                </ButtonChangeIdioma>*/}
           </InsideRoundTop> 
            <InsideRoundTopTwo>
                <LottieView
                    autoPlay={true}
                    loop={true}
                    style={{
                        width: 450,
                        height: 450,
                        position: "absolute",
                        bottom: -52,
                        right: -65,
                        zIndex: -1,
                    }}
                    source={require('../../assets/lottie/patient-success.json')}
                />
            </InsideRoundTopTwo>
        </RoundTop>
        <RoundBottom>
            <TextBemVindo
                style={{ fontSize: fontText }}>{translate('welcome')}</TextBemVindo>
            <InputName
                onChangeText={text => setName(text)}
                onFocus={changeFont}
                onSubmitEditing={changeFont}
                onEndEditing={endChangeFont}
            ></InputName>
            <ButtonComecar
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Ask', {
                        nameUser: name,
                    });
                }} >
                <TextSelectIdioma>{translate('start')}</TextSelectIdioma>
            </ButtonComecar>
        </RoundBottom>
    </Container >;
}

export default home;