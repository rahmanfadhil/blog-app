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
  View
} from "native-base";
import ListItem from "./components/ListItem";
import AddListModal from "./modals/AddList";

export default class App extends React.Component {
  state = {
    add_list_modal: false
  };

  toggleAddListModal = () => {
    this.setState(prev => ({ add_list_modal: !prev.add_list_modal }));
  };

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
          <ListItem />
          <Fab
            position="bottomRight"
            style={{ backgroundColor: "#5067FF" }}
            onPress={this.toggleAddListModal}
          >
            <Icon name="add" />
          </Fab>
          <AddListModal
            visible={this.state.add_list_modal}
            toggle={this.toggleAddListModal}
          />
        </View>
      </Container>
    );
  }
}
