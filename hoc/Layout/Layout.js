import React from "react";

import MainHeader from "../../components/MainHeader/MainHeader";
import MainScreen from "../../screens/MainScreen";

import { View, Platform, KeyboardAvoidingView, StyleSheet } from "react-native";
import { Container, Content, Item, Input, Icon } from "native-base";
import { Row, Grid } from "react-native-easy-grid";

import * as ordersActions from "../../store/actions/Post";

import { useDispatch } from "react-redux";

import { debounce } from "../../components/debounce";

const Layout = () => {
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
      style={styles.Mainscreen}
    >
      <Container>
        <MainHeader />

        <Grid>
          <Row size={15}>
            <View style={styles.screen}>
              <Content>
                <Item>
                  <Icon active name="ios-search" />
                  <Input
                    placeholder="Search"
                    onChangeText={debounce((value) => {
                      dispatch(ordersActions.isSearch(true));
                      dispatch(ordersActions.valueHandler(value));
                      dispatch(ordersActions.getData());
                    }, 3000)}
                  />
                  <Icon name="ios-people" />
                </Item>
              </Content>
            </View>
          </Row>
          <Row size={85}>
            <MainScreen />
          </Row>
        </Grid>
      </Container>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  Mainscreen: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 5,
  },
});

export default Layout;
