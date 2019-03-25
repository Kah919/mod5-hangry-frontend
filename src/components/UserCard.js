import React, { Component } from "react";

class UserCard extends Component {
  render() {
    return <p onClick={this.props.add}>{this.props.user.username} <span><i class="fas fa-user-plus"></i></span></p>
  }
}

export default UserCard;
