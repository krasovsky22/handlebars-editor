import React from "react";
import { EditorArea, ViewPort } from "@/components";
import { Editor, Frame, Element } from "@craftjs/core";
import { Container, Text, RenderNode } from "@components/editor-elements";
import { Configuration, SidebarArea } from "@/containers";

const EditorContainer: React.FC = () => {
  return (
    <EditorArea>
      <Editor resolver={{ Container, Text }} onRender={RenderNode}>
        <SidebarArea />
        <ViewPort>
          <Frame>
            <Element
              id="App"
              is={Container}
              canvas
              width="800px"
              padding={["40px", "40px", "40px", "40px"]}
              custom={{ displayName: "App", rules: { canDrag: () => false } }}
            >
              {/* <Element is={Container} background="#FFFFFF" padding={"40px 40px"} canvas>
                <Text fontSize={23} text="My test Text" />
              </Element>
              <Element is={Container} background="#a04c4c" padding={"40px 40px"} canvas>
                <Text fontSize={23} text="Another Text" />
              </Element> */}
            </Element>
          </Frame>
        </ViewPort>
        <Configuration />
      </Editor>
    </EditorArea>
  );
};

export default EditorContainer;
