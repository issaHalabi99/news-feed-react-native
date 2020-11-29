import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from "react-native";
import { ListItem, Thumbnail, Text, Left, Body, Toast } from "native-base";

const MainBody = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp onPress={() => {}} useForeground>
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

export default MainBody;
