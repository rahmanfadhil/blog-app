import React, { Component } from "react";
import {
  Card,
  CardItem,
  Text,
  Right,
  Button,
  Icon,
  Body,
  View
} from "native-base";

export default class ListItem extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Learn React Native
          </Text>
        </CardItem>
        <CardItem>
          <Text>Todo Description</Text>
        </CardItem>
        <CardItem>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Button small iconLeft success style={{ marginRight: 10 }}>
              <Icon name="checkmark-circle" />
              <Text>Done</Text>
            </Button>
            <Button small iconLeft warning style={{ marginRight: 10 }}>
              <Icon name="create" />
              <Text>Edit</Text>
            </Button>
            <Button small iconLeft danger>
              <Icon name="trash" />
              <Text>Remove</Text>
            </Button>
          </View>
        </CardItem>
      </Card>
    );
  }
}
