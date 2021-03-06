import React from "react";
import { useEditor } from "@craftjs/core";
import { SidebarArea } from "@/components";
import { WidgetsFixture } from "@fixtures/widgets";

const WidgetsContainer: React.FC = () => {
  const {
    connectors: { create },
  } = useEditor();
  return (
    <SidebarArea.OpenedAreaButtonGroup>
      {WidgetsFixture.map((widget, index) => (
        <div key={`widget-${widget.title}-${index}`} ref={(ref) => create(ref, widget.component)}>
          <SidebarArea.OpenedAreaButton title={widget.title} icon={widget.icon} />
        </div>
      ))}
    </SidebarArea.OpenedAreaButtonGroup>
  );
};
export default WidgetsContainer;
