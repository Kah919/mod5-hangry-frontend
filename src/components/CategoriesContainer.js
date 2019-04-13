import React, { Component } from "react";
import Category from "./Category";
import LeftSideBar from "./LeftSideBar";


class CategoriesContainer extends Component {

  state = {
    categories: [],
    category: ""
  }

  componentDidMount = () => {
    // fetch("https://localhost:3000/api/v1/categories")
    fetch("https://hangry-fapoon.herokuapp.com/api/v1/categories")
    .then(res => res.json())
    .then(categories => {
      this.setState({
        categories
      })
    })
  }

  categories = () => {
    return this.state.categories.map(category => {
      return <div className="category_card"  key={category.id} onClick={name => this.categoryPage(category.name)}>
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
      <div className="category_background">
        <h1 className="category_header"> Categories </h1>
        <div className="app home">
          <div className="leftsidebar_container">
            <LeftSideBar />
          </div>
          <div>{this.displayCategory()}</div>
        </div>
      </div>
    )
  }
}


export default CategoriesContainer;
