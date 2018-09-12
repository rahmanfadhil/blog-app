import React, { Component, Fragment } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import EditPostModal from "../modals/EditPostModal";

class PostList extends Component {
  state = {
    edit_post_modal: false
  };

  componentDidMount = () => {
    this.props.getPosts();
  };

  _renderItem = data => {
    return <PostItem data={data.item} toggle={this._toggleEditPostModal} />;
  };

  _toggleEditPostModal = () => {
    this.setState(prev => ({
      edit_post_modal: !prev.edit_post_modal
    }));
  };

  render() {
    return this.props.state.loading ? (
      <ActivityIndicator />
    ) : (
      <Fragment>
        <FlatList data={this.props.state.data} renderItem={this._renderItem} />
        <EditPostModal
          visible={this.state.edit_post_modal}
          toggle={this._toggleEditPostModal}
        />
      </Fragment>
    );
  }
}

export default connect(
  state => ({ state }),
  dispatch => ({
    getPosts: () =>
      dispatch({
        type: "FETCH_POSTS",
        payload: fetch("http://10.0.2.2:3000/posts").then(data => data.json())
      })
  })
)(PostList);
