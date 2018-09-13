import React, { Component } from "react";
import { Modal } from "react-native";
import { connect } from "react-redux";
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
  Input
} from "native-base";

class EditPostModal extends Component {
  state = { key: 0, title: "", img: "", content: "" };

  UNSAFE_componentWillReceiveProps = nextProps => {
    this.setState(nextProps.data);
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
              <Icon name="checkmark" />
              <Text>save post</Text>
            </Button>
          </Content>
        </Container>
      </Modal>
    );
  }
}

export default connect(state => ({ data: state.edit_post }))(EditPostModal);
