import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import { useNode, useEditor } from "@craftjs/core";
import styled from "styled-components";

const IndicatorDiv = styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 12px;
  line-height: 12px;
  position: absolute;
  svg {
    fill: #fff;
    width: 15px;
    height: 15px;
  }
`;

type RenderNodeProps = {
  render: React.ReactElement;
};
const RenderNode: React.FC<RenderNodeProps> = ({ render }) => {
  const { actions, query, connectors } = useEditor();
  const {
    id,
    isActive,
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isActive: node.events.selected,
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add("component-selected");
      else dom.classList.remove("component-selected");
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  if (dom === null || !currentRef) {
    return null;
  }

  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
            <IndicatorDiv
              ref={currentRef}
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 2,
              }}
            >
              <h2 className="flex-1 mr-4">{name}</h2>
              {/* {moveable ? (
                <Btn className="mr-2 cursor-move" ref={drag}>
                  <Move />
                </Btn>
              ) : null}
              {id !== ROOT_NODE && (
                <Btn
                  className="mr-2 cursor-pointer"
                  onClick={() => {
                    actions.selectNode(parent);
                  }}
                >
                  <ArrowUp />
                </Btn>
              )} */}
              {/* {deletable ? (
                <Btn
                  className="cursor-pointer"
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <Delete />
                </Btn>
              ) : null} */}
            </IndicatorDiv>,
            document.body,
          )
        : null}
      {render}
    </>
  );
};

export default RenderNode;
