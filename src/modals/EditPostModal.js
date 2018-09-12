import React, { Component } from "react";
import { Modal, TextInput } from "react-native";
import {
  Text,
  Header,
  Body,
  Title,
  Left,
  Button,
  Icon,
  Content,
  Container,
  Right
} from "native-base";

export default class EditPostModal extends Component {
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
              <Title>Edit Post</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.props.toggle}>
                <Icon name="close" />
              </Button>
            </Right>
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
            <Button block iconLeft success style={{ marginTop: 10 }}>
              <Icon name="checkmark" />
              <Text>save post</Text>
            </Button>
          </Content>
        </Container>
      </Modal>
    );
  }
}
