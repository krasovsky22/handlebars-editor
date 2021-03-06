import React from "react";
import { WithChildrenType } from "@components/common-types";
import { Container } from "./styles/viewport";

const ViewPort = ({ children, ...rest }: WithChildrenType) => {
  return <Container {...rest}>{children}</Container>;
};

export default ViewPort;
