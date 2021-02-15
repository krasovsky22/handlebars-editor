import React from "react";
import { useEditor } from "@craftjs/core";

const Toolbar = () => {
  const { active, related } = useEditor((state) => ({
    active: state.events.selected,
    related: state.events.selected && state.nodes[state.events.selected].related,
  }));

  console.log(active, related);

  return (
    <div>
      {active && related && related.toolbar && React.createElement(related.toolbar)}
      {!active && "Toolbar here"}
    </div>
  );
};

export default Toolbar;
