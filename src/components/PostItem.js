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

export default class PostItem extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Learn React Native
          </Text>
        </CardItem>
        <CardItem>
          <Text>
            Lorem ipsum dolor sit amet, an unum atqui latine qui, ex sea nonumes
            gubergren. Postea graecis fastidii an eam, ea mei regione copiosae
            expetendis.
          </Text>
        </CardItem>
        <CardItem>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <Button
              small
              success
              style={{ marginRight: 10 }}
              onPress={this.props.toggleEdit}
            >
              <Icon name="cloud-upload" />
            </Button>
            <Button
              small
              warning
              style={{ marginRight: 10 }}
              onPress={this.props.toggleEdit}
            >
              <Icon name="create" />
            </Button>
            <Button small danger>
              <Icon name="trash" />
            </Button>
          </View>
        </CardItem>
      </Card>
    );
  }
}
