import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { Toast } from "native-base";

import * as ordersActions from "../store/actions/Post";

import { useSelector, useDispatch } from "react-redux";

import MainBody from "../components/Body/MainBody";

const MainScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const data = useSelector((state) => state.posts.newsFeed);
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
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={(d) => (
          <MainBody
            title={d.item.title}
            desc={d.item.description}
            uri={
              d.item.imageUrl
                ? `https://www.nytimes.com/${d.item.imageUrl.url}`
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
            }
          />
        )}
        onEndReachedThreshold={0.01}
        onEndReached={async () => {
          await dispatch(ordersActions.addData());
          await dispatch(ordersActions.getData());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainScreen;
