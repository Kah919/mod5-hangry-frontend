import React, { Component } from "react";
import { Button, Header, Image, Modal, List, Rating } from 'semantic-ui-react'

class RecipeCard extends Component {

  ingredients = this.props.recipe.ingredients.map(ingredient => {
    return <li>{ingredient}</li>
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
    // console.log(this.state)
    return(
      <div className="recipe_card">
        <Modal trigger={this.card()}>
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
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

// <a href=`https://yummly.com/recipe/${this.props.recipe.id}`>Google</a>


export default RecipeCard;
