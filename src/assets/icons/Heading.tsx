import React from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faHeading } from "@fortawesome/free-solid-svg-icons";

const BrushIcon: React.FC<Partial<FontAwesomeIconProps>> = ({ ...rest }) => {
  return <FontAwesomeIcon icon={faHeading} {...rest} />;
};
export default BrushIcon;
