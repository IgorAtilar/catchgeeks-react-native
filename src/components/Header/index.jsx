import React from "react";

import { theme } from "../../global/styles/theme";

import { HeaderContainer, DetailsArea, BigDetail, SmallDetail } from "./styles";

const Header = ({ ...rest }) => {
  return (
    <HeaderContainer {...rest}>
      <DetailsArea>
        <BigDetail />
        <SmallDetail color={theme.colors.darkRed} />
        <SmallDetail color={theme.colors.gold} />
        <SmallDetail color={theme.colors.green} />
      </DetailsArea>
    </HeaderContainer>
  );
};

export default Header;
