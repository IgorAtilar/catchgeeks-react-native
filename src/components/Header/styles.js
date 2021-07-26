import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const HeaderContainer = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  background-color: ${theme.colors.primary};
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
`;

export const DetailsArea = styled.View`
  flex-direction: row;
`;

export const BigDetail = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${theme.colors.lightBlue};
  border: 5px solid ${theme.colors.lightGrey};
  margin-right: 10px;
`;

export const SmallDetail = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.color ? props.color : theme.colors.white};
  margin-right: 10px;
  margin-top: 5px;
`;
