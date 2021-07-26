import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

import { TouchableOpacity } from "react-native";

export const ModalBackground = styled.View`
  flex: 1;
  background-color: ${theme.colors.overlay};
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.View`
  background-color: ${theme.colors.secondary};
  width: 85%;
  height: 220px;
  border-radius: 20px;
  justify-content: space-between;
`;

export const ModalHeader = styled.View`
  align-items: center;
`;

export const ModalText = styled.Text`
  font-family: ${(props) => (props.font ? props.font : theme.fonts.text700)};
  font-size: ${(props) => (props.textSize ? props.textSize : 20)}px;
`;

export const ModalBody = styled.View`
  padding: 10px;
  align-items: center;
`;

export const ModalFooter = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 14px;
`;

export const Button = styled(TouchableOpacity)`
  height: ${(props) => (props.buttonHeight ? props.buttonHeight : 40)}px;
  width: ${(props) => (props.buttonWidth ? props.buttonWidth : 120)}px;
  background-color: ${(props) =>
    props.styleCancel ? theme.colors.primary : theme.colors.secondary};
  color: ${(props) =>
    props.styleCancel ? theme.colors.secondary : theme.colors.primary};
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${(props) => (props.styleCancel ? "transparent " : theme.colors.primary)};
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 16px;
  color: ${(props) =>
    props.styleCancel ? theme.colors.secondary : theme.colors.primary};
`;
