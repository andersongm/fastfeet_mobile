import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #7d40e7;
  height: 140px;
  padding: 0 20px;
  align-items: center;
`;

export const ProblemList = styled.FlatList.attrs({
  showsVerticalScroolIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const Problem = styled.View`
  margin-top: 15px;
  box-shadow: 1px 1px 2px #ddd;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  height: 450px;
`;

export const TitleDelivery = styled.Text`
  margin-top: 20px;
  margin-bottom: 15px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const DescProblem = styled.Text`
  color: #888;
  font-size: 16px;
`;

export const DateProblem = styled.Text`
  color: #888;
  font-size: 16px;
`;
