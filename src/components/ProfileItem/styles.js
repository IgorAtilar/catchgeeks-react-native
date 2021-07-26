import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

import { TouchableOpacity } from "react-native";

export const Card = styled(TouchableOpacity)`
  width: 100%;
  height: 100px;
  background-color: ${theme.colors.primary};
  justify-content: center;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 12px;
`;

export const Container = styled.View`
  flex-direction: row;
`;

export const TextArea = styled.View`
  margin-left: 10px;
`;

export const NumberText = styled.Text`
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.text700};
  font-size: 24px;
  margin-bottom: 10px;
`;

export const NameText = styled.Text`
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.text400};
  font-size: 16px;
`;
