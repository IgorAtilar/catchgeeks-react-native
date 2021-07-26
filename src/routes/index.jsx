import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import NavigationRoutes from "./navigation.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <NavigationRoutes />
    </NavigationContainer>
  );
};

export default Routes;
