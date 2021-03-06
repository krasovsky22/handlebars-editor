import { CombinedElementProps } from "@components/editor-elements/elements-types";

export default function convertElementPropsToStyles(props: CombinedElementProps) {
  return {
    ...props,
    margin: props.margin?.join(" "),
    padding: props.padding?.join(" "),
  };
}
