import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Header,
  Left,
  Button,
  Icon,
  Title,
  Body,
  Right,
  Item,
  Input,
  Text
} from "native-base";

class AppHeader extends Component {
  state = {
    search: false
  };

  toggleSearch = () => {
    this.setState(prev => ({ search: !prev.search }));
  };

  render() {
    const HeaderNormal = (
      <Header>
        <Left>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Blog App</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="refresh" onPress={this.props.getPosts} />
          </Button>
          <Button transparent onPress={this.toggleSearch}>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
    );
    const HeaderSearch = (
      <Header searchBar rounded>
        <Item>
          <Icon name="search" />
          <Input placeholder="Search" />
          <Icon name="close" onPress={this.toggleSearch} />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
    return !this.state.search ? HeaderNormal : HeaderSearch;
  }
}

export default connect(
  ({ posts }) => ({ posts }),
  dispatch => ({
    getPosts: () => {
      dispatch({
        type: "FETCH_POSTS",
        payload: fetch("http://10.0.2.2:3000/posts").then(data => data.json())
      });
    }
  })
)(AppHeader);
