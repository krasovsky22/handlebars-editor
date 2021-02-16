import React from "react";
import { useEditor } from "@craftjs/core";
import { Text } from "@components/editor-elements";
import { SidebarArea } from "@/components";
import { HeadingIcon } from "@assets/icons";

const WidgetsContainer: React.FC = () => {
  const {
    connectors: { create },
  } = useEditor();
  return (
    <SidebarArea.OpenedAreaButtonGroup>
      <div ref={(ref) => create(ref, <Text text="Hello new world" />)}>
        <SidebarArea.OpenedAreaButton title="Text" icon={<HeadingIcon size="lg" />} />
      </div>
      <div ref={(ref) => create(ref, <Text text="Hello new world" />)}>
        <SidebarArea.OpenedAreaButton title="Text" icon={<HeadingIcon size="lg" />} />
      </div>
      <div ref={(ref) => create(ref, <Text text="Hello new world" />)}>
        <SidebarArea.OpenedAreaButton title="Text" icon={<HeadingIcon size="lg" />} />
      </div>
      <div ref={(ref) => create(ref, <Text text="Hello new world" />)}>
        <SidebarArea.OpenedAreaButton title="Text" icon={<HeadingIcon size="lg" />} />
      </div>
    </SidebarArea.OpenedAreaButtonGroup>
  );
};
export default WidgetsContainer;
