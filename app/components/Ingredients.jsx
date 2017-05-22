"use strict"
import React, {Component} from "react"

export class Ingredients extends Component ::
  constructor (props) ::
    super(props)
      this.state = 
        @{} ingredients:[] 
          , ingredientTitleErr: ""
          , idx: 0

  clearIngredientInput() ::
    this.refs.ingredientname.value = ""

  addIngredient = () => ::
    let ingredients = Array.from @  this.state.ingredients
    ingredients.push @ new Ingredient @ {name: this.refs.ingredientname.value}
    this.setState @ @{} ingredients: ingredients, idx:this.state.idx + 1, ingredientTitleErr:""
    this.clearIngredientInput()

  warnEmptyTitleField = () => ::
    this.setState @ @{} ingredientTitleErr:"You must provide a name for a new ingredient"


  addIngredientClickHandler = (e) => ::
    this.refs.ingredientname.value == "" 
      ? this.warnEmptyTitleField()
      : this.addIngredient()

  render() ::

    const renderIngredients = (ing, idx) => (<IngredientListing key={idx} idx={idx} title={ing.name}/>)
    let ingredients = this.state.ingredients.map @ renderIngredients
    return @
      <div className="container">
        <div className="row">
            <div className="four columns">
              <input ref="ingredientname" placeholder="Name of ingredient"/>
              <button onClick={this.addIngredientClickHandler}>
                Add Ingredient
              </button>
            </div>            
            <div className="four columns">
              <p ref="ingredientTitleError" className="err">{this.state.ingredientTitleErr}</p>
            </div>            
        </div>                
        {ingredients}
      </div>

class Ingredient ::
  constructor(config) ::
    this.name = config.name

export class IngredientListing extends Component ::
  constructor(props) ::
    super(props)
  render() ::
    return (
      <div className="row" key={this.props.idx}>
        <div className="three columns">
          {this.props.title}
        </div>
        <div className="oneAndOneHalf columns">            
          <label for="carbs">Net Carbs</label>
          <input className="u-full-width recipeInput" placeholder="(g)"/>
        </div>
        <div className="oneAndOneHalf columns">            
          <label for="Protein">Protein</label>
          <input className="u-full-width recipeInput" placeholder="(g)"/>
        </div>
        <div className="oneAndOneHalf columns">            
          <label for="Fat">Fat</label>
          <input className="u-full-width recipeInput" placeholder="(g)"/>
        </div>
        <div className="oneAndOneHalf columns">            
          <label for="Calories">Cal</label>
          <input className="u-full-width recipeInput" placeholder="kcal"/>
        </div>                           
      </div>
    )
