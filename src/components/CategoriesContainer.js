import React, { Component } from "react";
import Category from "./Category";

class CategoriesContainer extends Component {

  state = {
    categories: [],
    category: ""
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
      return <div className="category_card" onClick={name => this.categoryPage(category.name)}>
          <img src={category.img} alt="null" />
          <h1>{category.name}</h1>
      </div>
    })
  }

  categoryPage = (category) => {
    this.setState({
      category: category.toLowerCase()
    })
  }

  displayCategory = () => {
    if(this.state.category) {
      return <Category category={this.state.category}/>
    } else {
      return (<div className="category_container">{this.categories()}</div>)
    }
  }

  render() {

    return (
      <div>{this.displayCategory()}</div>
    )
  }
}


export default CategoriesContainer;
