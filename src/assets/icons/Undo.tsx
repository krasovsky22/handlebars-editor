import React from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

const UndoIcon: React.FC<Partial<FontAwesomeIconProps>> = ({ ...rest }) => {
  return <FontAwesomeIcon icon={faUndo} {...rest} />;
};
export default UndoIcon;
