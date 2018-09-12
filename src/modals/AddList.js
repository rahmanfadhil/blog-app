import React, { Component } from "react";
import { Modal, TextInput } from "react-native";
import {
  View,
  Text,
  Header,
  Body,
  Title,
  Left,
  Button,
  Icon,
  Content,
  Input,
  Container,
  H1
} from "native-base";

export default class AddListModal extends Component {
  state = {
    title: "",
    description: ""
  };

  onInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Modal
        animationType="slide"
        visible={this.props.visible}
        onRequestClose={this.props.toggle}
      >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={this.props.toggle}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Add to List</Title>
            </Body>
          </Header>
          <Content style={{ padding: 30 }}>
            <TextInput
              value={this.state.title}
              placeholder="Name"
              onChangeText={value => this.onInputChange("title", value)}
            />
            <TextInput
              value={this.state.description}
              placeholder="Description"
              onChangeText={value => this.onInputChange("description", value)}
            />
            <Button block style={{ marginTop: 10 }}>
              <Icon name="add" />
              <Text>add to list</Text>
            </Button>
          </Content>
        </Container>
      </Modal>
    );
  }
}
