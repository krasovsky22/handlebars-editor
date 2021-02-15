import React from "react";
import styled from "styled-components/macro";
import { Header, SidebarArea, Editor } from "@/containers";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const App: React.FC = () => {
  return (
    <MainContainer>
      <Header>Header</Header>
      <Content>
        <Editor />
      </Content>
    </MainContainer>
  );
};

export default App;
