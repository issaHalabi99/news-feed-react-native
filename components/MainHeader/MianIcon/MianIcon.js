import React from "react";
import { Icon } from "native-base";

import PropTypes from "prop-types";


const MianIcon = (props) => {
  return <Icon name={props.name} />;
};

MianIcon.propTypes = {
  name: PropTypes.string,
};
export default MianIcon;
