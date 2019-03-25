import React, { Component } from "react";
import UserCard from "./UserCard";
import LeftSideBar from "./LeftSideBar";

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

  add = event => {
    console.log(event.target.innerText)
  }

  usercard = () => {
    return this.state.users.map(user => {
      return <UserCard user={user} key={user.id} add={this.add} />
    })
  }

  render() {
    return (
      <div className="app">
        <div className="leftsidebar_container"> <LeftSideBar /> </div>
        <div className="userlist"> {this.usercard()} </div>
      </div>
    )
  }
}
export default Users;
