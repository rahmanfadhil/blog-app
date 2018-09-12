import React, { Component } from "react";
import { Modal } from "react-native";
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
  Right,
  Item,
  Input,
  Form,
  Label
} from "native-base";

export default class EditPostModal extends Component {
  state = {
    title: "",
    content: ""
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
            <Item>
              <Input
                value={this.state.title}
                placeholder="Title"
                onChangeText={value => this.onInputChange("title", value)}
              />
            </Item>
            <Item>
              <Input
                multiline
                placeholder="Content"
                value={this.state.content}
                onChangeText={value => this.onInputChange("content", value)}
              />
            </Item>
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
