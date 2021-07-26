import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
  background-color: ${(props) =>
    props.borderColor ? props.borderColor : theme.colors.primary};
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width + 5}px;
  height: ${(props) => props.height + 5}px;
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 5)}px;
`;
