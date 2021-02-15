import { SidebarArea } from "@/components";
import { Text } from "@components/editor-elements";
import { WithChildrenType } from "@/components/common-types";
import { BrushIcon } from "@assets/icons";
import React, { useState, useContext, createContext, useCallback } from "react";
import { useEditor, Element } from "@craftjs/core";

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
  const [buttonIndexActive, setButtonIndexActive] = useState<number>(-1);
  const { enabled, connectors, actions, canUndo, canRedo } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  return (
    <SidebarAreaContext.Provider value={{ buttonIndexActive, setButtonIndexActive }}>
      <SidebarArea>
        <SidebarArea.Inner>
          <SidebarButtonContainer icon={<BrushIcon />} title="Design" index={0} />
          <SidebarButtonContainer icon={<BrushIcon />} title="Design" index={1} />
          <SidebarButtonContainer icon={<BrushIcon />} title="Design" index={2} />
          <SidebarButtonContainer icon={<BrushIcon />} title="Design" index={3} />
          <button disabled={!canUndo} onClick={() => actions.history.undo()}>
            Undo
          </button>

          <button disabled={!canRedo} onClick={() => actions.history.redo()}>
            Redo
          </button>
        </SidebarArea.Inner>
        <SidebarArea.OpenedArea>
          {buttonIndexActive === 0 && (
            <SidebarOpenedAreaContainer title="Global Design">
              <button
                ref={(ref) => connectors.create(ref, <Text text="Hello new world" />)}
              ></button>
            </SidebarOpenedAreaContainer>
          )}
          {buttonIndexActive === 1 && (
            <SidebarOpenedAreaContainer title="Global Design 1">
              Some content 1
            </SidebarOpenedAreaContainer>
          )}
          {buttonIndexActive === 2 && (
            <SidebarOpenedAreaContainer title="Global Design 2">
              Some content 2
            </SidebarOpenedAreaContainer>
          )}
          {buttonIndexActive === 3 && (
            <SidebarOpenedAreaContainer title="Global Design 3">
              Some content 3
            </SidebarOpenedAreaContainer>
          )}
        </SidebarArea.OpenedArea>
      </SidebarArea>
    </SidebarAreaContext.Provider>
  );
};
export default SidebarAreaContainer;
