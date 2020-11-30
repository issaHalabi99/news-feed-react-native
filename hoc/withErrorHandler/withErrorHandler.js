import React, { useState, useEffect } from "react";
import { View, Modal } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Text, Button } from 'native-base';
const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    let [errorValue, setErrorValue] = useState(false);
    let [merror, setMerorr] = useState("");

    let reqInterceptor = axios.interceptors.request.use((req) => {
      setErrorValue(false);
      return req;
    });

    let resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        console.log(err);
        setErrorValue(true);
        setMerorr(err.message);
        return Promise.reject({ ...err });
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
      setErrorValue(false);
    };

    return (
      <View style={{flex: 1}}>
        <Modal visible={errorValue} animationType="slide">
          <Container>
            <Header />
            <Content>
              <Card>
                <CardItem>
                  <Body>
                    <Text>{merror}</Text>
                    <Button small primary onPress={errorConfirmedHandler}>
                      <Text>Cancel</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </Modal>
        <WrappedComponent {...props} />
      </View>
    );
  };
};

export default withErrorHandler;
