import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { ListItem, Thumbnail, Text, Left, Body, Toast } from "native-base";

import PropTypes from "prop-types";

const MainBody = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp
      onPress={ () =>  props.touchedHandler(props.id) }
      useForeground
    >
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri: props.uri,
            }}
          />
        </Left>
        <Body>
          <Text>{props.title ? props.title : "NO Data Found"}</Text>
          <Text note numberOfLines={1}>
            {props.desc ? props.desc : "NO Data Found"}
          </Text>
        </Body>
      </ListItem>
    </TouchableCmp>
  );
};

MainBody.propTypes = {
  touchedHandler: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
  uri: PropTypes.string,
  id: PropTypes.string,
};

export default MainBody;
