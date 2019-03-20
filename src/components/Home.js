import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import reducer from "../Redux/reducer";
import SideBar from "./SideBar";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    ingredients: "",
    found_recipes: []
  }

  ingredients = event => {
    this.setState({
      ingredients: event.target.value
    })
  }

  search = event => {
    fetch(`http://api.yummly.com/v1/api/recipes?_app_id=5be7911a&_app_key=2d61365a68e68e6a68fb5c009d01f60f&q=${this.state.ingredients.split(" ").join("+")}&maxResult=100&start=100`)
    .then(res => res.json())
    .then(recipes => {
      this.setState({
        found_recipes : recipes.matches
      })
    })
  }

  mapRecipe = () => {
    return this.state.found_recipes.map(recipe => { // right now recipe is all the recipes
      // console.log("inside mapRecipe", recipe.recipeName)
      return <RecipeCard recipe={recipe} key={recipe.id} />
    })
  }

  render() {
    // console.log(this.state.found_recipes)
    return(
      <div className="home_container">
        <div className="">
          <SideBar />
        </div>

        <div className="home">
          <div className="search_div">
            <input className="search_ingredients form-control" placeholder="Enter Your Ingredients Here..." value={this.state.ingredients} onChange={this.ingredients}/>
            <span className="input-group-btn">
              <button  onClick={this.search} className="btn btn-info btn-search" type="button"><i className="fa fa-search fa-fw"></i> Search</button>
            </span>
          </div>
          <div className="recipe_container">
            {this.mapRecipe()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("inside mapStateToProps", state)
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(Home);
