import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Close: React.FC = ({ ...rest }) => {
  return <FontAwesomeIcon icon={faTimes} {...rest} />;
};
export default Close;
