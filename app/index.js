import React from 'react'
import ReactDOM from 'react-dom'

import {Header, Footer, InputRecipe, ViewRecipes} from './components'
import {RecipeStore} from './model/recipes.js'
import {div, h, input} from 'react-hyperscript-helpers'

// CSS IMPORTS

import styles from './styles/main.styl'
import skeleton from './styles/skeleton.css'
import normalize from './styles/normalize.css'

const store = new RecipeStore()

const row = (children) =>
  typeof children == 'string' 
    ?  div @ {className:"row"}, [children]
    :  div @ {className:"row"}, children

class Application extends React.Component ::
  constructor (props) ::
    super(props)
    this.state = {place:"add"}
  move (place) ::
    console.log @: place
    this.setState @: place

  inputRecipe () ::
    return row @ @[] h @ InputRecipe, {store}

  showRecipes () ::
    return row @ @[] h @ ViewRecipes, {store}
    
  render() ::
    console.log @ this.state
    const body = this.state.place == "home" ? this.showRecipes() : this.inputRecipe()
    console.log @: body
    
    return div @ {className:"container"}, @[]
        row @ @[] h @ Header
      , row @ @[] 
          input @: type:"button", className: "button-secondary", value:"add", onClick:() => this.move("add")
        , input @: type:"button", className: "button-secondary", value:"home", onClick:() => this.move("home")
      , body
      , row @ @[] h @ Footer



ReactDOM.render @ <Application />, document.getElementById @ "app"
