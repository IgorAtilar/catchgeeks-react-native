import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { theme } from "./src/global/styles/theme";

import AppLoading from "expo-app-loading";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_100Thin,
  useFonts,
} from "@expo-google-fonts/roboto";

import Routes from "./src/routes";

import { getAllUsers } from "./src/services/getAllUsers";

import { DataContext } from "./src/context/data";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [allUsersData, setAllUsersData] = useState(null);
  const [geekBox, setGeekBox] = useState(null);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_100Thin,
  });
  useEffect(() => {
    const getAllUsersData = async () => {
      const responseApi = await getAllUsers();
      setAllUsersData(responseApi);
    };
    getAllUsersData();
    setLoading(false);
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  if (loading) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.primary}
        translucent
        barStyle="light-content"
      />
      <DataContext.Provider
        value={{ allUsersData, setAllUsersData, geekBox, setGeekBox }}
      >
        <Routes />
      </DataContext.Provider>
    </>
  );
};
export default App;
