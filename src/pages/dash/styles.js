import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import normalize from '../../Fontnormalize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const Container = styled.View`
  flex:1;
  flex-direction: column;
  align-items: center;
`;

export const RoundTop = styled.View`
   background-color: #8C89FA;
   border-bottom-right-radius: 100px;
   width: ${windowWidth}px;
   height: ${windowHeight * 0.40}px;
   flex-direction: row;
   align-items: center;
`;

export const InsideRoundTop = styled.View`
  width: ${windowWidth * 0.6}px;
  height: ${windowHeight * 0.40}px;
   flex-direction: column;
   align-items:flex-start;
   justify-content: center;
   margin-left: 14px;
  
`;

export const InsideRoundTopTwo = styled.View`

  width: ${windowWidth * 0.4}px;
  height: ${windowHeight * 0.40}px;
   flex-direction: column;
   align-items:flex-end;
   justify-content: flex-end;
   

`;

export const RoundBottom = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center'
  },
})`
   width: 95%;
   flex: 1;
   flex-direction: row;
`;

export const InputName = styled.TextInput`
  position: absolute;
  bottom: 90px;
  background-color: transparent;
  border: 2px;
  border-color: #8C89FA;
  width: ${windowWidth * 0.95}px;
   height: ${windowHeight * 0.08}px;
   border-radius: 14px;
   align-self: center;
   padding-left: 24px;
`;


export const Tips = styled.TouchableOpacity`
  border: 2px;
  border-color: #8C89FA;
  width: ${windowWidth * 0.33}px;
   height: ${windowHeight * 0.25}px;
   margin-bottom: 12px;
   border-radius: 14px;
   justify-content:flex-start;
   align-items:flex-start;
   align-self: flex-end;
   margin-left: 8px;
  
    
`;


export const ButtonChangeIdioma = styled.TouchableOpacity`
  background-color: transparent;
  border: 1px;
  border-color: white;
  width: ${windowWidth * 0.45}px;
   height: ${windowHeight * 0.07}px;
   border-radius: 14px;
   justify-content: center;
   align-items:center;
   z-index: 3;
`;

export const ButtonToHospital = styled.TouchableOpacity`
  background-color: transparent;
  border: 1px;
  border-color: white;
  width: ${windowWidth * 0.45}px;
   height: ${windowHeight * 0.07}px;
   border-radius: 14px;
   justify-content: center;
   align-items:center;
   z-index: 3;
`;

export const TextSelectIdioma = styled.Text`
  color: white;
 font-size: ${normalize(14)}px;
`;

export const TextBemVindo = styled.Text`
  align-self:center;
  color: #8C89FA;
  font-size: ${normalize(14)}px;
`;

export const Modal = styled.View`
   flex:1;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const ModalClose = styled.View`
   flex-direction: row;
   align-items: flex-end;
   justify-content: flex-end;
   padding-top: 18px;
   padding-right: 24px;
   
`;

export const TxtSelectIdiom = styled.Text`
  align-self: center;
  color: gray;
  font-size: ${normalize(18)}px;
`;

export const ChangetoPt = styled.TouchableOpacity`
  background-color: transparent;
  border: 2px;
  border-color: gray;
  width: 80%;
   height: ${windowHeight * 0.07}px;
   border-radius: 14px;
   justify-content: center;
   align-self: center;
   align-items:center;
   z-index: 20;
   margin-top: 48px;
`;

export const ChangetoUs = styled.TouchableOpacity`
  background-color: transparent;
  border: 2px;
  border-color: gray;
  width: 80%;
   height: ${windowHeight * 0.07}px;
   border-radius: 14px;
   justify-content: center;
   align-items:center;
   align-self: center;
   z-index: 20;
   margin-top:24px;
`;

export const SignOutButton = styled.TouchableOpacity`
  position: absolute;
  top:${windowWidth * 0.005}px;
  right: ${windowHeight * 0.005}px;
  border: 1px;
  border-color: white;
  width: ${windowWidth * 0.25}px;
   height: ${windowHeight * 0.04}px;
   border-radius: 14px;
   justify-content: center;
   align-items:center;
   z-index: 3;
`;

export const TextSignOutButton = styled.Text`
  align-self: center;
  color: white;
  font-size: ${normalize(12)}px;
`;

export const RoundCenter = styled.View`
   width: ${windowWidth* 0.95}px;
   height: ${windowHeight * 0.20}px;
   flex-direction: row;
   align-items: center;
   padding: 8px;
`;

export const ViewTips = styled.View`
   width: 90%;
   height: 75%;
   flex-direction: column;
   align-self:center;
   margin: 8px;
`;

export const TextTips = styled.Text`
  color: #8C89FA;
 font-size: ${normalize(18)}px;
 margin: 24px;
 font-weight: bold;
`;