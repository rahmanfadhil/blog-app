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
  Right,
  Input,
  Item
} from "native-base";

export default class AddPostModal extends Component {
  state = {
    title: "",
    img: "",
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
              <Title>Publish Post</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.props.toggle}>
                <Icon name="close" />
              </Button>
            </Right>
          </Header>
          <Content style={{ padding: 30 }}>
            <Item>
              <Icon active name="create" />
              <Input
                value={this.state.title}
                placeholder="Name"
                onChangeText={value => this.onInputChange("title", value)}
              />
            </Item>
            <Item>
              <Icon active name="camera" />
              <Input
                value={this.state.img}
                placeholder="Image Url"
                onChangeText={value => this.onInputChange("img", value)}
              />
            </Item>
            <Item>
              <Icon active name="list" />
              <Input
                multiline
                value={this.state.content}
                placeholder="Content"
                onChangeText={value => this.onInputChange("content", value)}
              />
            </Item>
            <Button block iconLeft success style={{ marginTop: 10 }}>
              <Icon name="cloud-upload" />
              <Text>publish post</Text>
            </Button>
            <Button block iconLeft style={{ marginTop: 10 }}>
              <Icon name="filing" />
              <Text>Save to Draft</Text>
            </Button>
          </Content>
        </Container>
      </Modal>
    );
  }
}
