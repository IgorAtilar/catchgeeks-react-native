import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

import { TextInput } from "react-native";

export const Input = styled(TextInput)`
  font-family: ${theme.fonts.text400};
  width: 90%;
  background-color: ${theme.colors.mediumGrey};
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  height: 42px;
  color: ${theme.colors.darkGrey};
  padding: 10px;
`;

export const IconContainer = styled.View`
  width: 10%;
  background-color: red;
  background-color: ${theme.colors.mediumGrey};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  height: 42px;
  align-items: center;
  justify-content: center;
`;

export const SearchBarContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;
