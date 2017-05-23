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

    const sampleIngredientTwo = new Ingredient @ 
      @{} ingredientAmount: "2"
        , ingredientUnit: "ounces"
        , name: "Passable Food"
        , carbs: "2"
        , protein: "3"
        , fat: "7"
        , calories: "1"

    this.state = 
      @{} ingredients:[sampleIngredient, sampleIngredientTwo] 
        , ingredientTitleErr: ""
        , idx: 0

  clearInputs() ::
    const clear = (key) => this.refs[key].value = ""
    Object.keys 
      @ this.refs
      .map @ clear 

  addIngredient = () => ::
    let ingredients = Array.from @  this.state.ingredients
    ingredients.push @ new Ingredient @ 
        @{} ingredientAmount: this.refs.ingredientAmount.value
          , ingredientUnit: this.refs.ingredientUnit.value
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

  reduceTotals(iterable, initial) ::
    return Array.from(iterable)
      .reduce @ _sumByKey, initial

    function _sumByKey(prevObj, nextObj) ::
      const res = {}
      const defaultZero = (num) => Number(num || 0)
      for const key in initial ::
        res[key] = defaultZero(prevObj[key]) + defaultZero(nextObj[key])
      return res

  buildTotals() ::
    let nutritionTotals = this.props.ingredients.map @ 
      (item) => item.getInfo()

    let test = this.reduceTotals @ nutritionTotals
      , @{} carbs:0 , fat:0 , protein: 0 , calories: 0, ingredientAmount:0
    
    return  test
      
  render() ::
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

  getInfo()::
    return @{} carbs: this.carbs
        , fat: this.fat
        , protein: this.protein
        , calories: this.calories 
        , ingredientAmount: this.ingredientAmount


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
