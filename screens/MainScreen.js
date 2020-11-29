import React from "react";
import {
  Content,
  List,
} from "native-base";

import MainBody from '../components/Body/MainBody';

const MainScreen = (props) => {
  return (
    <Content>
      <List>
        <MainBody
          title="new Title"
          desc="descrption what we can do"
          uri="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
        />
      </List>
    </Content>
  );
};

export default MainScreen;
