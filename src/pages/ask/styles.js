import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View.attrs({
  marginTop: 48
})`
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.View`
  height: ${windowHeight * 0.05}px;
justify-content: center;
 margin-left:36px;
`;

export const NameView = styled.View`
  width: ${windowWidth}px;
  height: ${windowHeight * 0.1}px;
  margin-top: 16px;
`;

export const TextAsk = styled.Text`
  align-self:center;
  text-align: center;
  font-size: 18px;
  margin: 36px;
  color: #8C89FA;
`;

export const Bodyask = styled.ScrollView`
  width: ${windowWidth}px;
  height: ${windowHeight * 0.4}px;
  height: 100px;
  background-color: pink;
`;

export const AskerView = styled.TouchableOpacity`
  background-color:  ${props => props.background};
  border: 2px;
  border-color: #8C89FA;
  width: ${windowWidth * 0.95}px;
   height: ${windowHeight * 0.08}px;
   border-radius: 14px;
   align-self: center;
   margin-bottom: 8px;
   justify-content: center;
   align-items: center;
`;

export const ButtonAvaliar = styled.TouchableOpacity`
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

export const TextAvaliar = styled.Text`
  color: white;
  font-size: 18px;
`;

export const TextAsker = styled.Text`
  text-align: center;
  color:  ${props => props.background};
  font-size: 14px;
`;