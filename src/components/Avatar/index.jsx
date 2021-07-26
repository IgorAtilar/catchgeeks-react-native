import React from "react";

import { Image } from "react-native";

import { Container } from "./styles";

const Avatar = ({ width, height, borderColor, borderRadius, ...rest }) => {
  return (
    <Container
      height={height}
      width={width}
      borderColor={borderColor}
      borderRadius={borderRadius}
    >
      <Image style={{ width, height }} {...rest} />
    </Container>
  );
};

export default Avatar;
