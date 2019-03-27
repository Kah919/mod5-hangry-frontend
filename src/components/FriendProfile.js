import React, { Component } from "react";
import LeftSideBar from "./LeftSideBar";
import { connect } from "react-redux";
import { showFriendFetch } from "../Redux/actions";

class FriendProfile extends Component {

  componentDidMount = () => {
    this.props.showFriendFetch(this.props.userId)
  }

  showInfo = () => {
    return (
      <div >
      <div className="favorite_container">
      <ol className="carousel-indicators">
      {this.props.friend.recipes ? this.dataSlide() : null}
      </ol>
        <h1 className="carousel_name"> {this.props.friend.username}'s Favorite! </h1>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">


          <div className="carousel-inner">
            {this.props.friend.recipes ? this.favoriteRecipes() : null}
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      </div>
    )
  }

  dataSlide = () => {
    return this.props.user.recipes.map((recipe, id) => {
        return (<li data-target="#myCarousel" data-slide-to={id} className={id == 0 ? "active carousel_list": "carousel_list"}></li>)
    })
  }

  favoriteRecipes = () => {
    return this.props.friend.recipes.map((recipe, id) => {
      return (
        <div className={id == 0 ? "item active": "item"}>
        <img src={recipe.imageUrlsBySize} alt="no pics"/>
          <h1 className="carousel_name">{recipe.recipeName}</h1>
        </div>
      )
    })
  }

    dataSlide = () => {
      return this.props.friend.recipes.map((recipe, id) => {
          return (<li data-target="#myCarousel" data-slide-to={id} className={id == 0 ? "active carousel_list": "carousel_list"}></li>)
      })
    }

  render() {
    return(
      this.props.friend.recipes ? this.showInfo() : null
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showFriendFetch: (userId) => dispatch(showFriendFetch(userId))
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    friend: state.friend
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendProfile);
