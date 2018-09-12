import React, { Component } from "react";
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

export default class AppHeader extends Component {
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
