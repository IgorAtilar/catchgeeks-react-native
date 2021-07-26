import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

import { TouchableOpacity } from "react-native";

export const CardButton = styled(TouchableOpacity)`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 5px;
  background-color: ${theme.colors.green};
`;
