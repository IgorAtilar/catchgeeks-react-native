import React, { useState, useContext, useRef, useEffect } from "react";

import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/core";

import { DataContext } from "../../context/data";

import filter from "lodash.filter";

import Header from "../../components/Header";

import SearchBar from "../../components/SearchBar";

import ProfileItem from "../../components/ProfileItem";

import { CatchContainer } from "./styles";

const Catch = () => {
  const navigation = useNavigation();

  const { allUsersData } = useContext(DataContext);

  const [search, setSearch] = useState(allUsersData);
  const [textSearch, setTextSearch] = useState("");
  const [refresh, setRefresh] = useState(true);

  const flatListRef = useRef();

  const ITEM_HEIGHT = 100;

  const handleSearch = (text) => {
    text = text.toLowerCase();
    const filtrated = filter(allUsersData, (item) => {
      const { name } = item;
      const { login } = item;
      if (name) {
        return name.toLowerCase().includes(text);
      } else {
        return login.toLowerCase().includes(text);
      }
    });
    setSearch(filtrated);
    setTextSearch(text);
  };

  const handleNavigation = (item) => {
    navigation.navigate("ProfileInfo", item);
  };

  useEffect(() => {
    setSearch(allUsersData);
    setTextSearch("");
    toTop();
    navigation.addListener("focus", () => setRefresh(!refresh));
  }, [refresh, navigation]);

  const toTop = () => {
    flatListRef?.current.scrollToOffset({ animated: true, offset: 0 });
  };

  useEffect(() => {
    toTop();
  }, [search]);

  return (
    <>
      <Header />
      <CatchContainer>
        <SearchBar
          onChangeText={(text) => handleSearch(text)}
          value={textSearch}
          placeholder="Search Geek"
        />
        {search && (
          <FlatList
            data={search}
            renderItem={({ item }) => (
              <ProfileItem
                id={item.id}
                login={item.login}
                uri={item.avatar_url}
                onPress={() => handleNavigation(item)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ref={flatListRef}
            getItemLayout={(search, index) => ({
              length: 100,
              offset: ITEM_HEIGHT * index,
              index,
            })}
          />
        )}
      </CatchContainer>
    </>
  );
};

export default Catch;
