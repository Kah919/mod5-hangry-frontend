import React, { Component } from "react";
import UserCard from "./UserCard";
import LeftSideBar from "./LeftSideBar";
import { addFriendFetch, usersListFetch } from "../Redux/actions";
import { connect } from "react-redux";
import FriendsList from "./FriendsList";



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
    // this.props.filteredListFetch(info);
    // console.log(info)
    // this.setState({
    //   added: !this.state.added
    // })
  }

  filteredUsers = () => {
    return this.props.users.filter(user => {
      return !this.props.user.followeds.find(followed => followed.id === user.id)
    })

    // return this.props.users.filter(user => {
    //
    //   if(user.id === this.props.user.id) {
    //     return false
    //   } else if (user.followers.length >= 1 ) { // if the user has followers
    //     let contains = true
    //     user.followers.forEach(u => { // go through each of the follower
    //       if(u.id === this.props.user.id) { // if follower's id is same as user id
    //         contains = false; // set contains to false
    //       }
    //     })
    //     return contains
    //   } else {
    //     return user
    //   }
    //
    // })
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
