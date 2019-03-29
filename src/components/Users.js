import React, { Component } from "react";
import UserCard from "./UserCard";
import LeftSideBar from "./LeftSideBar";
import { addFriendFetch, usersListFetch } from "../Redux/actions";
import { connect } from "react-redux";
import FriendsList from "./FriendsList";
import nutella from "./nutella.gif";

class Users extends Component {
  state = {
    users: [],
    // added: false
  }

  componentDidMount = () => {
    this.props.usersListFetch()
  }

  add = friendInfo => {
    console.log(friendInfo)
    let info = {myId: this.props.user.id, friendInfo: friendInfo.user.id}
    this.props.addFriendFetch(info);
  }

  filteredUsers = () => {
    return this.props.users.filter(user => {
      // console.log("this", user.id)
      // console.log("filtered", this.props.user.id)
      return this.props.user.followeds ? !this.props.user.followeds.find(followed => (followed.id === user.id) || (user.id === this.props.user.id)) : <img className="nutella"src={nutella} alt="nutella"/>
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
    console.log("inside the users", this.props.users)
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
    user: state.user,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFriendFetch: (info) => dispatch(addFriendFetch(info)),
    usersListFetch: () => dispatch(usersListFetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
