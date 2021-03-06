import { useNode } from "@craftjs/core";
import React from "react";
import { Slider, FormControl, FormLabel } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";
import { ContainerType } from "./elements-types";
import { WithChildrenType } from "@components/common-types";
import convertElementPropsToStyles from "@utils/convert-element-props-to-styles";

export const ContainerDefaultProps: ContainerType = {
  background: "#ffffff",
  height: "300px",
  flexGrow: 1,
  width: "100%",
  margin: ["0", "0", "0", "0"],
  padding: ["0", "0", "0", "0"],
};

const Container = ({ children, ...rest }: WithChildrenType & ContainerType) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const styles = convertElementPropsToStyles({ ...ContainerDefaultProps, ...rest });

  return (
    <div ref={(dom) => connect(drag(dom))} style={styles}>
      {children}
    </div>
  );
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
