import React, { Component } from "react";
import { Image } from "react-native";
import {
  View,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Icon,
  Right
} from "native-base";

import blog from "../assets/blog.png";

export default class AppSidebar extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Image
          source={blog}
          style={{ width: "100%", height: 170 }}
          resizeMode="cover"
        />
        <View style={{ padding: 10 }}>
          <List>
            <ListItem>
              <Body>
                <Text>Home</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Draft</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text>About</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </View>
      </View>
    );
  }
}
