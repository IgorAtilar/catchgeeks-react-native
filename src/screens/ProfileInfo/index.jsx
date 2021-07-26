import React, { useState, useEffect, useContext } from "react";

import { useNavigation } from "@react-navigation/core";

import { DataContext } from "../../context/data";

import Header from "../../components/Header";

import Avatar from "../../components/Avatar";

import AlertModal from "../../components/AlertModal";

import { getOneUser } from "../../services/getOneUser";

import { theme } from "../../global/styles/theme";

import {
  ProfileContainer,
  HeaderContainer,
  TextBox,
  NumberText,
  InfoContainer,
  StatusContainer,
  AvatarContainer,
  StatusText,
  TypeContainer,
  TitleText,
  LocationText,
  BioText,
  ButtonCatch,
  ButtonContainer,
  ButtonTitle,
} from "./styles";

const ProfileInfo = ({ route }) => {
  const navigation = useNavigation();

  const { params } = route;

  const { geekBox, setGeekBox } = useContext(DataContext);

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const responseApi = await getOneUser(params.login);
      setUserData(responseApi);
      setLoading(!loading);
    };
    getUserData();
  }, []);

  const handleCatch = () => {
    if (userData) {
      if (geekBox === null) {
        setGeekBox([userData]);
      } else {
        const data = geekBox;
        data.push(userData);
        setGeekBox(data);
      }
    }
    setModalVisible(!modalVisible);
  };

  const handleConfirm = () => {
    setModalVisible(!modalVisible);
    navigation.goBack();
  };

  return (
    <>
      <Header />
      {!loading && (
        <ProfileContainer>
          <HeaderContainer>
            <TextBox marginBottom={26}>
              <NumberText>N°: {userData.id}</NumberText>
            </TextBox>
          </HeaderContainer>
          <InfoContainer>
            <AvatarContainer>
              <Avatar
                width={120}
                height={120}
                source={{ uri: userData.avatar_url }}
              />
            </AvatarContainer>
            <StatusContainer>
              <TypeContainer>
                <StatusText>Type: </StatusText>
                <TextBox backgroundColor={theme.colors.secondary} height={25}>
                  <StatusText color={theme.colors.primary}>
                    {userData.type}
                  </StatusText>
                </TextBox>
              </TypeContainer>
              <StatusText marginBottom={4}>
                Followers: {userData.followers}
              </StatusText>
              <StatusText marginBottom={4}>
                Following: {userData.following}
              </StatusText>
              <StatusText>Public Repos: {userData.public_repos}</StatusText>
            </StatusContainer>
          </InfoContainer>
          <TitleText>
            {userData.name ? userData.name : userData.login}
          </TitleText>
          {userData.location && (
            <LocationText>Location: {userData.location}</LocationText>
          )}
          {userData.bio && <BioText>{userData.bio}</BioText>}

          <ButtonContainer>
            <ButtonCatch onPress={handleCatch}>
              <ButtonTitle>Catch!</ButtonTitle>
            </ButtonCatch>
          </ButtonContainer>
        </ProfileContainer>
      )}
      <AlertModal
        modalVisible={modalVisible}
        submitFunction={handleConfirm}
        modalBodyText={userData?.name ? userData.name : userData?.login}
        modalHeaderText="Gotcha!"
      />
    </>
  );
};

export default ProfileInfo;
