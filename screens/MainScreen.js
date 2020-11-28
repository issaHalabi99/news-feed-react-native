import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";

const MainScreen = (props) => {
  return (
    <Content>
      <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square
              source={{
                uri: "https://www.quanzhanketang.com/css/img_lights.jpg",
              }}
            />
          </Left>
          <Body>
            <Text>Sankhadeep</Text>
            <Text note numberOfLines={1}>
              Its time to build a difference halabi . . .
            </Text>
          </Body>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square
              source={{
                uri: "https://www.quanzhanketang.com/css/img_lights.jpg",
              }}
            />
          </Left>
          <Body>
            <Text>Sankhadeep</Text>
            <Text note numberOfLines={1}>
              Its time to build a difference halabi . . .
            </Text>
          </Body>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square
              source={{
                uri: "https://www.quanzhanketang.com/css/img_lights.jpg",
              }}
            />
          </Left>
          <Body>
            <Text>Sankhadeep</Text>
            <Text note numberOfLines={1}>
              Its time to build a difference halabi . . .
            </Text>
          </Body>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square
              source={{
                uri: "https://www.quanzhanketang.com/css/img_lights.jpg",
              }}
            />
          </Left>
          <Body>
            <Text>Sankhadeep</Text>
            <Text note numberOfLines={1}>
              Its time to build a difference halabi . . .
            </Text>
          </Body>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square
              source={{
                uri: "https://www.quanzhanketang.com/css/img_lights.jpg",
              }}
            />
          </Left>
          <Body>
            <Text>Sankhadeep</Text>
            <Text note numberOfLines={1}>
              Its time to build a difference halabi . . .
            </Text>
          </Body>
        </ListItem>

        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square
              source={{
                uri: "https://www.quanzhanketang.com/css/img_lights.jpg",
              }}
            />
          </Left>
          <Body>
            <Text>Sankhadeep</Text>
            <Text note numberOfLines={1}>
              Its time to build a difference halabi . . .
            </Text>
          </Body>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square
              source={{
                uri: "https://www.quanzhanketang.com/css/img_lights.jpg",
              }}
            />
          </Left>
          <Body>
            <Text>Sankhadeep</Text>
            <Text note numberOfLines={1}>
              Its time to build a difference halabi . . .
            </Text>
          </Body>
        </ListItem>
      </List>
    </Content>
  );
};

export default MainScreen;
