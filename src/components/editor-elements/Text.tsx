import { useNode } from "@craftjs/core";
import { Slider, FormControl, FormLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";

type TextType = {
  text: string;
  fontSize?: number;
  textAlign?: string;
};
const Text = ({ text, fontSize = 14, textAlign, ...rest }: TextType) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selected) {
      return;
    }

    setEditable(false);
  }, [selected]);

  return (
    <div ref={(ref) => connect(drag(ref))} onClick={() => selected && setEditable(true)}>
      <ContentEditable
        html={text}
        disabled={!editable}
        onChange={(e) =>
          setProp((props) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")), 500)
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign, ...rest }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value), 1000);
          }}
        />
      </FormControl>
    </>
  );
};

export const TextDefaultProps = {
  text: "Hi",
  fontSize: 20,
};

Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};

export default Text;
