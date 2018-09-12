import React from "react";
import { Provider } from "react-redux";
import { FlatList } from "react-native";
import { Container, Icon, Fab, View, Drawer } from "native-base";

import PostItem from "./components/PostItem";
import AddPostModal from "./modals/AddPostModal";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import EditPostModal from "./modals/EditPostModal";

import store from "./store";

export default class App extends React.Component {
  state = {
    add_post_modal: false,
    edit_post_modal: false
  };

  toggleAddPostModal = () => {
    this.setState(prev => ({ add_post_modal: !prev.add_post_modal }));
  };

  toggleEditPostModal = () => {
    this.setState(prev => ({ edit_post_modal: !prev.edit_post_modal }));
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <Provider store={store}>
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
              <PostItem toggleEdit={this.toggleEditPostModal} />
              <Fab
                position="bottomRight"
                style={{ backgroundColor: "#5067FF" }}
                onPress={this.toggleAddPostModal}
              >
                <Icon name="add" />
              </Fab>
              <AddPostModal
                visible={this.state.add_post_modal}
                toggle={this.toggleAddPostModal}
              />
              <EditPostModal
                visible={this.state.edit_post_modal}
                toggle={this.toggleEditPostModal}
              />
            </View>
          </Container>
        </Drawer>
      </Provider>
    );
  }
}
