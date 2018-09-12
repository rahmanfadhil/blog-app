import React from "react";
import {
  Header,
  Container,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Fab,
  Card,
  CardItem,
  H4
} from "native-base";
import { View, Text } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Blog App</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="refresh" />
            </Button>
          </Right>
        </Header>
        <View style={{ flex: 1, padding: 10 }}>
          <Card>
            <CardItem>
              <Text style={{ fontSize: 19, fontWeight: "500" }}>
                Learn React Native
              </Text>
            </CardItem>
          </Card>
          <Fab
            position="bottomRight"
            style={{ backgroundColor: "#5067FF" }}
            onPress={() => console.log("HELLO")}
          >
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}
