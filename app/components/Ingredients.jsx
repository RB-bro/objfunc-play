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

  // Instead of that big long addition of all the individual things
      // lets just pass the ingredient in, and let IngredientListing
      // handle it
  renderIngredients = (ing, idx) => :: 
      return (<IngredientListing key={idx} idx={idx} ingredient={ing}/>)

  render() ::

    let ingredients = this.state.ingredients.map @ this.renderIngredients

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
        <TotalsView ingredients={this.state.ingredients}/>
      </div>


class TotalsView extends Component ::
  constructor(props) ::
    super(props)

  buildTotals() ::
    let nutritionTotals = this.props.ingredients.map @ 
      (item) => [item.carbs, item.fat, item.protein, item.calories]
    // Initialize the total variables
    let protein = 0
      , carbs = 0
      , calories = 0
      , fat = 0

    // for each four item list in our list of ingredients
    for let e of nutritionTotals ::
      // increment the corresponding nutrient by the new amount
      carbs += Number(e[0]) 
      fat += Number(e[1])
      protein += Number(e[2])
      calories += Number(e[3])
    return {carbs, fat, protein, calories}

  render() ::
    // We got a list of Ingredient instances, so we are going
      // to map through and create four element lists for
      // each ingredient, containing each number

    let {carbs, fat, protein, calories} = this.buildTotals()
    return (
        <div className="container">
          <div className="row text-center">
            TOTALS
          </div>
          <div className="row">
            <div className="u-max-width three columns">
              Carbs : {carbs}
            </div>
            <div className="u-max-width three columns">
              Protein : {protein}
            </div>
            <div className="u-max-width three columns">
              Fat : {fat}
            </div>
            <div className="u-max-width three columns">
              Calories : {calories}
            </div>
          </div>
        </div>)

class Ingredient ::
  constructor(config) ::
    Object.assign @ this, config
    /*
    this.name = config.name
    this.carbs = config.carbs
    this.protein = config.protein
    this.fat = config.fat
    this.calories = config.calories
    */

export class IngredientListing extends Component ::
  constructor(props) ::
    super(props)
  render() ::
    let {name, carbs, protein, fat, calories} = this.props.ingredient
    return (
        <div>
        <div className="row" key={this.props.idx}>
            <div className="three columns text-center">
                {name}         
            </div>
            <div className="oneAndOneHalf columns text-center">
                {carbs}
            </div>
            <div className="oneAndOneHalf columns text-center">
                {protein}
            </div>
            <div className="oneAndOneHalf columns text-center">
                {fat}
            </div>
            <div className="oneAndOneHalf columns text-center">
                {calories}
            </div>                        
        </div>
        </div>  
    )
