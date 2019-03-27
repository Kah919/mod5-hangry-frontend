import React, { Component } from "react";
import { connect } from "react-redux";
import nutella from "./nutella.gif";
import FriendProfile from "./FriendProfile";


class FriendsList extends Component {
  state = {
    id: null
  }

  viewUser = (followed) => {
    console.log(followed)
    this.setState({
      id: followed.id
    })
  }

  list = () => {
    return this.props.user.followeds.map(followed => {
      return <p className="followed_container" onClick={() => this.viewUser(followed)} >{followed.username}</p>
    })
  }

  friendListColumn = () => {
    return <div className="people_container">
      <h1>Friends List</h1>
      <div>{this.list()}</div>
    </div>
  }

  render() {
    console.log("this is the id state", this.state.id)
    return this.state.id ?
      <FriendProfile userId={this.state.id}/>
      :
      this.props.user.followeds ? this.friendListColumn() : <img className="nutella"src={nutella} alt="nutella"/>
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(FriendsList);
