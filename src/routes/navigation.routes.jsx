import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";

import Home from "../screens/Home";

import ProfileInfo from "../screens/ProfileInfo";

import Catch from "../screens/Catch";

import GeekBox from "../screens/GeekBox";

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

const TabNavigator = createBottomTabNavigator();

const NavigationRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary,
        },
      }}
      headerMode="none"
    >
      <Screen name="Home" component={Tabs} />
      <Screen name="ProfileInfo" component={ProfileInfo} />
    </Navigator>
  );
};

const Tabs = () => {
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: theme.colors.primary,
          height: 60,
          borderTopWidth: 0
        },
        inactiveTintColor: theme.colors.lightGrey,
        activeTintColor: theme.colors.secondary,
        showLabel: false,
        activeBackgroundColor: theme.colors.primary,
        tabStyle: {
          borderColor: theme.colors.secondary,
        },
      }}
      sceneContainerStyle={{ backgroundColor: theme.colors.secondary }}
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let size;
          switch (route.name) {
            case "Catch":
              iconName = "users";
              size = focused ? 44 : 24;
              break;
            case "Home":
              iconName = "home";
              size = focused ? 44 : 24;
              break;
            case "GeekBox":
              iconName = "th-large";
              size = focused ? 44 : 24;
              break;
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
    >
      <TabNavigator.Screen name="Catch" component={Catch} />
      <TabNavigator.Screen name="Home" component={Home} />
      <TabNavigator.Screen name="GeekBox" component={GeekBox} />
    </TabNavigator.Navigator>
  );
};

export default NavigationRoutes;
