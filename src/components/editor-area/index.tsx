import React from "react";
import { WithChildrenType } from "@components/common-types";
import { Container } from "./styles/editor-area";

const EditorArea = ({ children, ...rest }: WithChildrenType) => {
  return <Container {...rest}>{children}</Container>;
};

export default EditorArea;
