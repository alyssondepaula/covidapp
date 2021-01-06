import React, { useState, useCallback, useMemo } from 'react';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import { translate } from '../../locales/index';





import {
    Container,
    RoundTop,
    InputName,
    ButtonComecar,
    TextSelectIdioma,
    TextBemVindo,
    RoundBottom,
    InsideRoundTop,
    InsideRoundTopTwo,
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
        <RoundTop>
            <InsideRoundTop>
        <TextSelectIdioma style={{ alignSelf: "flex-start", margin: 36 }}>{translate('welcomename')} {name}</TextSelectIdioma>
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