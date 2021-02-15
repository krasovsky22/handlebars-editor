import React from "react";
import { EditorArea } from "@/components";
import { Editor, Frame, Element } from "@craftjs/core";
import { Container, Text, RenderNode } from "@components/editor-elements";
import { Configuration, SidebarArea } from "@/containers";
import styled from "styled-components/macro";

const ViewPort = styled.div`
  flex-grow: 1;
  background-color: orange;
  margin: 20px;
`;

const EditorContainer: React.FC = () => {
  return (
    <EditorArea>
      <Editor resolver={{ Container, Text }} onRender={RenderNode}>
        <SidebarArea />
        <ViewPort>
          <Frame>
            <Element is={Container} canvas custom={{ displayName: "App" }}>
              <Element is={Container} background="#FFFFFF" padding={"40px 40px"} canvas>
                <Text
                  fontSize={23}
                  text="Craft.js is a React framework for building powerful &amp; feature-rich drag-n-drop page editors."
                />
              </Element>
              <Element is={Container} background="#a04c4c" padding={"40px 40px"} canvas>
                <Text fontSize={23} text="Another Text" />
              </Element>
            </Element>
          </Frame>
        </ViewPort>
        <Configuration />
      </Editor>
    </EditorArea>
  );
};

export default EditorContainer;
