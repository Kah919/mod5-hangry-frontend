import React, { Component } from "react";

class UserCard extends Component {
  render() {
    return <p onClick={(user) => this.props.add(this.props)}>{this.props.user.username} <span><i className="fas fa-user-plus"></i></span></p>
  }
}

export default UserCard;
