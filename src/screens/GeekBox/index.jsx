import React, { useState, useEffect, useContext } from "react";

import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/core";

import { DataContext } from "../../context/data";

import Header from "../../components/Header";

import BoxItem from "../../components/BoxItem";

import {
  BoxContainer,
  BoxTitle,
  BoxTitleContainer,
  ListContainer,
} from "./styles";

const GeekBox = () => {
  const navigation = useNavigation();

  const { geekBox } = useContext(DataContext);

  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    navigation.addListener("focus", () => setRefresh(!refresh));
  }, [refresh, navigation]);

  const numColumns = 2;
  return (
    <>
      <Header />
      <BoxContainer>
        <BoxTitleContainer>
          <BoxTitle>GEEK BOX</BoxTitle>
        </BoxTitleContainer>
        <ListContainer>
          {geekBox && (
            <FlatList
              data={geekBox}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <BoxItem
                  avatar_url={item.avatar_url}
                  geekIndex={index}
                  name={item.name}
                  login={item.login}
                />
              )}
              numColumns={2}
              key={"_"}
              showsVerticalScrollIndicator={false}
            />
          )}
        </ListContainer>
      </BoxContainer>
    </>
  );
};

export default GeekBox;
