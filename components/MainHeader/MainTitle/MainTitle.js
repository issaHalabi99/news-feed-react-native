import React from "react";
import { Title } from "native-base";

import PropTypes from "prop-types";


const MainTitle = (props) => {
  return <Title>{props.title}</Title>;
};

MainTitle.propTypes = {
  title: PropTypes.string,
};


export default MainTitle;
