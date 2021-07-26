import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const HomeContainer = styled.ScrollView`
  flex: 1;
  padding: 0px 20px;
  background-color: ${theme.colors.darkRed};
`;

export const TextTitle = styled.Text`
  font-family: ${theme.fonts.text700};
  color: ${theme.colors.secondary};
  font-size: 36px;
  text-align: center;
  margin-bottom: 12px;
  margin-top: 12px;
`;
