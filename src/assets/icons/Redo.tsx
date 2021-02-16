import React from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const RedoIcon: React.FC<Partial<FontAwesomeIconProps>> = ({ ...rest }) => {
  return <FontAwesomeIcon icon={faRedo} {...rest} />;
};
export default RedoIcon;
