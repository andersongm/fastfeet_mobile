import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 230px;
  background: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 1px 1px 2px #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 15px;
`;

export const HeaderCard = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
`;

export const FooterCard = styled.View`
  background: #f8f9fd;
  height: 60px;
  padding: 5px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Product = styled.Text`
  margin-left: 20px;
  font-size: 16px;
  color: #7d40e7;
  font-weight: 500;
`;

export const FooterView = styled.View``;
export const Label = styled.Text`
  color: #888;
  font-size: 11px;
`;
export const Info = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;

export const ButtonShowDetails = styled(RectButton)``;

export const TextButtonShowDetails = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 12px;
`;
