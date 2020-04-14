import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

export const ContainerConfirm = styled.SafeAreaView`
  background: #7d40e7;
  height: 140px;
  box-shadow: 1px 1px 2px #ddd;
  padding: 20px;
  align-items: center;
`;

export const Container = styled.View`
  justify-content: space-between;
  width: 340px;
  justify-content: space-between;
`;

export const Camera = styled(RNCamera)`
  margin-top: 30px;
  height: 420px;
`;

export const IconButtonTop = styled.TouchableOpacity`
  margin: 8px;
  padding: 5px;
`;

export const IconButton = styled.TouchableOpacity`
  margin-top: 100%;
  width: 50px;
  height: 50px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background: rgba(144, 133, 128, 0.8);
`;

export const Icon = styled(IconMaterialIcons)``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Footer = styled.View`
  align-items: center;
`;

export const SubmitButton = styled(RectButton)`
  margin-top: 20px;
  background: #7d40e7;
  height: 46px;
  width: 340px;
  align-content: center;
  justify-content: center;
  border-radius: 4px;
  opacity: ${(props) => (props.active ? 0.4 : 1)};
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
