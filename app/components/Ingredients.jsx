"use strict"
import React, {Component} from "react"

export class Ingredients extends Component ::
  constructor (props) ::
    super(props)
    const sampleIngredient = new Ingredient @ 
      @{} ingredientAmount: "1"
        , ingredientUnit: "ounces"
        , name: "Delicous Food"
        , carbs: "15"
        , protein: "16"
        , fat: "17"
        , calories: "18"
    this.state = 
      @{} ingredients:[sampleIngredient] 
        , ingredientTitleErr: ""
        , idx: 0

  clearInputs() ::
    this.refs.ingredientAmount.value = ""
    this.refs.ingredientUnit.value = ""
    this.refs.ingredientname.value = ""
    this.refs.carbs.value = ""
    this.refs.protein.value = ""
    this.refs.fat.value = ""
    this.refs.calories.value = ""

  addIngredient = () => ::
    let ingredients = Array.from @  this.state.ingredients
    ingredients.push @ new Ingredient @ 
        @{} ingredientAmount: this.refs.ingredientAmount.value
          , ingredientUnit: this.refs.ingredientUnit.valu
          , name: this.refs.ingredientname.value 
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
            <label>Amount</label>
          </div>
          <div className="three columns">
            <label>Ingredient</label>
          </div>
          <div className="oneAndOneHalf columns">
            <label>Net Carbs</label>              
          </div>
          <div className="oneAndOneHalf columns">
            <label>Protein</label>            
          </div>
          <div className="oneAndOneHalf columns">
            <label>Fat</label>            
          </div>
          <div className="oneAndOneHalf columns">
            <label>Calories</label>            
          </div>                                                
        </div>
        <div className="row">
          <div className="three columns">
            <input ref="ingredientAmount" className="four columns recipeInput" placeholder="#"/>
            <input ref="ingredientUnit" className="eight columns recipeInput" placeholder="unit"/>                          
          </div>
          <div className="three columns">
            <input ref="ingredientname" className="u-full-width recipeInput" placeholder="Name of ingredient"/>
          </div>
          <div className="oneAndOneHalf columns">             
            <input ref="carbs" className="u-full-width recipeInput" placeholder="(g)"/>
          </div>
          <div className="oneAndOneHalf columns">          
            <input ref="protein" className="u-full-width recipeInput" placeholder="(g)"/>
          </div>
          <div className="oneAndOneHalf columns">           
            <input ref="fat" className="u-full-width recipeInput" placeholder="(g)"/>
          </div>
          <div className="oneAndOneHalf columns">         
            <input ref="calories" className="u-full-width recipeInput" placeholder="(kcal)"/>
          </div>                                    
          <div className="one columns">
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
      (item) => [item.carbs, item.fat, item.protein, item.calories, item.ingredientAmount]
    // Initialize the total variables
    let protein = 0
      , carbs = 0
      , calories = 0
      , fat = 0
      , ingredientAmount = 0
      , ingredientUnit = 0

    // for each four item list in our list of ingredients
    for let e of nutritionTotals ::
      // increment the corresponding nutrient by the new ingredientAmount
      carbs += Number(e[0]) 
      fat += Number(e[1])
      protein += Number(e[2])
      calories += Number(e[3])
      ingredientAmount +=  Number(e[4])
      ingredientUnit += Number(e[5])
    return {carbs, fat, protein, calories, ingredientAmount, ingredientUnit}

  render() ::
    // We got a list of Ingredient instances, so we are going
      // to map through and create four element lists for
      // each ingredient, containing each number

    let {carbs, fat, protein, calories, ingredientAmount} = this.buildTotals()
    return (
        <div className="container">
          <div className="row text-center">
            TOTALS
          </div>
          <div className="row text-center">
            <div className="u-max-width three columns">
              Carbs : {carbs}g
            </div>
            <div className="u-max-width three columns">
              Protein : {protein}g
            </div>
            <div className="u-max-width three columns">
              Fat : {fat}g
            </div>
            <div className="u-max-width three columns">
              Calories : {calories}kcal
            </div>
          </div>
        </div>)

class Ingredient ::
  constructor(config) ::
    Object.assign @ this, config
    /*
    this.name = config.name
    this.carbs = config.carbs + "g"
    this.protein = config.protein + "g"
    this.fat = config.fat + "g"
    this.calories = config.calories + "kcal"
    */

export class IngredientListing extends Component ::
  constructor(props) ::
    super(props)
  render() ::
    let {name, carbs, protein, fat, calories, ingredientAmount, ingredientUnit} = this.props.ingredient
    return (
        <div>
        <div className="row" key={this.props.idx}>
            <div className="three columns">
              <div className="four columns">
                {ingredientAmount}
              </div>
              <div className="eight columns">
                {ingredientUnit}
              </div>
            </div>
            <div className="three columns">
                {name}         
            </div>
            <div className="oneAndOneHalf columns">
                {carbs}g
            </div>
            <div className="oneAndOneHalf columns">
                {protein}g
            </div>
            <div className="oneAndOneHalf columns">
                {fat}g
            </div>
            <div className="oneAndOneHalf columns">
                {calories}kcal
            </div>                        
        </div>
        </div>  
    )
