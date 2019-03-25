import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import LeftSideBar from "./LeftSideBar";

class Category extends Component {
  state = {
    found_recipes: []
  }

  componentDidMount = () => {
    return fetch(`http://api.yummly.com/v1/api/recipes?_app_id=5be7911a&_app_key=2d61365a68e68e6a68fb5c009d01f60f&q=${this.props.category}&maxResult=100&start=100`)
    .then(res => res.json())
    .then(recipes => {
      this.setState({
        found_recipes : recipes.matches
      })
    })
  }

  mapRecipe = () => {
    return this.state.found_recipes.map(recipe => { // right now recipe is all the recipes
      return <RecipeCard recipe={recipe} key={recipe.id} />
    })
  }

  recipeIsEmpty = () => {
    return this.state.found_recipes.length > 0 ? this.mapRecipe() : null
  }

  render() {
    return (
      <div className="app">
        <div className="leftsidebar_container">
          <LeftSideBar />
        </div>
        <div className="category_container">{this.recipeIsEmpty()}</div>
      </div>
    )
  }
}


export default Category;
