import React, { useState } from "react";
import { WithChildrenType, ClickableType } from "@components/common-types";
import {
  Container,
  ButtonContainer,
  ButtonContent,
  OpenedArea,
  OpenedTitle,
  OpenedAreaInner,
  OpenedAreaBody,
  ButtonIcon,
  ButtonTitle,
  ButtonArrow,
  Inner,
  OpenedAreaContent,
} from "./styles/sidebar-area";
import { useDidMount } from "beautiful-react-hooks";
import { CloseIcon } from "@assets/icons";

const SidebarArea = ({ children, ...rest }: WithChildrenType) => {
  return <Container {...rest}>{children}</Container>;
};

SidebarArea.Inner = ({ children, ...rest }: WithChildrenType) => {
  return <Inner {...rest}>{children}</Inner>;
};

SidebarArea.ButtonContainer = ({ children, ...rest }: WithChildrenType & ClickableType) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};

SidebarArea.ButtonContent = ({ children, ...rest }: WithChildrenType) => {
  return <ButtonContent {...rest}>{children}</ButtonContent>;
};

SidebarArea.ButtonIcon = ({ children, ...rest }: WithChildrenType) => {
  return <ButtonIcon {...rest}>{children}</ButtonIcon>;
};

SidebarArea.ButtonTitle = ({ children, ...rest }: WithChildrenType) => {
  return <ButtonTitle {...rest}>{children}</ButtonTitle>;
};

SidebarArea.ButtonArrow = ({ ...rest }) => {
  return (
    <ButtonArrow {...rest}>
      <span />
    </ButtonArrow>
  );
};

SidebarArea.OpenedArea = ({ children, ...rest }: WithChildrenType) => {
  return <OpenedArea {...rest}>{children}</OpenedArea>;
};

SidebarArea.OpenedAreaContent = ({ children, ...rest }: WithChildrenType) => {
  const [left, setLeft] = useState<number>(-10);

  useDidMount(() => {
    setLeft(6);
  });

  return (
    <OpenedAreaContent left={`${left}rem`} {...rest}>
      {children}
    </OpenedAreaContent>
  );
};

SidebarArea.OpenedAreaInner = ({ children, ...rest }: WithChildrenType) => {
  return <OpenedAreaInner {...rest}>{children}</OpenedAreaInner>;
};

type OpenAreaTitle = {
  onClose?: any;
};
SidebarArea.OpenedAreaTitle = ({
  onClose = () => {},
  children,
  ...rest
}: OpenAreaTitle & WithChildrenType) => {
  return (
    <OpenedTitle {...rest}>
      <p>{children}</p>
      <div onClick={onClose}>
        <CloseIcon />
      </div>
    </OpenedTitle>
  );
};

SidebarArea.OpenedAreaBody = ({ children, ...rest }: WithChildrenType) => {
  return <OpenedAreaBody {...rest}>{children}</OpenedAreaBody>;
};

export default SidebarArea;
