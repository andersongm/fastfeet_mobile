import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #7d40e7;
  height: 140px;
  padding: 0 0px;
  align-items: center;
  justify-content: space-between;
`;

export const DeliveryInfo = styled.View`
  margin-top: 25px;
  background: #fff;
  width: 350px;
  box-shadow: 1px 1px 2px #ddd;
  border-radius: 4px;
  padding: 20px;
  /* margin-bottom: 5px; */
`;

export const DeliveryStatus = styled.View`
  background: #fff;
  margin-top: 10px;
  width: 350px;
  box-shadow: 1px 1px 2px #ddd;
  border-radius: 4px;
  padding: 20px;
`;

export const DeliveryButtons = styled.View`
  margin-top: 10px;
  flex-direction: row;
  width: 350px;
  justify-content: space-between;
  box-shadow: 0px 1px 1px #ddd;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Info = styled.View``;
export const InfoView = styled.View``;
export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999999;
  padding: 10px 0px 5px;
`;
export const Text = styled.Text`
  color: #b2b2b2;
`;

export const LabelHeader = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  color: #7d40e7;
`;

export const InfoDate = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
