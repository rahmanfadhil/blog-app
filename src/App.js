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
  Text,
  Drawer
} from "native-base";
import ListItem from "./components/ListItem";
import AddListModal from "./modals/AddList";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";

export default class App extends React.Component {
  state = {
    add_list_modal: false
  };

  toggleAddListModal = () => {
    this.setState(prev => ({ add_list_modal: !prev.add_list_modal }));
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<AppSidebar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <AppHeader openDrawer={this.openDrawer} />
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
      </Drawer>
    );
  }
}
