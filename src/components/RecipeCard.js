import React, { Component } from "react";
import { Button, Header, Image, Modal, List, Rating } from 'semantic-ui-react';
import Scraping from "./Scraping";
import { connect } from "react-redux";
import { addToFavoriteFetch } from "../Redux/actions";

class RecipeCard extends Component {

  ingredients = this.props.recipe.ingredients.map((ingredient, idx) => {
    return <li key={idx}>{ingredient}</li>
  })

  card = () => {
    return (
      <div className="polaroid">
        <img className="food_img" src={this.props.recipe.imageUrlsBySize["90"].replace("90-c", "400-c")} alt="food img" />
        <p>{this.props.recipe.recipeName}</p>
      </div>
    )
  }

  rating = () => {
    return <Rating icon='heart' defaultRating={this.props.recipe.rating} maxRating={5} />
  }

  instructions = () => {
    return `https://yummly.com/recipe/${this.props.recipe.id}#directions`
  }

  render() {
    return(
      <div className="recipe_card">
        <Modal trigger={this.card()}>
          <Scraping url={this.instructions}/>
          <Modal.Header className="card_header">{this.props.recipe.recipeName} {this.rating()} </Modal.Header>
          <Modal.Content image>
            <Image wrapped size='big' src={this.props.recipe.imageUrlsBySize["90"].replace("90-c", "600-c")} />
            <Modal.Description>
              <h2>Ingredients</h2>
                <div className="ingredients">
                <List divided verticalAlign='middle'>
                  {this.ingredients}
                </List>
                <p>Cook Time: {Math.floor(this.props.recipe.totalTimeInSeconds / 60)} minutes</p>
                </div>
                <a target="_blank" href={this.instructions()}>Instructions</a>
                <button onClick={() => this.props.addToFavoriteFetch(this.props.recipe)}> Favorite</button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToFavoriteFetch: (recipe) => dispatch(addToFavoriteFetch(recipe))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
