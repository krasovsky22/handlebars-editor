import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

const BrushIcon: React.FC = ({ ...rest }) => {
  return <FontAwesomeIcon icon={faPaintBrush} {...rest} />;
};
export default BrushIcon;
