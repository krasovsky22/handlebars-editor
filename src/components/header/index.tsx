import React from "react";
import { WithChildrenType, ImageType } from "@components/common-types";
import { Container, Logo, TopBar, TopBarButton } from "./styles/header";

const Header = ({ children, ...rest }: WithChildrenType) => {
  return <Container {...rest}>{children}</Container>;
};

Header.Logo = ({ ...rest }: ImageType) => {
  return <Logo {...rest} />;
};

Header.TopBar = ({ children, ...rest }: WithChildrenType) => {
  return <TopBar {...rest}>{children}</TopBar>;
};

Header.TopBarButton = ({ children, ...rest }: WithChildrenType) => {
  return <TopBarButton {...rest}>{children}</TopBarButton>;
};
export default Header;
