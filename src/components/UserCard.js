import React, { Component } from "react";

class UserCard extends Component {
  render() {
    return (<p>{this.props.user.username}</p>)
  }
}

export default UserCard;
