import React from "react";

import { FontAwesome } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";

import { Input, SearchBarContainer, IconContainer } from "./styles";

const SearchBar = ({ ...rest }) => {
  return (
    <SearchBarContainer>
      <Input {...rest} />
      <IconContainer>
        <FontAwesome name="search" size={24} color={theme.colors.secondary} />
      </IconContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
