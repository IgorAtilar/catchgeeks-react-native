import React, { useEffect, useState, useContext } from "react";

import { DataContext } from "../../context/data";

import Avatar from "../Avatar";

import { getOneUser } from "../../services/getOneUser";

import { theme } from "../../global/styles/theme";

import { Card, Container, TextArea, NumberText, NameText } from "./styles";
const ProfileItem = ({ uri, id, login, ...rest }) => {
  const { allUsersData, setAllUsersData } = useContext(DataContext);

  const [isLoading, setisLoading] = useState(true);
  const [name, setName] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const responseApi = await getOneUser(login);
      const { name, id } = responseApi;
      const index = allUsersData.findIndex((item) => {
        return item.id === id;
      });
      const allUsersDataWithName = allUsersData;
      if (index !== -1) {
        allUsersDataWithName[index].name = name;
        setAllUsersData(allUsersDataWithName);
        setName(name);
      }
      setisLoading(!isLoading);
    };
    getUserData();
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <Card {...rest}>
      <Container>
        <Avatar
          height={75}
          width={75}
          source={{ uri }}
          borderColor={theme.colors.secondary}
          borderRadius={2}
        />
        <TextArea>
          <NumberText>N°: {id}</NumberText>
          <NameText>{name ? name : login}</NameText>
        </TextArea>
      </Container>
    </Card>
  );
};

export default ProfileItem;
