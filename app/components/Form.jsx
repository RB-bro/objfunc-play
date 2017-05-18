import React from 'react'
import {Button} from './Button.jsx'

export class Form extends React.Component ::
  constructor (props) ::
    super(props)
    this.state = {
    value: "add",
    };
  render() ::
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
          <div className="five columns">
            <label for="recipeTime">Ingredients</label>
            <input className="two columns recipeInput" placeholder="#" id="ingredientNum"/>
            <input className="ingredient columns recipeInput" type="title" placeholder="Ingredient" id="ingredient"/>
            <div className="two columns">
              <button onClick={() => alert('click')}>
              {this.state.value}
              </button>
            </div>            
          </div>
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

