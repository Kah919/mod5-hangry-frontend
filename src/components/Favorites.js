import React, { Component } from "react";
import { connect } from "react-redux";
import LeftSideBar from "./LeftSideBar";


class Favorites extends Component {
  favoriteRecipes = () => {
    return this.props.user.recipes.map((recipe, id) => {
      return (
        <div className={id == 0 ? "item active": "item"}>
        <img src={recipe.imageUrlsBySize} alt="no pics"/>
            <h1 className="carousel_name">{recipe.recipeName}</h1>
        </div>
      )
    })
  }

  dataSlide = () => {
    return this.props.user.recipes.map((recipe, id) => {
        return (<li data-target="#myCarousel" data-slide-to={id} className={id == 0 ? "active carousel_list": "carousel_list"}></li>)
    })
  }

  render() {
    return(
      <div className="app">
        <div className="leftsidebar_container" >
          <LeftSideBar />
        </div>

        <div className ="favorite_body">
        <div className="favorite_container">
        <ol className="carousel-indicators">
        {this.props.user.recipes ? this.dataSlide() : null}
        </ol>
          <h1 className="carousel_name"> {this.props.user.username}'s Favorite! </h1>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">


            <div className="carousel-inner">
              {this.props.user.recipes ? this.favoriteRecipes() : null}
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
      </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Favorites);
