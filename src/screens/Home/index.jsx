import React from "react";

import { Image } from "react-native";

import Header from "../../components/Header";

import { HomeContainer, TextTitle } from "./styles";

const Home = () => {
  return (
    <>
      <Header style={{ marginBottom: 0 }} />
      <HomeContainer showsVerticalScrollIndicator={false}>
        <TextTitle>CatchGeeks!</TextTitle>
        <Image source={require("../../assets/images/find.png")} />
        <Image source={require("../../assets/images/catch.png")} />
        <Image source={require("../../assets/images/collect.png")} />
      </HomeContainer>
    </>
  );
};

export default Home;
