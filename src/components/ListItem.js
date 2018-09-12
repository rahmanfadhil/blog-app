import React, { Component } from "react";
import { Card, CardItem, Text } from "native-base";

export default class ListItem extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Text style={{ fontSize: 19, fontWeight: "500" }}>
            Learn React Native
          </Text>
        </CardItem>
      </Card>
    );
  }
}
