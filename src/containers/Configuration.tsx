import Toolbar from "@components/configuration/Toolbar";
import React from "react";
import styled from "styled-components/macro";
import { Layers } from "@craftjs/layers";

const ConfigurationDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #e2e8f0;
`;

const ConfigurationContainer: React.FC = () => {
  return (
    <ConfigurationDiv>
      <Toolbar />
      <Layers expandRootOnLoad={true} />
    </ConfigurationDiv>
  );
};
export default ConfigurationContainer;
