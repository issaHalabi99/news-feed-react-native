import React from "react";
import { Header, Left, Icon, Title, Right, Button } from "native-base";
import MianIcon from "./MianIcon/MianIcon";
import MainTitle from "./MainTitle/MainTitle";

const MainHeader = () => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <MianIcon name="home" />
        </Button>
      </Left>
      <Right>
        <MainTitle title="NEWS FEED" />
      </Right>
    </Header>
  );
};

export default MainHeader;
