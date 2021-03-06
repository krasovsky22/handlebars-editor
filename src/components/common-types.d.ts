import React from "react";

export type WithChildrenType = {
  children?: React.ReactNode;
};

export type ImageType = {
  src: string;
  alt?: string;
};

export type ClickableType = {
  onClick: any;
  title?: string;
};

export type VisibleType = {
  display: "block" | "none";
  transitionTime?: number;
};
