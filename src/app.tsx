import React from "react";
import styled from "styled-components/macro";
import { Header, SidebarArea } from "@/containers";

const MainContainer = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const EditorArea = styled.div`
  flex-grow: 1;
  background-color: orange;
`;

const App: React.FC = () => {
  return (
    <MainContainer>
      <Header>Header</Header>
      <Content>
        <SidebarArea>Sidebar</SidebarArea>
        <EditorArea>Editor</EditorArea>
      </Content>
    </MainContainer>
  );
};

export default App;
