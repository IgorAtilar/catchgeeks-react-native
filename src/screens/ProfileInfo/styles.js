import styled from "styled-components";

import { theme } from "../../global/styles/theme";

import { TouchableOpacity } from "react-native";

export const ProfileContainer = styled.View`
  padding: 0px 20px;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.View`
  width: ${(props) => (props.width ? props.width : 100)}px;
  height: ${(props) => (props.height ? props.height : 32)}px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : theme.colors.primary};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
  text-align: center;
`;

export const NumberText = styled.Text`
  font-family: ${theme.fonts.text700};
  font-size: 24px;
  color: ${theme.colors.secondary};
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const AvatarContainer = styled.View`
  width: 40%;
`;

export const StatusContainer = styled.View`
  background-color: ${theme.colors.primary};
  width: 60%;
  border-radius: 4px;
  padding: 10px;
`;

export const StatusText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  font-size: 16px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
`;

export const TypeContainer = styled.View`
  flex-direction: row;
  align-items: stretch;
  margin-bottom: 4px;
`;

export const TitleText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.primary};
  font-size: 24px;
  text-align: center;
  margin-bottom: 12px;
`;

export const LocationText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.darkGrey};
  font-size: 16px;
  margin-bottom: 16px;
`;

export const BioText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.darkGrey};
  font-size: 16px;
  text-align: center;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonCatch = styled.TouchableOpacity`
  width: 50%;
  height: 52px;
  background-color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ButtonTitle = styled.Text`
  font-family: ${theme.fonts.text700};
  color: ${theme.colors.secondary};
  font-size: 24px;
`;
