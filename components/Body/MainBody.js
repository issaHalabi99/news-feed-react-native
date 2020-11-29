import React, { useEffect, useState } from "react";
import { ListItem, Thumbnail, Text, Left, Body } from "native-base";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import * as ordersActions from "../../store/actions/Post";

import { useSelector, useDispatch } from "react-redux";

const MainBody = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  //   const posts = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(ordersActions.getData()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="" />
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={() => {}}>
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
          <Text>{props.title}</Text>
          <Text note numberOfLines={1}>
            {props.desc}
          </Text>
        </Body>
      </ListItem>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainBody;
