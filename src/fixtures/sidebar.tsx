import { BrushIcon } from "@/assets/icons";
import React, { ReactNode } from "react";
import { Widgets } from "@/containers";

export type SidebarMenuButtonType = {
  title: string;
  icon: ReactNode;
  openedAreaTitle: string;
  openedAreaContent: ReactNode;
};

export const SidebarMenuButtonsFixture: SidebarMenuButtonType[] = [
  {
    title: "Widgets",
    icon: <BrushIcon />,
    openedAreaTitle: "Widgets",
    openedAreaContent: <Widgets />,
  },
];
