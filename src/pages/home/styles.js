import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.KeyboardAvoidingView`
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
   margin-left: 1px;
  
`;

export const InsideRoundTopTwo = styled.View`
  width: ${windowWidth * 0.40}px;
  height: ${windowHeight * 0.40}px;
   flex-direction: column;
   align-items:flex-end;
   justify-content: flex-end;
   

`;

export const RoundBottom = styled.View`
   flex:1;
   flex-direction: column;
   align-items: flex-end;
   justify-content: center;
   
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


export const ButtonComecar = styled.TouchableOpacity`
  position: absolute;
  background-color: #8C89FA;
  width: ${windowWidth * 0.95}px;
   height: ${windowHeight * 0.08}px;
   bottom: 12px;
   border-radius: 14px;
   justify-content:center;
   align-items:center;
   align-self: center;
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

export const TextSelectIdioma = styled.Text`
  color: white;
  font-size: 18px;
`;

export const TextBemVindo = styled.Text`
  align-self:center;
  margin: 24px;
  color: #8C89FA;
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
  font-size: 20px;
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
