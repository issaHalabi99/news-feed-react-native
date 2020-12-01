import React, { useCallback } from "react";
import { View, Image, Modal, StyleSheet, Share } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Body,
} from "native-base";
import PropTypes from "prop-types";

const MainModal = (props) => {
  const link = props.link;
  const onShare = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "LINK : " + link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, [link]);

  return (
    <Modal visible={props.visible} animationType="slide">
      <Container
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Content>
          <Card style={{ flex: 1 }}>
            <CardItem header bordered>
              <Text>{props.data ? props.data.title : ""}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri:
                      props.data && props.data.imageUrl
                        ? `https://www.nytimes.com/${props.data.imageUrl.url}`
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
                  }}
                  style={{ height: 200, width: "100%", flex: 1 }}
                />
                <Text>{props.data ? props.data.description : ""}</Text>
              </Body>
            </CardItem>

            <CardItem footer bordered>
              <Text>CATEGORIES : {props.data ? props.data.category : ""} </Text>
            </CardItem>

            <CardItem footer bordered>
              <View style={styles.centered}>
                <Button
                  onPress={onShare}
                  transparent
                  textStyle={{ color: "#87838B" }}
                >
                  <Icon name="share" />
                </Button>
                <Button
                  onPress={() => props.setIsAddMode(false)}
                  transparent
                  textStyle={{ color: "#87838B" }}
                >
                  <Icon name="close" />
                </Button>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centered: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

MainModal.propTypes = {
  visible: PropTypes.bool,
  data: PropTypes.object,
  setIsAddMode: PropTypes.func,
};

export default MainModal;
