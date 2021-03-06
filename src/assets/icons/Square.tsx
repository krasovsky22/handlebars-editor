import React from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

const SquareIcon: React.FC<Partial<FontAwesomeIconProps>> = ({ ...rest }) => {
  return <FontAwesomeIcon icon={faSquare} {...rest} />;
};
export default SquareIcon;
