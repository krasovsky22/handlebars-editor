import { SidebarArea } from "@/components";
import { WithChildrenType } from "@/components/common-types";
import React, { useState, useContext, createContext, useCallback } from "react";
import { useEditor } from "@craftjs/core";
import { SidebarMenuButtonsFixture } from "@fixtures/sidebar";

type SidebarButtonContainerProps = {
  index: number;
  icon: React.ReactNode;
  title: string;
};

type ContextType = {
  buttonIndexActive: number;
  setButtonIndexActive: (arg1: number) => void;
};

const SidebarAreaContext = createContext<ContextType | null>(null);

const SidebarButtonContainer: React.FC<SidebarButtonContainerProps> = ({ index, icon, title }) => {
  const { buttonIndexActive, setButtonIndexActive } = useContext(SidebarAreaContext)!;

  const isActive = buttonIndexActive === index;
  const buttonOnClick = useCallback(() => {
    if (isActive) {
      return setButtonIndexActive(-1);
    }

    return setButtonIndexActive(index);
  }, [isActive]);

  return (
    <SidebarArea.ButtonContainer onClick={buttonOnClick}>
      <SidebarArea.ButtonContent>
        <SidebarArea.ButtonIcon>{icon}</SidebarArea.ButtonIcon>
        <SidebarArea.ButtonTitle>{title}</SidebarArea.ButtonTitle>
        {isActive && <SidebarArea.ButtonArrow />}
      </SidebarArea.ButtonContent>
    </SidebarArea.ButtonContainer>
  );
};

type SidebarOpenedAreaContainerType = {
  title: string;
};
const SidebarOpenedAreaContainer: React.FC<WithChildrenType & SidebarOpenedAreaContainerType> = ({
  title,
  children,
}) => {
  const { setButtonIndexActive } = useContext(SidebarAreaContext)!;
  return (
    <SidebarArea.OpenedAreaContent>
      <SidebarArea.OpenedAreaInner>
        <SidebarArea.OpenedAreaTitle onClose={() => setButtonIndexActive(-1)}>
          {title}
        </SidebarArea.OpenedAreaTitle>
        <SidebarArea.OpenedAreaBody>{children}</SidebarArea.OpenedAreaBody>
      </SidebarArea.OpenedAreaInner>
    </SidebarArea.OpenedAreaContent>
  );
};

const SidebarAreaContainer: React.FC = () => {
  const [buttonIndexActive, setButtonIndexActive] = useState<number>(0);
  const { enabled, actions, canUndo, canRedo } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  const OpenedAreaData = SidebarMenuButtonsFixture[buttonIndexActive]!;

  return (
    <SidebarAreaContext.Provider value={{ buttonIndexActive, setButtonIndexActive }}>
      <SidebarArea>
        <SidebarArea.Inner>
          {SidebarMenuButtonsFixture.map((element, index) => (
            <SidebarButtonContainer
              index={index}
              {...element}
              key={`${element.title}_${element.openedAreaTitle}_${index}`}
            />
          ))}
        </SidebarArea.Inner>
        <SidebarArea.OpenedArea>
          {OpenedAreaData && (
            <SidebarOpenedAreaContainer title={OpenedAreaData.openedAreaTitle}>
              {OpenedAreaData.openedAreaContent}
            </SidebarOpenedAreaContainer>
          )}
        </SidebarArea.OpenedArea>

        <button disabled={!canUndo} onClick={() => actions.history.undo()}>
          Undo
        </button>

        <button disabled={!canRedo} onClick={() => actions.history.redo()}>
          Redo
        </button>
      </SidebarArea>
    </SidebarAreaContext.Provider>
  );
};
export default SidebarAreaContainer;
