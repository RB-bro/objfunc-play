import React, {Component} from 'react'
import {Ingredients} from './Ingredients.jsx'

import {h, div, label, textarea, 
        input, span, form, option, 
        select, button} from 'react-hyperscript-helpers'


// Just a start


const row = (children) =>
  typeof children == 'string' 
    ?  div @ {className:"row"}, [children]
    :  div @ {className:"row"}, children
  
class Recipe ::

    constructor() ::
        self.ingredients = []
        self.steps = []
        self.nutritionFacts = null


export class ViewRecipes extends Component ::
  constructor(props) ::
    super(props)
    this.store = this.props.store

  render() ::
    let recipes = this.store.getRecipes()
    console.log @: recipes
    let key = 0
    let items = recipes.map @ item =>
      div @ {key:key++}, item.name
    return div @ [items]

export class InputRecipe extends Component ::
    constructor(props) ::
      super(props)
      this.recipeStore = this.props.store

    addRecipe(evt) ::
      console.log @ evt
      //evt.preventDefault()
      let view = this.recipeStore.log("Banana patch")
      console.log @ "View from recipestore", view
      console.log @ "Log from recipe store", view._log

    render() ::
      return form @ {onSubmit:(evt)=>this.addRecipe(evt)}, @[]
        row @ @[]
          div @ {className:"four columns"}, 
            @[] label @ "Recipe Title", {for:"recipeTitle"}
              , input @ 
                @{} className:"u-full-width recipeInput", type:"title"
                  , placeholder:"What do you want to call this recipe"
                  , id: "recipeTitle"
                  , ref: "title"

        , row @ @[]
            div @ {className:"four columns"}, 
              @[] label @ "Recipe Type", {for:"recipeType"}
                , select @ {className:"u-full-width", id:"exampleRecipeType"}
                  @[] option @ "one",  {value:"Option 1"}
                    , option @ "two",  {value:"Option 2"}
                    , option @ "three",  {value:"Option 3"}

        , row @ @[] h @ Ingredients
        , row @ @[]
            div @ {className:"four columns"}, 
              @[] label @ "Recipe Time", {for:"recipeTime"}
                , input @
                  {className:"u-full-width recipeInput", type:"title"
                  , placeholder:"Total Prep Time"
                  , id: "recipeTime"}
            , button @ "clickme", {className:"button-primary"}
            

        , row @ @[]
          div @ {className:"eight columns"},
            @[] label @ "Example Message", {for:"exampleMessage"}
              , textarea @ {className:"u-full-width", placeholder:"Hi Dave …", id:"exampleMessage"}
              , label @ {className:"example-send-yourself-copy"},
                @[] input @ {type:"checkbox"}
                  , span @ "Send a copy to yourself", {className:"label-body"}
              , input @ {className:"button-primary", type:"submit", value:"Submit"}
             


class Steps ::
    constructor() ::
        self.ingredients = []

class NutritionFacts ::
    constructor() ::
        self.ingredients = []

