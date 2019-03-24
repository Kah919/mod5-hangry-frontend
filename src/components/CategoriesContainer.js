import React, { Component } from "react";

class CategoriesContainer extends Component {

  state = {
    categories: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/categories")
    .then(res => res.json())
    .then(categories => {
      this.setState({
        categories
      })
    })
  }

  categories = () => {
    return this.state.categories.map(category => {
      return <li>{category.name}</li>
    })
  }

  render() {
    console.log("from categories", this.categories())
    return (
      <div>{this.categories()}</div>
    )
  }
}


export default CategoriesContainer;
