"use strict"
import React, {Component} from "react"

export class Ingredients extends Component ::
  constructor (props) ::
    super(props)
    const sampleIngredient = new Ingredient @ 
      @{} name: "Delicous Food"
        , carbs: "15"
        , protein: "16"
        , fat: "17"
        , calories: "18"
    this.state = 
      @{} ingredients:[sampleIngredient] 
        , ingredientTitleErr: ""
        , idx: 0

  clearInputs() ::
    this.refs.ingredientname.value = ""
    this.refs.carbs.value = ""
    this.refs.protein.value = ""
    this.refs.fat.value = ""
    this.refs.calories.value = ""

  addIngredient = () => ::
    let ingredients = Array.from @  this.state.ingredients
    ingredients.push @ new Ingredient @ 
        @{} name: this.refs.ingredientname.value 
          , carbs: this.refs.carbs.value
          , protein: this.refs.protein.value
          , fat: this.refs.fat.value
          , calories: this.refs.calories.value
    this.setState @ @{} ingredients: ingredients, idx:this.state.idx + 1, ingredientTitleErr:""
    this.clearInputs()

  warnEmptyTitleField = () => ::
    this.setState @ @{} ingredientTitleErr:"You must provide a name for a new ingredient"


  addIngredientClickHandler = (e) => ::
    this.refs.ingredientname.value == "" 
      ? this.warnEmptyTitleField()
      : this.addIngredient()

  render() ::

    const renderIngredients = (ing, idx) => (<IngredientListing key={idx} idx={idx} title={ing.name} carbs={ing.carbs} protein={ing.protein} fat={ing.fat} calories={ing.calories}/>)
    let ingredients = this.state.ingredients.map @ renderIngredients
    return @
      <div className="container">
        <div className="row">
            <div className="three columns">
              <label>Ingredient</label>
              <input ref="ingredientname" className="u-full-width recipeInput" placeholder="Name of ingredient"/>
            </div>
            <div className="oneAndOneHalf columns">
              <label>Carbs</label>              
              <input ref="carbs" className="u-full-width recipeInput" placeholder="(g)"/>
            </div>
            <div className="oneAndOneHalf columns">
              <label>Protein</label>            
              <input ref="protein" className="u-full-width recipeInput" placeholder="(g)"/>
            </div>
            <div className="oneAndOneHalf columns">
              <label>Fat</label>            
              <input ref="fat" className="u-full-width recipeInput" placeholder="(g)"/>
            </div>
            <div className="oneAndOneHalf columns">
              <label>Calories</label>            
              <input ref="calories" className="u-full-width recipeInput" placeholder="(kcal)"/>
            </div>                                    
            <div className="three columns">
              <label>{"'"}</label>
              <button onClick={this.addIngredientClickHandler}> Add Ingredient 
              </button>
            </div>                                          
        </div>             
        {ingredients}
      </div>

class Ingredient ::
  constructor(config) ::
    this.name = config.name
    this.carbs = config.carbs
    this.protein = config.protein
    this.fat = config.fat
    this.calories = config.calories

export class IngredientListing extends Component ::
  constructor(props) ::
    super(props)
  render() ::
    return (
    <div>
      <div className="row" key={this.props.idx}>
        <div className="three columns text-center">
          {this.props.title}         
        </div>
        <div className="oneAndOneHalf columns text-center">
          {this.props.carbs}
        </div>
        <div className="oneAndOneHalf columns text-center">
          {this.props.protein}
        </div>
        <div className="oneAndOneHalf columns text-center">
          {this.props.fat}
        </div>
        <div className="oneAndOneHalf columns text-center">
          {this.props.calories}
        </div>                        
      </div>
    </div>  
    )
