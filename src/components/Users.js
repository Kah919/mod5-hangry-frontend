import React, { Component } from "react";
import UserCard from "./UserCard";

class Users extends Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/users")
      .then(res => res.json())
      .then(users => {
        this.setState({
          users
        })
      })
  }

  usercard = () => {
    return this.state.users.map(user => {
      return <UserCard user={user} />
    })
  }

  render() {
    return <div> {this.usercard()} </div>
  }
}
export default Users;
