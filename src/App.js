import React from "react";
import { Container, Icon, Fab, View, Drawer } from "native-base";
import PostItem from "./components/PostItem";
import AddPostModal from "./modals/AddPostModal";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";

export default class App extends React.Component {
  state = {
    add_post_modal: false
  };

  toggleAddPostModal = () => {
    this.setState(prev => ({ add_post_modal: !prev.add_post_modal }));
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
            <PostItem />
            <PostItem />
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
          </View>
        </Container>
      </Drawer>
    );
  }
}
