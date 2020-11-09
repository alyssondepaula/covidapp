import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import  normalize from '../../Fontnormalize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8C89FA;
  padding: 24px;
`;

export const ButtonDash = styled.TouchableOpacity`
  background-color: white;
  width: ${windowWidth * 0.95}px;
   height: ${windowHeight * 0.08}px;
   border-radius: 14px;
   justify-content:center;
   align-items:center;
   align-self: center;
`;

export const ButtontoHospital = styled.TouchableOpacity`
  background-color: white;
  width: ${windowWidth * 0.95}px;
   height: ${windowHeight * 0.08}px;
   border-radius: 18px;
   justify-content:center;
   align-items:center;
   align-self: center;
`;


export const TextResultButton = styled.Text`
  align-self:center;
  margin: 24px;
  color: #8C89FA;
`;

export const TextResultAlert = styled.Text`
  align-self:center;
  font-size: ${normalize(28)}px;
  margin-top: 0px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 24px;
  color: white;
`;