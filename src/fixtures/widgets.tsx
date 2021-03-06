import React from "react";
import { Text, Container } from "@components/editor-elements";
import { HeadingIcon, SquareIcon } from "@assets/icons";
import { Element } from "@craftjs/core";

export type WidgetItemType = {
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
};

export const WidgetsFixture: WidgetItemType[] = [
  {
    title: "Container",
    icon: <SquareIcon size="lg" />,
    component: <Element canvas is={Container} />,
  },
  {
    title: "Text",
    icon: <HeadingIcon size="lg" />,
    component: <Text text="Hello new world" />,
  },
];
