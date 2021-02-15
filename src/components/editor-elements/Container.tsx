import { useNode } from "@craftjs/core";
import React from "react";
import { WithChildrenType } from "@components/common-types";
import { Slider, FormControl, FormLabel } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";

type ContainerType = WithChildrenType & {
  background?: string;
  padding?: string;
};
const Container = ({ background, padding, children }: ContainerType) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(dom) => connect(drag(dom))} style={{ background, padding }}>
      {children}
    </div>
  );
};

export const ContainerDefaultProps = {
  background: "#ffffff",
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker
          value={background}
          onChange={(color) => {
            setProp((props) => (props.background = color), 500);
          }}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={(_, value) => setProp((props) => (props.padding = value), 500)}
        />
      </FormControl>
    </div>
  );
};

Container.craft = {
  props: ContainerDefaultProps,
  displayName: "Container",
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};

export default Container;
