import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardItem, Text, Button, Icon, View } from "native-base";

class PostItem extends Component {
  _editPost = () => {
    this.props.setEditPost(this.props.data);
    this.props.toggle();
  };

  render() {
    return (
      <Card>
        <CardItem>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            {this.props.data.title}
          </Text>
        </CardItem>
        <CardItem>
          <Text>{this.props.data.content}</Text>
        </CardItem>
        <CardItem>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <Button small success style={{ marginRight: 10 }}>
              <Icon name="cloud-upload" />
            </Button>
            <Button
              small
              warning
              style={{ marginRight: 10 }}
              onPress={this._editPost}
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

export default connect(
  state => ({ state }),
  dispatch => ({
    setEditPost: data => dispatch({ type: "SET_EDIT_POST", payload: data })
  })
)(PostItem);
