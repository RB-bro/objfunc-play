import React from 'react'
import {Button} from './Button.jsx'
import Testing from './Testing.jsx'

export class Form extends React.Component ::
  constructor (props) ::
    super(props)
      this.state = {
        ingredients: ['thyme', 'sugar', 'ass'],
        idx: 0,
        name: 'bacon',
      };

  addIngredient = (obj) => ::
    console.log @ obj
    oldIngredients = this.state.ingredients
    newIngredients = oldIngredients.append(obj.name)
    this.setState @ @{} ingredients: newIngredients, idx:this.state.idx + 1

  render() ::
    const renderTesting = (item, idx) => (<Testing num={idx} title={item}/>)
    let ingredients = this.state.ingredients.map @ renderTesting
    console.log @ ingredients
    return @
      <form>
        <div className="row">
          <div className="four columns">
            <label for="recipeTitle">Recipe title</label>
            <input className="u-full-width recipeInput" type="title" placeholder="What do you call this recipe?" id="recipeTitle"/>
          </div>
        </div>
        <div className="row">
          <div className="four columns">
            <label for="recipeType">Recipe Type</label>
            <select className="u-full-width" id="exampleRecipeType">
              <option value="Option 1"></option>
              <option value="Option 2">Meal</option>
              <option value="Option 3">Snack</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="four columns">
            <label for="recipeTime">Recipe Time</label>
            <input className="u-full-width recipeInput" type="title" placeholder="Total prep and cook time?" id="recipeTime"/>
          </div>
        </div>        
        <div className="row">
            <Testing />        
        </div>
        <div className="row">
            <div className="two columns">
              <button onClick={() => this.addIngredient({ingredientName: this.state.name})}>
                Add Ingredient
              </button>
            </div>            
            {ingredients}
        </div>                
        <div className="row">
          <div className="eight columns">          
            <label for="exampleMessage">Message</label>
            <textarea className="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
            <label className="example-send-yourself-copy">
              <input type="checkbox"/>
              <span className="label-body">Send a copy to yourself</span>
            </label>
            <input className="button-primary" type="submit" value="Submit"/>
          </div>
        </div>
      </form>

