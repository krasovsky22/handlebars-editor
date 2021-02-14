import React from "react";
import { Header } from "@/components";

import Logo from "@assets/logo.svg";

const HeaderContainer: React.FC = () => {
  return (
    <Header>
      <Header.Logo src={Logo} alt="Editor"></Header.Logo>
      <Header.TopBar>
        <Header.TopBarButton>Save</Header.TopBarButton>
        <Header.TopBarButton>Load</Header.TopBarButton>
        <Header.TopBarButton>Preview</Header.TopBarButton>
      </Header.TopBar>
    </Header>
  );
};
export default HeaderContainer;
