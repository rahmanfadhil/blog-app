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
  View,
  Item,
  Input,
  Text
} from "native-base";
import ListItem from "./components/ListItem";
import AddListModal from "./modals/AddList";
import AppHeader from "./components/AppHeader";

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
        <AppHeader />
        <View style={{ flex: 1, padding: 10 }}>
          <ListItem />
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
