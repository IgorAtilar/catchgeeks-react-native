import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const BoxContainer = styled.View`
  flex: 1;
  padding: 0px 20px;
`;

export const BoxTitleContainer = styled.View`
  background-color: ${theme.colors.primary};
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const BoxTitle = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.text700};
  color: ${theme.colors.secondary};
`;

export const ListContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.lightGreen};
  margin-top: 12px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;
