import React, { Component } from "react";
import UserCard from "./UserCard";
import LeftSideBar from "./LeftSideBar";
import { addFriendFetch } from "../Redux/actions";
import { connect } from "react-redux";
import FriendsList from "./FriendsList";


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

  add = friendInfo => {
    console.log(friendInfo)
    let info = {myId: this.props.user.id, friendInfo: friendInfo.user.id}
    this.props.addFriendFetch(info);
    console.log(info)
  }

  filteredUsers = () => {
    return this.state.users.filter(user => {

      if(user.id === this.props.user.id) {
        return false
      } else if (user.followers.length >= 1 ) { // if the user has followers
        let contains = true
        user.followers.forEach(u => { // go through each of the follower
          if(u.id === this.props.user.id) { // if follower's id is same as user id
            contains = false; // set contains to false
          }
        })
        return contains
      } else {
        return user
      }

    })
  }

  usercard = () => {
    return this.filteredUsers().map(user => {
      return <UserCard user={user} key={user.id} add={(userInfo) => this.add(userInfo)} />
    })
  }

  userListColumn = () => {
    return <div className="addfriends">
      <h1> User's List </h1>
      {this.usercard()}
    </div>
  }

  render() {
    return (
      <div className="app">
        <div className="leftsidebar_container"> <LeftSideBar /> </div>
        <div className="userlist">
          <div className="people_container">{this.userListColumn()}</div>
          <div className="friendslist"><FriendsList /></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFriendFetch: (info) => dispatch(addFriendFetch(info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
